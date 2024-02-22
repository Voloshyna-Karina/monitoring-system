<?php
require_once '../server.php';

$idCode = $_POST['idCode'];
$login = $_POST['login'];
$password = $_POST['password'];

$idCode = $conn->read_exif_data($idCode);
$login = $conn->real_escape_string($login);
$password = $conn->real_escape_string($password);

$password = password_hash($password, PASSWORD_BCRYPT);

$sql = "INSERT INTO `users`(`idPersonalCode`, `userName`, `userPassword`) VALUES ('[$idCode]','[$login]','[$password]')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => $conn->error]);
}

$conn->close();
?>