<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require_once("../common/db_open.php");
require_once("../fnc/utilities.php");

// GET INPUTS FROM THE REQUEST FROM FRONT-END
$_POST = json_decode(file_get_contents('php://input'), true);
	
if(isset($_POST)) 
{
	$condition = 1;
	if(isset($_POST['status']) && count($_POST['status'])>0)
	{
		$condition .= " AND (";
		$i=1;
		foreach ($_POST['status'] as $key => $value) 
		{
			if($i == 1)
				$condition .= "topicstatus_id='".$value."'";
			else
				$condition .= " OR topicstatus_id='".$value."'";

			$i++;
		}
		$condition .= ")";
	}

	if(isset($_POST['userRole']) && $_POST['userRole'] !== 'A')
    {
        $condition .= " AND topicstatus_id NOT IN ('TOP', 'TSV', 'RSV')";
    }

	$response =array();
	$response[] = array(
		'val' => '', 
		'text' => 'Select'
	);
	$sql = "SELECT * FROM topicstatus WHERE $condition order by status";
	$result = mysqli_query($conn,$sql);
	while($data = mysqli_fetch_array($result,MYSQLI_ASSOC))
	{
		$response[] = array(
			'val' =>  $data['topicstatus_id'], 
			'text' => $data['status']
		);
	}
	
	echo json_encode($response);	
}
?>