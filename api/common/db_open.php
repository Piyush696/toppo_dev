<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$db_name = "topicopo_dev";

// $servername = "localhost";
// $username = "root";
// $password = "";

// CREATE CONNECTION
$conn = new mysqli($servername, $username, $password, $db_name);

//	CHECK CONNECTION
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}
