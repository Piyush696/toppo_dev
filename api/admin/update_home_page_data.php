<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require_once("../common/db_open.php");
require_once("../common/site_config.php");
require_once("../fnc/utilities.php");

// GET INPUTS FROM THE REQUEST FROM FRONT-END
$_POST = json_decode(file_get_contents('php://input'), true);
$response = array();
if(isset($_POST)) {

    $title = mysqli_real_escape_string($conn, $_POST['title']);
    $topic_id = mysqli_real_escape_string($conn, $_POST['topic_id']);
    $topicstatus_id = mysqli_real_escape_string($conn, $_POST['topicstatus']);
    $svgname = mysqli_real_escape_string($conn, $_POST['image_name']);
    $body = mysqli_real_escape_string($conn, $_POST['content']);
    $tab_home_id = mysqli_real_escape_string($conn, $_POST['tab_home_id']);


    if (isset($_POST['imageBase64']))
    {

        $base64_content = str_replace('data:image/svg+xml;base64,', '', $_POST['imageBase64']);

        if (ENVIRONMENT == 'DEVELOPMENT')
        {
            $path = "../../angular/src/assets/svg/hometab";
            if (!is_dir($path))
            {
                mkdir($path,0777,true);
            }
            file_put_contents($path.'/'.$svgname, base64_decode($base64_content));

        }
        else
        {
            $path = "../../../assets/svg/hometab";
            if (!is_dir($path)) {
                mkdir($path);
            }
            file_put_contents($path . '/' . $svgname, base64_decode($base64_content));
        }

    }

    if ($tab_home_id != '')
    {
        $sql = "UPDATE `tab-home` SET topic_id='" . $topic_id . "', topicstatus_id='" . $topicstatus_id . "', title='" . $title . "', body='" . $body . "', svgname='" . $svgname . "' WHERE `tab-home_id` = " . $tab_home_id;
    }
    else
    {
        $sql = "INSERT INTO `tab-home` (topic_id, topicstatus_id, title, body, svgname) VALUES ('" . $topic_id . "', '" . $topicstatus_id . "', '" . $title . "', '" . $body . "', '" . $svgname . "');";
    }

    if (mysqli_query($conn, $sql))
    {
        $response['success'] = true;
    } else {
        $response['success'] = false;
    }


}

//SEND JSON DATA BACK
echo json_encode($response);

?>