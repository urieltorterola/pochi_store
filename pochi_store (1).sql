-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-11-2025 a las 21:41:25
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pochi_store`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `dni` varchar(20) NOT NULL,
  `fecha_registro` date DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `correo`, `dni`, `fecha_registro`, `password`) VALUES
(1, 'a', 'a@gmail.com', '497', '2025-11-25', '$2y$10$hJ35ANRSvvE1e6x7szDZVuCmbxgVWEwDOCrvStbesY2k9kn4GnZLi'),
(2, 'a', 'a@gmail.com', '497', '2025-11-25', '$2y$10$/9Y6ObMSnzTVWngOBt6t3e/b8rX..TgZHGNCaS2nRKuUtbAhxlroa'),
(3, 'a', 'a@gmail.com', '497', '2025-11-25', '$2y$10$vtZH43RpGc4u39gS4weU0.mHW7sGPEIiCj1ooPS4rknAvHkhRW9DW'),
(4, 'a', 'a@gmail.com', '497', '2025-11-25', '$2y$10$kqfakhZNElg.G1N8TgOXb.t2Y9YUO0j2Wbrk8cP5nmci9sIiUdyEW'),
(5, 'b', 'b@gmail.com', '1', '2025-11-25', '$2y$10$tc8Q.mfER0bfL.r/.rF6bORJ8Cl6wDHM8kiS.GaE9tuCVNn/zfoIu'),
(6, 'lucas gay', 'lucas@gmail.com', '2324242', '2025-11-25', '$2y$10$zFhvwIeNY4daZMVu92Z9p.s3PSQT3zIMV9YJY3L6RPvepajn8Nn0q'),
(7, 'alex', 'alex@gmail.com', '43343', '2025-11-25', '$2y$10$NhVRk/okOVWeSCh5Ekc.DuFaChwFwfsMsA9GdwrI8fAa/KkIsyV1C');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
