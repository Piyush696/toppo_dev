<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require_once("../common/db_open.php");
require_once("../fnc/utilities.php");

// GET INPUTS FROM THE REQUEST FROM FRONT-END
$_POST = json_decode(file_get_contents('php://input'), true);
	
if(isset($_POST)) 
{
	$dataObj =[];
	if($_POST['user_id']!='' && $_POST['user_role']!='')
	{
		$sql="SELECT similarwebcategory_id FROM similarwebcategory WHERE category='".$_POST['newtopiccategory']."' AND subcategory='".$_POST['newtopicsubcategory']."'";
		$result = mysqli_query($conn,$sql);
		$data = mysqli_fetch_array($result,MYSQLI_ASSOC);
		$similarwebcategory_id = $data['similarwebcategory_id'];

		$sql="INSERT INTO topic(topic,topictype_id,similarwebcategory_id,topicstatus_id,admin_id) VALUES('".$_POST['newtopic']."','".$_POST['newtopictype']."','".$similarwebcategory_id."','".$_POST['newtopicstatus']."','".$_POST['user_id']."')";
		mysqli_query($conn,$sql);

		$dataObj["success"] = true;

		$topic_id = mysqli_insert_id($conn);

		$sql = "SELECT t.topic_id, a.namefirst, a.namelast, t.topic, ts.topicstatus_id, ts.status, tt.topictype_id, tt.name, swc.category, swc.subcategory FROM topic t, topictype tt, similarwebcategory swc, topicstatus ts, administrator a WHERE t.topic_id=$topic_id and t.topictype_id=tt.topictype_id and t.similarwebcategory_id=swc.similarwebcategory_id and t.topicstatus_id=ts.topicstatus_id and t.admin_id=a.administrator_id";
		$result = mysqli_query($conn,$sql);
		while($data = mysqli_fetch_array($result,MYSQLI_ASSOC))
		{
			
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

		$dataObj["count"] = 1;
		$dataObj["topics"] = $topics;

	}
	else
	{
		$dataObj["success"] = false;
	}	
	echo json_encode($dataObj);	
}
?>