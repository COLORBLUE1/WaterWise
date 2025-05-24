-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 24, 2025 at 01:59 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `WaterWiseBD`
--

-- --------------------------------------------------------

--
-- Table structure for table `Foros`
--

CREATE TABLE `Foros` (
  `foroId` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `contenido` text DEFAULT NULL,
  `fechaCreacion` datetime DEFAULT NULL,
  `estado` enum('activo','inactivo') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Foros`
--

INSERT INTO `Foros` (`foroId`, `userId`, `titulo`, `contenido`, `fechaCreacion`, `estado`) VALUES
(1, 1, 'Problema con juego', 'No carga correctamente el juego de naruto y gkoku', '2025-05-20 08:41:10', 'activo'),
(2, 2, 'Sugerencia de mejora', 'Podrían agregar más preguntas', '2025-05-20 08:41:10', 'activo'),
(3, 3, 'Duda con puntuaciones', 'No entiendo cómo se calculan', '2025-05-20 08:41:10', 'activo'),
(4, 4, 'Error visual', 'Hay un bug en la interfaz', '2025-05-20 08:41:10', 'activo'),
(5, 5, 'Felicitaciones', 'Un foro es un espacio, ya sea físico o virtual, donde se facilita la discusión, debate y intercambio de ideas sobre un tema específico. Es un lugar de encuentro para diferentes personas con intereses comunes, donde pueden expresar sus opiniones, hacer preguntas y participar en una conversación organizada. \nUn foro es un espacio, ya sea físico o virtual, donde se facilita la discusión, debate y intercambio de ideas sobre un tema específico. Es un lugar de encuentro para diferentes personas con intereses comunes, donde pueden expresar sus opiniones, hacer preguntas y participar en una conversación organizada. \n', '2025-05-20 08:41:10', 'activo'),
(6, 7, 'saaa', 'saaaa', '2025-05-22 20:36:13', 'activo'),
(8, 7, 'prueba', 'esto es una prueba asi que melooo', '2025-05-22 21:08:31', 'activo');

-- --------------------------------------------------------

--
-- Table structure for table `Juegos`
--

CREATE TABLE `Juegos` (
  `juegoId` int(11) NOT NULL,
  `portada` varchar(255) NOT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `tipo` enum('ahorcado','selección múltiple','verdadero o falso') DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `nivel` enum('básico','intermedio','avanzado') DEFAULT NULL,
  `fechaCreacion` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Juegos`
--

INSERT INTO `Juegos` (`juegoId`, `portada`, `titulo`, `tipo`, `descripcion`, `nivel`, `fechaCreacion`) VALUES
(1, 'https://www.shutterstock.com/image-vector/hangman-icon-vector-symbol-design-600nw-2516503065.jpg', 'Juego del Ahorcado', 'ahorcado', 'Adivina la palabra', 'básico', '2025-05-20 08:41:09'),
(2, 'https://www.shutterstock.com/shutterstock/photos/2182660943/display_1500/stock-vector-quiz-questions-and-test-menu-choice-template-for-trivia-game-vector-bubble-frames-quiz-multiple-2182660943.jpg', 'selecion multiple', 'selección múltiple', 'Preguntas de ciencia general', 'intermedio', '2025-05-20 08:41:09'),
(3, 'https://cerebriti.b-cdn.net/uploads/FB_734a907ead47989010331b7b5c582670.jpg', 'Verdadero o Falso', 'verdadero o falso', 'Cuestionario rápido de matemáticas', 'avanzado', '2025-05-20 08:41:09');

-- --------------------------------------------------------

--
-- Table structure for table `LikesPublicaciones`
--

CREATE TABLE `LikesPublicaciones` (
  `likeId` int(11) NOT NULL,
  `publicacionId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `LikesPublicaciones`
--

INSERT INTO `LikesPublicaciones` (`likeId`, `publicacionId`, `userId`, `fecha`) VALUES
(1, 1, 2, '2025-05-20 08:41:10'),
(2, 1, 3, '2025-05-20 08:41:10'),
(3, 2, 1, '2025-05-20 08:41:10'),
(4, 4, 3, '2025-05-20 08:41:10'),
(5, 5, 2, '2025-05-20 08:41:10');

-- --------------------------------------------------------

--
-- Table structure for table `Notificaciones`
--

CREATE TABLE `Notificaciones` (
  `notificacionId` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `mensaje` text DEFAULT NULL,
  `leido` tinyint(1) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Notificaciones`
--

INSERT INTO `Notificaciones` (`notificacionId`, `userId`, `mensaje`, `leido`, `fecha`) VALUES
(1, 1, 'Tu puntuación ha sido actualizada.', 0, '2025-05-20 08:41:10'),
(2, 2, 'Nueva publicación disponible.', 1, '2025-05-20 08:41:10'),
(3, 3, 'Tienes una respuesta en el foro.', 0, '2025-05-20 08:41:10'),
(4, 4, 'Actualización en los juegos.', 1, '2025-05-20 08:41:10'),
(5, 5, 'Tu comentario fue respondido.', 0, '2025-05-20 08:41:10');

-- --------------------------------------------------------

--
-- Table structure for table `Preguntas`
--

CREATE TABLE `Preguntas` (
  `preguntaId` int(11) NOT NULL,
  `juegoId` int(11) DEFAULT NULL,
  `tipo` enum('ahorcado','selección múltiple','verdadero o falso') DEFAULT NULL,
  `pregunta` text DEFAULT NULL,
  `opciones` text DEFAULT NULL,
  `respuestaCorrecta` varchar(100) DEFAULT NULL,
  `fechaCreacion` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Preguntas`
--

INSERT INTO `Preguntas` (`preguntaId`, `juegoId`, `tipo`, `pregunta`, `opciones`, `respuestaCorrecta`, `fechaCreacion`) VALUES
(1, 1, 'ahorcado', 'Animal que ladra', NULL, 'perro', '2025-05-20 08:41:09'),
(2, 2, 'selección múltiple', '¿Cuál es el planeta más grande?', '[\"Marte\",\"Tierra\",\"Júpiter\",\"Venus\"]', 'Júpiter', '2025-05-20 08:41:09'),
(3, 2, 'selección múltiple', '¿Qué gas respiramos?', '[\"Oxígeno\",\"Hidrógeno\",\"CO2\",\"Nitrógeno\"]', 'Oxígeno', '2025-05-20 08:41:09'),
(4, 2, 'verdadero o falso', '¿2 + 2 = 4?', NULL, 'true', '2025-05-20 08:41:09'),
(5, 1, 'ahorcado', 'Ave nocturna con grandes ojos', NULL, 'búho', '2025-05-20 08:41:09');

-- --------------------------------------------------------

--
-- Table structure for table `Publicaciones`
--

CREATE TABLE `Publicaciones` (
  `publicacionId` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `contenido` text DEFAULT NULL,
  `likes` int(11) DEFAULT 0,
  `fechaCreacion` datetime DEFAULT NULL,
  `estado` enum('activa','inactiva') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Publicaciones`
--

INSERT INTO `Publicaciones` (`publicacionId`, `userId`, `titulo`, `contenido`, `likes`, `fechaCreacion`, `estado`) VALUES
(1, 1, 'Mi primera publicación', 'Hola a todos', 3, '2025-05-20 08:41:09', 'activa'),
(2, 2, 'Aprendiendo SQL', '¡Es más fácil de lo que parece!', 5, '2025-05-20 08:41:09', 'activa'),
(3, 3, 'Tips de estudio', 'Organiza tu tiempo', 1, '2025-05-20 08:41:09', 'activa'),
(4, 4, 'Compartiendo un juego', 'Prueben el nuevo quiz', 2, '2025-05-20 08:41:09', 'activa'),
(5, 5, 'Buenas noticias', '¡Logré un nuevo récord!', 4, '2025-05-20 08:41:09', 'inactiva');

-- --------------------------------------------------------

--
-- Table structure for table `RespuestasForo`
--

CREATE TABLE `RespuestasForo` (
  `respuestaId` int(11) NOT NULL,
  `foroId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `contenido` text DEFAULT NULL,
  `fecha` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `RespuestasForo`
--

INSERT INTO `RespuestasForo` (`respuestaId`, `foroId`, `userId`, `contenido`, `fecha`) VALUES
(1, 1, 2, 'Intenta recargar la página.', '2025-05-20 08:41:10'),
(2, 2, 3, 'Buena idea, lo anotaremos.', '2025-05-20 08:41:10'),
(3, 3, 4, 'Es por tiempo y respuestas correctas.', '2025-05-20 08:41:10'),
(4, 4, 5, 'Estoy viendo lo mismo.', '2025-05-20 08:41:10'),
(5, 5, 1, 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ', '2025-05-20 08:41:10'),
(6, 1, 7, 'Elimina todo bro', '2025-05-22 20:04:20'),
(7, 3, 7, 'No se mate y duerma mano', '2025-05-22 20:05:55'),
(8, 2, 7, 'parceee', '2025-05-22 20:17:19'),
(9, 6, 7, 'rdgf', '2025-05-22 20:36:27'),
(10, 1, 7, 'voy a dormir bro', '2025-05-22 21:07:58'),
(11, 8, 7, 'seguro?', '2025-05-22 21:08:54');

-- --------------------------------------------------------

--
-- Table structure for table `Resultados`
--

CREATE TABLE `Resultados` (
  `resultadoId` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `juegoId` int(11) DEFAULT NULL,
  `puntaje` int(11) DEFAULT NULL,
  `tiempo` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Resultados`
--

INSERT INTO `Resultados` (`resultadoId`, `userId`, `juegoId`, `puntaje`, `tiempo`, `fecha`) VALUES
(1, 1, 1, 80, 120, '2025-05-20 08:41:09'),
(2, 2, 2, 90, 100, '2025-05-20 08:41:09'),
(3, 3, 3, 100, 95, '2025-05-20 08:41:09'),
(4, 4, 1, 70, 110, '2025-05-20 08:41:09'),
(5, 5, 2, 85, 130, '2025-05-20 08:41:09');

-- --------------------------------------------------------

--
-- Table structure for table `Usuarios`
--

CREATE TABLE `Usuarios` (
  `userId` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `contrasena` varchar(255) NOT NULL,
  `rol` enum('usuario','administrador') DEFAULT NULL,
  `fechaRegistro` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Usuarios`
--

INSERT INTO `Usuarios` (`userId`, `nombre`, `correo`, `contrasena`, `rol`, `fechaRegistro`) VALUES
(1, 'Abel', 'camilo@gmail.com', '$2a$12$6tL.hIXPDfoLIUg3nXmSMOFAvpZng34gxVkQ95YkdAyaUIcck.nPG', 'usuario', '2025-05-20 08:41:09'),
(2, 'Carlos Pérez', 'carlos@example.com', '', 'usuario', '2025-05-20 08:41:09'),
(3, 'María Torres', 'maria@example.com', '', 'administrador', '2025-05-20 08:41:09'),
(4, 'Luis Ramírez', 'luis@example.com', '', 'usuario', '2025-05-20 08:41:09'),
(5, 'Elena Rojas', 'elena@example.com', '', 'usuario', '2025-05-20 08:41:09'),
(6, 'damilo', 'camilo1@gmail.com', '$2b$10$3OXEXKbGyub2Yp45DVPEvehb/SQmVA7ro29Qh67KphsjOTrNKnxfm', 'usuario', '2025-05-22 18:44:56'),
(7, 'camilo', 'abel@gmail.com', '$2b$10$BIpXgphOaDqt4tdf2bjlWev06OBkHRjHP/Yt59BH4SoaCCjbipNFq', 'administrador', '2025-05-22 18:45:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Foros`
--
ALTER TABLE `Foros`
  ADD PRIMARY KEY (`foroId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `Juegos`
--
ALTER TABLE `Juegos`
  ADD PRIMARY KEY (`juegoId`);

--
-- Indexes for table `LikesPublicaciones`
--
ALTER TABLE `LikesPublicaciones`
  ADD PRIMARY KEY (`likeId`),
  ADD KEY `publicacionId` (`publicacionId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `Notificaciones`
--
ALTER TABLE `Notificaciones`
  ADD PRIMARY KEY (`notificacionId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `Preguntas`
--
ALTER TABLE `Preguntas`
  ADD PRIMARY KEY (`preguntaId`),
  ADD KEY `juegoId` (`juegoId`);

--
-- Indexes for table `Publicaciones`
--
ALTER TABLE `Publicaciones`
  ADD PRIMARY KEY (`publicacionId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `RespuestasForo`
--
ALTER TABLE `RespuestasForo`
  ADD PRIMARY KEY (`respuestaId`),
  ADD KEY `foroId` (`foroId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `Resultados`
--
ALTER TABLE `Resultados`
  ADD PRIMARY KEY (`resultadoId`),
  ADD KEY `userId` (`userId`),
  ADD KEY `juegoId` (`juegoId`);

--
-- Indexes for table `Usuarios`
--
ALTER TABLE `Usuarios`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Foros`
--
ALTER TABLE `Foros`
  MODIFY `foroId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `Juegos`
--
ALTER TABLE `Juegos`
  MODIFY `juegoId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `LikesPublicaciones`
--
ALTER TABLE `LikesPublicaciones`
  MODIFY `likeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Notificaciones`
--
ALTER TABLE `Notificaciones`
  MODIFY `notificacionId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Preguntas`
--
ALTER TABLE `Preguntas`
  MODIFY `preguntaId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Publicaciones`
--
ALTER TABLE `Publicaciones`
  MODIFY `publicacionId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `RespuestasForo`
--
ALTER TABLE `RespuestasForo`
  MODIFY `respuestaId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `Resultados`
--
ALTER TABLE `Resultados`
  MODIFY `resultadoId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Usuarios`
--
ALTER TABLE `Usuarios`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Foros`
--
ALTER TABLE `Foros`
  ADD CONSTRAINT `Foros_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Usuarios` (`userId`);

--
-- Constraints for table `LikesPublicaciones`
--
ALTER TABLE `LikesPublicaciones`
  ADD CONSTRAINT `LikesPublicaciones_ibfk_1` FOREIGN KEY (`publicacionId`) REFERENCES `Publicaciones` (`publicacionId`),
  ADD CONSTRAINT `LikesPublicaciones_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `Usuarios` (`userId`);

--
-- Constraints for table `Notificaciones`
--
ALTER TABLE `Notificaciones`
  ADD CONSTRAINT `Notificaciones_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Usuarios` (`userId`);

--
-- Constraints for table `Preguntas`
--
ALTER TABLE `Preguntas`
  ADD CONSTRAINT `Preguntas_ibfk_1` FOREIGN KEY (`juegoId`) REFERENCES `Juegos` (`juegoId`);

--
-- Constraints for table `Publicaciones`
--
ALTER TABLE `Publicaciones`
  ADD CONSTRAINT `Publicaciones_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Usuarios` (`userId`);

--
-- Constraints for table `RespuestasForo`
--
ALTER TABLE `RespuestasForo`
  ADD CONSTRAINT `RespuestasForo_ibfk_1` FOREIGN KEY (`foroId`) REFERENCES `Foros` (`foroId`),
  ADD CONSTRAINT `RespuestasForo_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `Usuarios` (`userId`);

--
-- Constraints for table `Resultados`
--
ALTER TABLE `Resultados`
  ADD CONSTRAINT `Resultados_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Usuarios` (`userId`),
  ADD CONSTRAINT `Resultados_ibfk_2` FOREIGN KEY (`juegoId`) REFERENCES `Juegos` (`juegoId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
