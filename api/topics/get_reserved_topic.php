<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require_once("../common/db_open.php");
require_once("../fnc/utilities.php");

// GET INPUTS FROM THE REQUEST FROM FRONT-END
$_POST = json_decode(file_get_contents('php://input'), true);
	
if(isset($_POST)) 
{
	// RESPONSE ARRAY
	$response =array('count' => 0, 'topics' => array());

	//TOPICS ARRAY
	$topics = array();

	// DECLARING CONDITION VARIABLE
	$condition=1;
    $userId=$_POST['userId'];
    $userRole=$_POST['userRole'];

	if(isset($_POST['filter']['filters']))
	{	

		$filters=$_POST['filter']['filters'];
		foreach ($filters as $item) 
		{
			// ADDING CONDITIONS FOR EACH FILTER SELECTION TO CONDITION VARIABLE
			$field=$item['field'];
			$value=$item['value'];

			if($field=='topic')
			{
				$condition.=" and t.topic like '%".$value."%'";
			}
			if($field=='topictype')
			{
				$condition.=" and t.topictype_id='".$value."'";
			}
			if($field=='topiccategory')
			{
				$condition.=" and swc.category='".$value."'";
			}
			if($field=='topicsubcategory')
			{
				$condition.=" and swc.subcategory='".$value."'";
			}
			if($field=='topicstatus')
			{
				$condition.=" and t.topicstatus_id='".$value."'";
			}
			else
			{
			    if($userRole && $userRole === 'A')
                {
                    $condition.=" and (t.topicstatus_id='TSV' OR t.topicstatus_id='TOP')";
                }
                else
                {
                    $condition.=" and t.topicstatus_id NOT IN ('TOP', 'TSV', 'RSV')";
                }
			}

		}
	}
	else
	{
		// ADDING CONDITIONS IF NO FILTER APPLIED
        if($userRole && $userRole === 'A')
        {
            $condition .= " and (t.topicstatus_id='TSV' OR t.topicstatus_id='TOP')";
        }
        else
        {
            $condition.=" and t.topicstatus_id NOT IN ('TOP', 'TSV', 'RSV')";
        }
	}



	$orderby='t.topic_id';
	$order='asc';

	if(isset($_POST['sort'][0]))
	{
		// APPLIYING ORDER BY FOR GRID DATA
		$sortdata = $_POST['sort'][0];
		$order=$sortdata['dir'];
		if($sortdata['field']=='topic_id')
			$orderby='t.topic_id';
		if($sortdata['field']=='topic')
			$orderby='t.topic';
		if($sortdata['field']=='topictype.text')
			$orderby='tt.name';
		if($sortdata['field']=='category')
			$orderby='swc.category';
		if($sortdata['field']=='subcategory')
			$orderby='swc.subcategory';
		if($sortdata['field']=='status.status')
			$orderby='ts.status';

	}

	// START AND LIMIT FOR QUERY
	$start = mysqli_real_escape_string($conn,$_POST['skip']);
  	$limit = mysqli_real_escape_string($conn,$_POST['take']);

  	// IF USER IS NON ADMIN
    if($userRole && $userId && $userRole !== 'A')
    {
    	// GENERATING CONDITION FOR NON ADMIN
    	$condition.=" and t.topic_id = u.topic_id and u.user_id = '".$userId."' and u.role = '".$userRole."'";

    	// QUERY FOR TOTAL RECORDS
		$sql = "SELECT t.topic_id FROM topic t, topictype tt, similarwebcategory swc, topicstatus ts, user_topic u WHERE $condition and t.topictype_id = tt.topictype_id and t.similarwebcategory_id = swc.similarwebcategory_id and t.topicstatus_id=ts.topicstatus_id";
		$result = mysqli_query($conn,$sql);
		$count = mysqli_num_rows($result);

        // QUERY FOR CURRENT PAGE RECORDS
        $sql = "SELECT t.topic_id, t.topic, ts.topicstatus_id, ts.status, tt.topictype_id, tt.name, swc.category, swc.subcategory FROM topic t, topictype tt, similarwebcategory swc, topicstatus ts, user_topic u WHERE $condition and t.topictype_id = tt.topictype_id and t.similarwebcategory_id = swc.similarwebcategory_id and t.topicstatus_id=ts.topicstatus_id order by $orderby $order limit $start, $limit";
    }
    else
    {
    	// QUERY FOR TOTAL RECORDS
    	$sql = "SELECT t.topic_id FROM topic t, topictype tt, similarwebcategory swc, topicstatus ts, administrator a WHERE $condition and t.topictype_id=tt.topictype_id and t.similarwebcategory_id=swc.similarwebcategory_id and t.topicstatus_id=ts.topicstatus_id and t.admin_id=a.administrator_id";
		$result = mysqli_query($conn,$sql);
		$count = mysqli_num_rows($result);

		// QUERY FOR CURRENT PAGE RECORDS
        $sql = "SELECT t.topic_id, a.namefirst, a.namelast, t.topic, ts.topicstatus_id, ts.status, tt.topictype_id, tt.name, swc.category, swc.subcategory FROM topic t, topictype tt, similarwebcategory swc, topicstatus ts, administrator a WHERE $condition and t.topictype_id=tt.topictype_id and t.similarwebcategory_id=swc.similarwebcategory_id and t.topicstatus_id=ts.topicstatus_id and t.admin_id=a.administrator_id order by $orderby $order limit $start, $limit";
    }
 
    $result = mysqli_query($conn,$sql);

    while($data = mysqli_fetch_array($result,MYSQLI_ASSOC))
	{
		// INSERTING GRID DATA INTO TOPICS ARRAY
		$topics[] = array(
			'topic_id' => $data['topic_id'], 
			'topic' => $data['topic'],
			'topictype' => array('val' => $data['topictype_id'], 'text' => $data['name']),
			'category' => $data['category'], 
			'subcategory' => $data['subcategory'],
			'status' => array('val' => $data['topicstatus_id'], 'text' => $data['status']),
			'createdby' => $data['namefirst'].' '.$data['namelast']
		);
	}

	// TOTAL RECORD IN RESPONSE ARRAY
	$response["count"] = $count;

	// GRID DATA (TOPICS ARRAY) FOR CURRENT PAGE IN RESPONSE ARRAY
	$response["topics"] = $topics;

	// RETURNING JSON RESPONSE
	echo json_encode($response);	
}
?>