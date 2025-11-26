<?php
require 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre   = $_POST["nombre"];
    $email    = $_POST["email"];
    $dni      = $_POST["dni"];
    $password = $_POST["password"];
    $confirm  = $_POST["confirm-password"];

    if ($password !== $confirm) {
        die("Las contraseñas no coinciden");
    }

    $password_hash = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO usuarios (nombre, correo, dni, password, fecha_registro)
            VALUES (?, ?, ?, ?, CURDATE())";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $nombre, $email, $dni, $password_hash);

    if ($stmt->execute()) {
       
        header("Location: ../../index.php");
        exit();
    } else {
        echo "Error: " . $conn->error;
    }

    $stmt->close();
    $conn->close();
}

session_start();

$_SESSION["usuario_nombre"] = $nombre;  D
$_SESSION["usuario_dni"] = $dni;       
