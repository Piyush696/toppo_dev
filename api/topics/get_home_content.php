<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require_once("../common/db_open.php");
require_once("../fnc/utilities.php");

// GET INPUTS FROM THE REQUEST FROM FRONT-END
$_POST = json_decode(file_get_contents('php://input'), true);

$response = array();

if($_POST['searchedTopic'])
{
    $sql = "SELECT * FROM `tab-home` WHERE topic_id = ( SELECT topic_id FROM topic WHERE topic = '".$_POST['searchedTopic']."')";
}
$result = mysqli_query($conn,$sql);
$count = mysqli_num_rows($result);
if($result)
{
    if($count === 0)
    {
        $sql = "SELECT * FROM `tab-home` WHERE topicstatus_id = 'UNC'";
        $result = mysqli_query($conn,$sql);
    }
    while($row = mysqli_fetch_array($result,MYSQLI_ASSOC))
    {
        array_push($response, $row);
    }
}


echo json_encode($response);

mysqli_free_result($result);

?>