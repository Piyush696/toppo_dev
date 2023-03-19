<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require_once("../common/site_config.php");
require_once("../common/db_open.php");
require_once("../fnc/utilities.php");

require "../vendor/autoload.php";
use \Firebase\JWT\JWT;
 

	// GET INPUTS FROM THE REQUEST FROM FRONT-END
	$_POST = json_decode(file_get_contents('php://input'), true);
	
	if(isset($_POST)) 
	{
		$dataObj =[];
		$dataObj["success"] = true;
		$user = array();

		$username = mysqli_real_escape_string($conn,$_POST['username']);
	  	$remember = isset($_POST['remember']) ? mysqli_real_escape_string($conn,$_POST['remember']) : "";

	  	if(ENVIRONMENT=='DEVELOPMENT')
	  	{

				$sql = "SELECT * FROM user WHERE username = '$username'";
				$result = mysqli_query($conn,$sql);      
				$count = mysqli_num_rows($result);

				if($count == 1) 
				{  
					$user = mysqli_fetch_array($result,MYSQLI_ASSOC);
					// REMEMBER THE USER IF THEY WANT TO BE REMEMBERED
					if($remember == true) 
					{
						set_user_cookie($user["username"], $conn);
					}
					else
					{
						remove_user_cookie();
					}

					
					$sql1 = "SELECT DISTINCT(role_id) FROM user_role_topic WHERE user_id = ".$user['user_id'];
					$results = mysqli_query($conn,$sql1);
					$count = mysqli_num_rows($results);
					
					 if($count >0) 
					 {
						$user["roles"] = array();

						while ($data=mysqli_fetch_array($results,MYSQLI_ASSOC)) 
						{
							$roleDetails = (object)[];
							$roleDetails->roleId = $data['role_id'];
							$sql2 ="SELECT DISTINCT(internallink_id) FROM `d-internallink` WHERE role_id = '".$data['role_id']."'";
							$result1 = mysqli_query($conn,$sql2);
							$count1 = mysqli_num_rows($result1);
							$roleDetails->links = array();
								while ($data1 = mysqli_fetch_array($result1,MYSQLI_ASSOC))
								{
									array_push($roleDetails->links,$data1['internallink_id']);
								}
							
							array_push($user["roles"],$roleDetails);
						}
					}
					else
					{
						$dataObj["success"]= false;
						$dataObj["error_type"] = "username";
					}
	
				}

				else
				{
						$dataObj["success"]= false;
						$dataObj["error_type"] = "username";
				}
			}
		else
		{
			if($_SERVER['HTTP_HOST']==ADMIN_PORTAL) 
			{
				
				$sql = "SELECT * FROM user WHERE username = '$username'";
				$result = mysqli_query($conn,$sql);      
				$count = mysqli_num_rows($result);

				if($count == 1) 
				{  
					$user = mysqli_fetch_array($result,MYSQLI_ASSOC);
					// REMEMBER THE USER IF THEY WANT TO BE REMEMBERED
					if($remember == true) 
					{
						set_user_cookie($user["username"], $conn);
					}
					else
					{
						remove_user_cookie();
					}

					
					$sql1 = "SELECT DISTINCT(role_id) FROM user_role_topic WHERE user_id = ".$user['user_id'];
					$results = mysqli_query($conn,$sql1);
					$count = mysqli_num_rows($results);
					
					 if($count >0) 
					 {
						$user["roles"] = array();
						//$user["links"] = array();

						while ($data=mysqli_fetch_array($results,MYSQLI_ASSOC)) 
						{
							$roleDetails = (object)[];
							$roleDetails->roleId = $data['role_id'];
							$sql2 ="SELECT DISTINCT(internallink_id) FROM `d-internallink` WHERE role_id = '".$data['role_id']."'";
							$result1 = mysqli_query($conn,$sql2);
							$count1 = mysqli_num_rows($result1);
							$roleDetails->links = array();
								while ($data1 = mysqli_fetch_array($result1,MYSQLI_ASSOC))
								{
									array_push($roleDetails->links,$data1['internallink_id']);
								}
							
							array_push($user["roles"],$roleDetails);
						}
					}
					else
					{
						$dataObj["success"]= false;
						$dataObj["error_type"] = "username";
					}
	
				}

				else
				{
						$dataObj["success"]= false;
						$dataObj["error_type"] = "username";
				}
			}
		}
		
		$token = JWT::encode($user, 'TOPICOPOIS_JWT_SECRET_KEY');
		$dataObj["user"] = $user;
			
		//SEND JSON DATA BACK
		echo json_encode($dataObj);	
	}
?>
