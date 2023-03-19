<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require_once("../common/db_open.php");
require_once("../fnc/utilities.php");
// GET INPUTS FROM THE REQUEST FROM FRONT-END
$_POST = json_decode(file_get_contents('php://input'), true);
$selectedtopic = $_POST['selectedtopic'];

if(isset($_POST)) 
{
    $flag = false;
    $sql2 = "SELECT tabtitle FROM `tab-guide` WHERE topic_id = ( select topic_id from topic where topic = '".$selectedtopic."')";
    $result2 = mysqli_query($conn,$sql2);
    $tabTitle = array();
    if($result2 && mysqli_num_rows($result2)>0)
    {
        while ($row = mysqli_fetch_array($result2,MYSQLI_NUM)) {
            array_push($tabTitle, $row[0]);
        }
    }

	$response =array();
	$sql = "SELECT * FROM tabtype WHERE tabparent_id IS NULL order by tabtype_id";
	$result = mysqli_query($conn,$sql);  
	while($data = mysqli_fetch_array($result,MYSQLI_ASSOC))
	{
        $flag = false;
		$children=array();
		if($data['hasLowerLevel']=='Y')
		{
			$sql1 = "SELECT * FROM tabtype WHERE tabparent_id=".$data['tabtype_id']." order by tabtype_id";
			$result1 = mysqli_query($conn,$sql1);  
			if($result1 && mysqli_num_rows($result1)>0)
			{
				while($data1 = mysqli_fetch_array($result1,MYSQLI_ASSOC))
				{
                    if (in_array($data1['tabname'], $tabTitle))
                    {
                        $flag = true;
                    }

					$children[] = array(
						'tabtype_id' => $data1['tabtype_id'], 
						'tabname' => $data1['tabname'],
						'description' => $data1['description'],
                        'value' => $flag
					);
                    $flag = false;
				}
			}
		}

		if (in_array($data['tabname'], $tabTitle))
        {
            $flag = true;
        }


		$response[] = array(
			'tabtype_id' => $data['tabtype_id'], 
			'tabname' => $data['tabname'],
			'description' => $data['description'],
            'value' => $flag,
			'children' => $children,
            'activetab' => $tabTitle
		);
	}
	
	echo json_encode($response);	
}
?>