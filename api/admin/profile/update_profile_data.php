<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require_once("../../common/db_open.php");
require_once("../../common/site_config.php");
require_once("../../fnc/utilities.php");

// GET INPUTS FROM THE REQUEST FROM FRONT-END
$_POST = json_decode(file_get_contents('php://input'), true);
$response = array();
if(isset($_POST)) 
{
	$user_id = mysqli_real_escape_string($conn,$_POST['user_id']);
	$role_code = mysqli_real_escape_string($conn,$_POST['role_code']);
	$upload_path_name = mysqli_real_escape_string($conn,$_POST['upload_path_name']);

	$namefirst = mysqli_real_escape_string($conn,$_POST['namefirst']);
	$namelast = mysqli_real_escape_string($conn,$_POST['namelast']);
	$email = mysqli_real_escape_string($conn,$_POST['email']);
	$phonemobile = mysqli_real_escape_string($conn,$_POST['phonemobile']);
	$address1 = mysqli_real_escape_string($conn,$_POST['address1']);
	$address2 = mysqli_real_escape_string($conn,$_POST['address2']);
	$skype = mysqli_real_escape_string($conn,$_POST['skype']);
	$phoneother = mysqli_real_escape_string($conn,$_POST['phoneother']);
	$city = mysqli_real_escape_string($conn,$_POST['city']);
	$state = mysqli_real_escape_string($conn,$_POST['state']);
	$country = mysqli_real_escape_string($conn,$_POST['country']);
	$zip = mysqli_real_escape_string($conn,$_POST['zip']);


	if(isset($_POST['avatar']['value']))
	{

		$base64_content = str_replace('data:image/png;base64,', '', $_POST['avatar']['value']);

		if(ENVIRONMENT=='DEVELOPMENT')
		{
			$path = "../../../angular/src/assets/img/admin";
			if(!is_dir($path)){
			  mkdir($path);
			}
			$path = $path."/avatar";
			if(!is_dir($path)){
			  mkdir($path);
			}

			file_put_contents($path.'/'.$upload_path_name.'_'.$user_id.'.png', base64_decode($base64_content));
		}
		else
		{
			$path = "../../../assets/img/admin";
			if(!is_dir($path)){
			  mkdir($path);
			}
			$path = $path."/avatar";
			if(!is_dir($path)){
			  mkdir($path);
			}
			file_put_contents($path.'/'.$upload_path_name.'_'.$user_id.'.png', base64_decode($base64_content));
		}
					
	}
	
	if($role_code=='A')
	{
		$sql = "UPDATE administrator SET namefirst='".$namefirst."', namelast='".$namelast."', email='".$email."', phonemobile='".$phonemobile."', address1='".$address1."', address2='".$address2."', skype='".$skype."', phoneother='".$phoneother."', city='".$city."', state='".$state."', country='".$country."', zip='".$zip."' WHERE administrator_id = ".$user_id;
	}
	else
	{
		$sql = "UPDATE user SET namefirst='".$namefirst."', namelast='".$namelast."', email='".$email."', phonemobile='".$phonemobile."', address1='".$address1."', address2='".$address2."', skype='".$skype."', phoneother='".$phoneother."', city='".$city."', state='".$state."', country='".$country."', zip='".$zip."' WHERE user_id = ".$user_id;
	}

	if(mysqli_query($conn,$sql))
	{
		$response['success'] = true;
	}
	else 
	{
		$response['success'] = false;	
	}
}
	
//SEND JSON DATA BACK
echo json_encode($response);	

?>