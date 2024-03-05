<?php
// server/api.php

header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$login = $data['login'];
$password = $data['password'];

// Приклад: Підключення до бази даних
$host = "localhost";
$db_name = "monitoring_system";
$username = "root";
$password_db = "";

try {
    $conn = new PDO("mysql:host=$host;dbname=$db_name", $username, $password_db);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Реалізуйте власну логіку перевірки логіна і пароля
    // В цьому прикладі використано простий вибір з таблиці users
    $stmt = $conn->prepare("SELECT * FROM users WHERE userName = :login AND userPassword = :password");
    $stmt->bindParam(':userName', $login);
    $stmt->bindParam(':userPassword', $password);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Невірний логін або пароль']);
    }
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Помилка підключення до бази даних: ' . $e->getMessage()]);
}


// header('Content-Type: application/json');

// $host="127.0.0.1";
// $port=3306;
// $user="root";
// $password="";
// $dbname="monitoring_system";

// // Создаем соединение с базой данных
// $conn = new mysqli($host, $user, $password, $dbname, $port) or die('Could not connect to the database server' . mysqli_connect_error());

// // Проверка соединения с базой данных
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }

// // Получаем данные из запроса
// $data = json_decode(file_get_contents("php://input"), true);

// $login = $data['login'];
// $password = $data['password'];

// // Обезопасим данные перед использованием в запросе
// $login = $conn->real_escape_string($login);
// $password = $conn->real_escape_string($password);

// // Хешируем пароль (лучше использовать более безопасные методы, чем md5)
// $password = md5($password);

// // Выполняем SQL-запрос
// $sql = "SELECT `userName`, `userPassword` FROM `users` WHERE userName='$login' AND userPassword='$password'";
// $result = $conn->query($sql);

// // Проверяем результат запроса и отправляем ответ в формате JSON
// if ($result->num_rows > 0) {
//     echo json_encode(["success" => true]);
// } else {
//     echo json_encode(["success" => false]);
// }

// // Закрываем соединение с базой данных
// $conn->close();
?>