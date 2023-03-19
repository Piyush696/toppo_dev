<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    session_start();
	session_cache_limiter(FALSE); 
    
	require_once("../common/db_open.php");
	require_once("../fnc/utilities.php");

	// GET INPUTS FROM THE REQUEST FROM FRONT-END
	$_POST = json_decode(file_get_contents('php://input'), true);
	
	if(isset($_POST)) 
	{
		$dataObj =[];
		$dataObj["success"] = true;
		$user = array();

		$useremail = mysqli_real_escape_string($conn,$_POST['useremail']);
	  	$userpassword = mysqli_real_escape_string($conn,$_POST['userpassword']);
	  	$remember = isset($_POST['remember']) ? mysqli_real_escape_string($conn,$_POST['remember']) : "";
		$sql = "SELECT * FROM administrator WHERE email = '$useremail'";

		$result = mysqli_query($conn,$sql);      
		$user = mysqli_fetch_array($result,MYSQLI_ASSOC);
		$count = mysqli_num_rows($result);

		// USER PRESENT
		if($count == 1) 
		{  
			$hash = $user["password"];

			if(password_verify($userpassword, $hash)) 
			{
				// CORRECT PASSWORD
				$_SESSION["user_role"] = 'A';
				$_SESSION["namefirst"] = $user["namefirst"];
				$_SESSION["namelast"] = $user["namelast"];
				$_SESSION["admin_email"] = $user["email"];

				//  REMEMBER THE USER IF THEY WANT TO BE REMEMBERED
				if($remember == "on") 
				{
					set_user_cookie($user["email"], $conn);
				}
				else
				{
					remove_user_cookie();
				}

			} 
			else 
			{
			  // INCORRECT PASSWORD
				$dataObj["success"]= false;
				$dataObj["error_type"] = "password";

			}
		}
		else 
		{
			$dataObj["success"]= false;
			$dataObj["error_type"] = "email";
		}
		$dataObj["user"] = $user;

		//SEND JSON DATA BACK
		echo json_encode($dataObj);	
	}
?>