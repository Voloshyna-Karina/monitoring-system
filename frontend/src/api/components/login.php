<?php
require_once '../server.php';

$login = $_POST['login'];
$password = $_POST['password'];

$login = $conn->real_escape_string($login);
$password = $conn->real_escape_string($password);

$password = md5($password);

$sql = "SELECT `userName`, `userPassword` FROM `users` WHERE userName='$login' AND userPassword='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false]);
}

$conn->close();
?>