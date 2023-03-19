<?php
	session_cache_limiter(FALSE); 
    session_start();
    
	include 'db_open.php';
	
	// RETRIEVE ERROR MESSAGES TO DISPLAY
	$sql = "SELECT message_id, message from message";
	$result = mysqli_query($conn,$sql);
	$error_message = array();

	if($result) 
	{
		while($row = mysqli_fetch_array($result,MYSQLI_ASSOC)) 
		{             
		  $error_message[$row['message_id']] = $row['message'];
		} 
	}
	mysqli_free_result($result);

	//GET SITEVARIABLES AND DEFINE THOSE AS CONSTANTS
	$sql = "SELECT * FROM sitevariable";
    $result = mysqli_query($conn,$sql);
    $sitevariables = mysqli_fetch_array( $result, MYSQLI_ASSOC);
	mysqli_free_result($result);

	//URL TO USE IN RESOURCE PATHS
	define 
	(
		"BASE_URL", ($_SERVER["SERVER_NAME"] == "localhost" || $_SERVER["SERVER_NAME"] == "127.0.0.1")
	   	? "http://localhost/topic/"
	   	: "https://topicopolis.com/"
	);

	//URLS TO USE IN INCLUDE PATHS
	define
	(
		"BASE_PATH", ($_SERVER["SERVER_NAME"] == "localhost" || $_SERVER["SERVER_NAME"] == "127.0.0.1")
	   	? $_SERVER["DOCUMENT_ROOT"] ."/topic/"
	   	: $_SERVER["DOCUMENT_ROOT"] . "/"
	);

	//DEFINE ENVIRONMENT
	define
	(
		"ENVIRONMENT", ($_SERVER["SERVER_NAME"] == "localhost" || $_SERVER["SERVER_NAME"] == "127.0.0.1")
	   	? "DEVELOPMENT"
	   	: "PRODUCTION"
	);

	define('EDITOR_PORTAL','editor.topicopolis.com');
	define('ADMIN_PORTAL','admin.topicopolis.com');

	//DEFINE SESSION TIMEOUT LIMIT IN SECONDS.
    define("SESSIONTIME", $sitevariables["sessiontime"] * 60);

    $ROLE_ARRAY=array(
    	'E'  => array('ordering' => 1, 'name' => 'Editor'),
    	'CE' => array('ordering' => 2, 'name' => 'Contributing Editor'),
    	'P'  => array('ordering' => 3, 'name' => 'Producer'),
    	'C'  => array('ordering' => 4, 'name' => 'Contributor')
    );
?>