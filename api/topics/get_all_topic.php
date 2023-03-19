<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require_once("../common/db_open.php");
require_once("../fnc/utilities.php");

// GET INPUTS FROM THE REQUEST FROM FRONT-END
$_POST = json_decode(file_get_contents('php://input'), true);

$response = array();

if($_POST['userRole'] && $_POST['userRole'] !== 'A')
{
    $sql = "select * from topic t, user_topic u where t.topic_id = u.topic_id and u.user_id = '".$_POST['userId']."' and u.role = '".$_POST['userRole']."' ORDER BY topic";
}
else
{
    $sql = "SELECT * FROM topic ORDER BY topic";
}


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