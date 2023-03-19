<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require_once("../common/db_open.php");
require_once("../fnc/utilities.php");

// GET INPUTS FROM THE REQUEST FROM FRONT-END
$_POST = json_decode(file_get_contents('php://input'), true);

$response = array();
$searchterm = $_POST['searchterm'];

$sql = "SELECT tabtype_id, tabname, tabparent_id from tab where tabtype_id in (
        SELECT tabtype_id FROM topic_tab where topic_id in ( 
        SELECT topic_id FROM topic where topicstatus_id in ('LIV', 'TSV', 'TOP') 
        and lower(topic) = '$searchterm'))";


$result = mysqli_query($conn,$sql);
if($result)
{
    while($row = mysqli_fetch_array($result,MYSQLI_ASSOC))
    {
        array_push($response, $row);
    }

}

echo json_encode($response);

mysqli_free_result($result);

?>