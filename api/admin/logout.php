<?php
	header('Access-Control-Allow-Origin: *'); 
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    session_start();
	session_cache_limiter(FALSE); 
    
	require_once("../common/db_open.php");
	
	// GET INPUTS FROM THE REQUEST FROM FRONT-END
	$_POST = json_decode(file_get_contents('php://input'), true);

	// TERMINATING THE SESSION 
	unset($_SESSION);
	session_destroy();
	$dataObj =[];
	$dataObj["success"] = true;

	//SEND JSON DATA BACK
	echo json_encode($dataObj);	
	exit();
?>

