<?php

require "../vendor/autoload.php";
use \Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"));
$dataObj =[];
$token = $data->token;
// DECODING TOKEN WITH SECRET KEY
try {
$decoded = JWT::decode($token, "TOPICOPOIS_JWT_SECRET_KEY", array('HS256'));
$dataObj["success"] = true;
$dataObj["user"] = $decoded;
}
catch (Exception $e){
$decoded = 'unauthorized';
$dataObj["success"] = false;
$dataObj["user"] = $decoded;
}
// USER DETAILS RESPONSE AS JSON

echo json_encode($dataObj);

?>
