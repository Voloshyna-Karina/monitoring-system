<?php
require_once '../server.php';

$data = json_decode(file_get_contents('php://input'), true);

$idPersonalCode = $data['idCode'];
$userName = $data['login'];
$userPassword = $data['password'];

$sql = "INSERT INTO users (idCode, login, password) VALUES ('$idPersonalCode', '$userName', '$userPassword')";

if ($conn->query($sql) === TRUE) {
    $response = ["success" => true, "message" => "Дані успішно додані до бази даних"];
} else {
    $response = [
        "success" => false,
        "message" => "Помилка при додаванні даних: " . $conn->error,
        "sql" => $sql  // Додаємо сам SQL-запит до виведення
    ];
}

// Отправка результата клиенту
header('Content-Type: application/json');
echo json_encode($response);

$conn->close();
?>