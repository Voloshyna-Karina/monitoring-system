<?php
require_once '../server.php';

if(isset($_POST['idCode'], $_POST['login'], $_POST['password'])) {
    $idCode = $_POST['idCode'];
    $login = $_POST['login'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("INSERT INTO users (idPersonalCode, userName, userPassword) VALUES (?, ?, ?)");

    if ($stmt && $stmt->bind_param("sss", $idCode, $login, $password) && $stmt->execute()) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => $conn->error]);
    }

    $stmt->close();
} else {
    echo json_encode(["success" => false, "error" => "Missing data in POST request"]);
}

$conn->close();
?>