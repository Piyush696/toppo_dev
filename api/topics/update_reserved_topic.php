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
	if($_POST['topic_id']!='')
	{
		
		$sql="SELECT similarwebcategory_id FROM similarwebcategory WHERE category='".$_POST['category']."' AND subcategory='".$_POST['subcategory']."'";
		$result = mysqli_query($conn,$sql);
		$data = mysqli_fetch_array($result,MYSQLI_ASSOC);
		$similarwebcategory_id = $data['similarwebcategory_id'];
		$topictype_id = $_POST['topictype']['val'];
		$topicstatus_id = $_POST['status']['val'];
		$sql="UPDATE topic SET topic='".addslashes($_POST['topic'])."', topictype_id='".$topictype_id."', similarwebcategory_id='".$similarwebcategory_id."', topicstatus_id='".$topicstatus_id."' WHERE topic_id=".$_POST['topic_id'];
		mysqli_query($conn,$sql);
		$dataObj["success"] = true;

	}	
	else
	{
		$dataObj["success"] = false;
	}	
	echo json_encode($dataObj);	
}
?>