<?php

$host="127.0.0.1";
$port=3306;
$user="root";
$password="";
$dbname="monitoring_system";

$con = new mysqli($host, $user, $password, $dbname, $port)
	or die ('Could not connect to the database server' . mysqli_connect_error());

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>