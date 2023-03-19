<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require_once("../common/db_open.php");
require_once("../fnc/utilities.php");

// GET INPUTS FROM THE REQUEST FROM FRONT-END
$_POST = json_decode(file_get_contents('php://input'), true);
	
if(isset($_POST)) 
{
	$response =array();
	$response[] = array(
		'val' => '', 
		'text' => 'Select'
	);

	$sql = "SELECT topictype_id, name FROM topictype order by name";
	$result = mysqli_query($conn,$sql);  
	while($data = mysqli_fetch_array($result,MYSQLI_ASSOC))
	{
	
		$response[] = array(
			'val' => $data['topictype_id'], 
			'text' => $data['name']
		);
	}
	
	echo json_encode($response);	
}
?>