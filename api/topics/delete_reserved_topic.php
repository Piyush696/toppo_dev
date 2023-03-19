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
		$sql="DELETE FROM topic WHERE topic_id=".$_POST['topic_id'];
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