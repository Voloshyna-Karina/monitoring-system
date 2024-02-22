<?php
require_once '../server.php';

// Проверка наличия данных в $_POST
if(isset($_POST['idCode'])) {
    $idCode = $_POST['idCode'];

    // Используйте подготовленные запросы
    $stmt = $conn->prepare("DELETE FROM users WHERE idPersonalCode = ?");

    // Проверка успешного подключения и выполнения запроса
    if ($stmt && $stmt->bind_param("i", $idCode) && $stmt->execute()) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => $conn->error]);
    }

    // Закрытие подготовленного запроса
    $stmt->close();
} else {
    echo json_encode(["success" => false, "error" => "Missing 'idPersonalCode' data in POST request"]);
}

// Закрытие соединения с базой данных
$conn->close();
?>
