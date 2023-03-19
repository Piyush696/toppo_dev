<?php
	header('Access-Control-Allow-Origin: *'); 
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    session_start();
	session_cache_limiter(FALSE); 
    
	require_once("../common/db_open.php");
	
	// GET INPUTS FROM THE REQUEST FROM FRONT-END
	$_POST = json_decode(file_get_contents('php://input'), true);

	if(isset($_POST)) 
	{
		$filter = $_POST["zip"];
		$sqlzip = "SELECT * from zip where id LIKE '$filter%'";
		$result1 = mysqli_query($conn,$sqlzip);
		$zip = array();

		if ( $result1 ) 
		{ 
			while($row1 = mysqli_fetch_array($result1,MYSQLI_ASSOC)) 
			{             
				$zip[] = $row1;
			} 
		} 
		mysqli_free_result($result1);

		$dataObj =[];
		if(empty($zip)) 
		{
			$dataObj["success"] = false;
		}
		else
		{
			$dataObj["success"] = true;
		}
		$dataObj["zipdata"] = $zip;
		
		//SEND JSON DATA BACK
		echo json_encode($dataObj);	
	}
?>