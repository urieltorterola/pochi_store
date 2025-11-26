<?php

session_start();


require 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = $_POST["email"];
    $password = $_POST["password"];

    $sql = "SELECT id, nombre, password FROM usuarios WHERE correo = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows === 1) {
        $usuario = $resultado->fetch_assoc();

        if (password_verify($password, $usuario["password"])) {
            $_SESSION['usuario_nombre'] = $usuario['nombre']; 
            $_SESSION['usuario_id'] = $usuario['id'];
            header("Location: ../../index.php");
            exit();
        } else {
            echo "Contraseña incorrecta";
        }
    } else {
        echo "El correo no existe o no se ha encontrado.";
    }
    
    $stmt->close();
    $conn->close();
}

?>