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
	if(isset($_POST['category']))
	{
		$sql = "SELECT subcategory FROM similarwebcategory where category='".$_POST['category']."' order by category";
		$result = mysqli_query($conn,$sql);  
		while($data = mysqli_fetch_array($result,MYSQLI_ASSOC))
		{
			$response[] = array(
				'val' => $data['subcategory'], 
				'text' => $data['subcategory']
			);
			//$response[] = $data['subcategory'];
		}
	}
	
	echo json_encode($response);	
}
?>