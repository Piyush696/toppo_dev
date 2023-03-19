<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require_once("../../common/db_open.php");
require_once("../../fnc/utilities.php");

// GET INPUTS FROM THE REQUEST FROM FRONT-END
$_POST = json_decode(file_get_contents('php://input'), true);
$user = array();
if(isset($_POST)) 
{
	$user_id = mysqli_real_escape_string($conn,$_POST['user_id']);
	$role_code = mysqli_real_escape_string($conn,$_POST['role_code']);

	if($role_code=='A')
	{
		$sql = "SELECT * FROM administrator WHERE administrator_id = ".$user_id;
		$result = mysqli_query($conn,$sql);      
		$user = mysqli_fetch_array($result,MYSQLI_ASSOC);
	}
	else
	{
		$sql = "SELECT * FROM user WHERE user_id = ".$user_id;
		$result = mysqli_query($conn,$sql);      
		$user = mysqli_fetch_array($result,MYSQLI_ASSOC);
	}

}
	
//SEND JSON DATA BACK
echo json_encode($user);	

?>