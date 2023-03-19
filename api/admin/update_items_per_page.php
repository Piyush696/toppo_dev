<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
session_start();
session_cache_limiter(FALSE); 

require_once("../common/db_open.php");
require_once("../fnc/utilities.php");

// GET INPUTS FROM THE REQUEST FROM FRONT-END
$_POST = json_decode(file_get_contents('php://input'), true);
	
if(isset($_POST['number'])) 
{
	$dataObj =[];
	$dataObj["success"] = true;
	$sql = "UPDATE administrator SET items_per_page=".$_POST['number']." WHERE administrator_id = ".$_POST['user_id'];
	$result = mysqli_query($conn,$sql);      

	//SEND JSON DATA BACK
	echo json_encode($dataObj);	
}
?>