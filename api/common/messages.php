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
		$sql = "SELECT message_id, message, title from message";
		$result = mysqli_query($conn,$sql);
		$site_messages = array();

		if($result) 
		{

			$sql1 = "SELECT * from sitevariable";
			$result1 = mysqli_query($conn,$sql1);
			$site_variables = mysqli_fetch_array($result1,MYSQLI_ASSOC);

			$fieldsArray = array();
			$sql2 = "SHOW COLUMNS FROM sitevariable";
			$result2 = mysqli_query($conn,$sql2);
			while($row2 = mysqli_fetch_array($result2))
			{
			    $fieldsArray[]=$row2['Field'];
			}

			while($row = mysqli_fetch_array($result,MYSQLI_ASSOC)) 
			{
				if(strstr($row['message'],'[sitevariable'))
				{
					$message = $row['message'];
					foreach ($fieldsArray as $field) 
					{
						$shortcode = '[sitevariable.'.$field.']';
						$value = $site_variables[$field];
						$message = str_replace($shortcode, $value, $message);
					}
					$site_messages[$row['message_id']] = $message;
				}
			  	else
			  	{
			  		$site_messages[$row['message_id']] = $row['message'];
			  	}
			  	$site_messages["title_".$row['message_id']] = $row['title'];
			} 
		}
		mysqli_free_result($result);


		$dataObj =[];
		$dataObj["success"] = true;
		$dataObj["message"] = $site_messages;
		echo json_encode($dataObj);	
	}
?>