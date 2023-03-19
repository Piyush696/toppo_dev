<?php
	header('Access-Control-Allow-Origin: *'); 
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	session_cache_limiter(FALSE); 
    session_start();
    
	require_once("../common/db_open.php");
	
	// GET INPUTS FROM THE REQUEST FROM FRONT-END
	$_POST = json_decode(file_get_contents('php://input'), true);

	if(isset($_POST)) 
	{
		$forbiddenwords  = [];
        $exceptionwords  = [];

		//GET FORBIDDEN WORDS FROM THE DATABASE
		$sql = "SELECT forbiddenword.forbiddenword from forbiddenword";
		$result = mysqli_query($conn,$sql);
		if ($result) 
		{ 
		  while($row = mysqli_fetch_array($result,MYSQLI_NUM)) 
		  {             
			$forbiddenwords[] = $row[0];
		  } 
		} 
		else 
		{ 
		  echo "Error: no forbidden words";
		}  
		mysqli_free_result($result);

        //GET EXCEPTION WORDS FROM THE DATABASE
        $sql = "SELECT forbiddenwordexception.exception from forbiddenwordexception";
        $result = mysqli_query($conn,$sql);
        if ($result)
        {
            while($row = mysqli_fetch_array($result,MYSQLI_NUM))
            {
                $exceptionwords[] = $row[0];
            }
        }
        else
        {
            echo "Error: no forbidden words";
        }
        mysqli_free_result($result);


		$dataObj =[];
		$dataObj["success"] = true;
		$dataObj["words"] = $forbiddenwords;
		$dataObj["exception"] = $exceptionwords;
		
		//SEND JSON DATA BACK
		echo json_encode($dataObj);	
		exit();
	}
?>