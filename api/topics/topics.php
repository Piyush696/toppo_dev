<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
session_start();
session_cache_limiter(FALSE);

require_once("../common/db_open.php");

// GET INPUTS FROM THE REQUEST FROM FRONT-END
$_POST = json_decode(file_get_contents('php://input'), true);
$searchterm = strtolower($_POST['searchterm'] );

// SEARCH TOPIC INTO TOPIC TABLE
$sql = "SELECT * FROM topic where lower(topic) like '$searchterm' AND (topicstatus_id like 'LIV' OR topicstatus_id like 'TSV' OR topicstatus_id like 'TOP')";

// echo json_encode($sql);
$result = mysqli_query($conn,$sql);
$obj = array();

if($result->num_rows > 0) 
{	
	$isFound = false;
	$topicId = 0;
	while($row = mysqli_fetch_array($result,MYSQLI_ASSOC)) 
	{     
		$obj['id'] = $row['topic_id'];
		$obj['topic'] = $row['topic'];
		$obj['topicstatus_id'] = $row['topicstatus_id'];
		$obj['found'] = true;
	}
}
else
{
	// WHEN SEARCHED TERM IS NOT FOUND
	$obj['id'] = 0;
	$obj['topic'] = $searchterm;
	$obj['topicstatus_id'] = 'UNC';
	$obj['found'] = false;
}
echo json_encode($obj);

exit();