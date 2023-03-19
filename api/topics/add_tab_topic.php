<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require_once("../common/db_open.php");
require_once("../fnc/utilities.php");

// GET INPUTS FROM THE REQUEST FROM FRONT-END
$_POST = json_decode(file_get_contents('php://input'), true);
$selectedtopic = $_POST['selectedtopic'];
$activetabs = $_POST['tabs'];
	
if(isset($_POST)) 
{
	$dataObj =[];
    $sql = "SELECT topic_id FROM topic WHERE topic = '".$selectedtopic."'";
    $result = mysqli_query($conn,$sql);
    $data = mysqli_fetch_array($result,MYSQLI_ASSOC);
    $topicId = $data['topic_id'];

	if($topicId)
	{
        $topicListQuery = "SELECT tabtitle FROM `tab-guide` WHERE topic_id = ".$topicId;
        $topicList = mysqli_query($conn,$topicListQuery);
        $existingTabs = array();
        while ($row = mysqli_fetch_array($topicList,MYSQLI_ASSOC)) {
            array_push($existingTabs, $row['tabtitle']);
        }

        $sep = "'" . implode ( "', '", $existingTabs ) . "'";
        $delete = "DELETE from `tab-guide` WHERE topic_id = ".$topicId." AND tabtitle IN (".$sep.")";
        mysqli_query($conn,$delete);

        if(count($activetabs) > 0)
        {
            foreach ($activetabs as $tab)
            {
                $insert="INSERT INTO `tab-guide`(topic_id, tabtitle) VALUES('".$topicId."','". $tab."')";
                mysqli_query($conn,$insert);
            }
        }
        $dataObj["success"] = true;
	}	
	else
	{
		$dataObj["success"] = false;
	}	
	echo json_encode($dataObj);	
}
?>