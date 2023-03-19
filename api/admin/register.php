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

		$first_name = $conn->real_escape_string($_POST['first_name']);
		$last_name = $conn->real_escape_string($_POST['last_name']);
		$email = $conn->real_escape_string($_POST['email']);
		$password = $conn->real_escape_string($_POST['password']);
		$phonemobile = $conn->real_escape_string($_POST['phonemobile']);
		$phoneother = $conn->real_escape_string($_POST['phoneother']);
		$skype = $conn->real_escape_string($_POST['skype']);
		$address1 = $conn->real_escape_string($_POST['address1']);
		$address2 = $conn->real_escape_string($_POST['address2']);
		$city = $conn->real_escape_string($_POST['city']);
		$state = $conn->real_escape_string($_POST['state']);
		$zip = $conn->real_escape_string($_POST['zip']);
		$country = $conn->real_escape_string($_POST['country']);
		$firstip =  $_SERVER['REMOTE_ADDR']; 

		// CHECKING WHETHER USER ALREADY EXISTS OR NOT
		$chkemail="SELECT * FROM administrator WHERE `email`='".$email."'";
		$resultemail=$conn->query($chkemail);

		// CREATING USER IF DOES NOT ALREADY EXIST
		if($resultemail->num_rows<1)
		{
			// NEED TO SECURE THE PASSWORD. CREATE HASH AND STORE THAT IN DATABASE
			$password_hash = password_hash($password, PASSWORD_BCRYPT);
			$sql="INSERT INTO administrator (namefirst,namelast, email, phoneother, phonemobile, skype, password, address1, address2, city, state, zip, country, firstip, datecreated) "
			    . "VALUES ('".$first_name."','".$last_name."', '".$email."', '".$phoneother."', '".$phonemobile."', '".$skype."', '".$password_hash."', '".$address1."','".$address2."','".$city."', '".$state."','".$zip."', '".$country."','".$firstip."', CURRENT_TIMESTAMP)";

			// IF ANY ERROR, SHOW MESSAGE ELSE CREATE USER
			if(!$result = $conn->query($sql))
			{
			    die('There was an error running the query [' . $conn->error . ']');
			    $dataObj["success"]= false;
				$dataObj["error_type"] = "account";
			}

			else
			{
			    $dataObj["success"]= true;
				$dataObj["error_type"] = "";	  
			}
		}

		else
		{
			$dataObj["success"]= false;
			$dataObj["error_type"] = "email";
		    
		}

		//SEND JSON DATA BACK
		echo json_encode($dataObj);	
		exit();
	}
?>