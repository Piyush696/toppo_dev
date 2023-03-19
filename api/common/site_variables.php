<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
session_cache_limiter(FALSE); 
session_start();

include 'db_open.php';

$_POST = json_decode(file_get_contents('php://input'), true);
if(isset($_POST)) 
{
	// RETRIEVE ERROR MESSAGES TO DISPLAY
	$sql = "SELECT * from sitevariable";
	$result = mysqli_query($conn,$sql);
	$site_variables = mysqli_fetch_array($result,MYSQLI_ASSOC);

	$dataObj =[];
	$dataObj["success"] = true;
	$dataObj["variables"] = $site_variables;
	echo json_encode($dataObj);	
}
?>