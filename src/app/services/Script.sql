-- Crear base de datos
CREATE DATABASE IF NOT EXISTS red_social_familiar;
USE red_social_familiar;

-- Tabla Usuarios
CREATE TABLE Usuarios (
    userId INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    correo VARCHAR(100) UNIQUE,
    rol ENUM('usuario', 'administrador'),
    fechaRegistro DATETIME
);

-- Tabla Juegos
CREATE TABLE Juegos (
    juegoId INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    tipo ENUM('ahorcado', 'selección múltiple', 'verdadero o falso'),
    descripcion TEXT,
    nivel ENUM('básico', 'intermedio', 'avanzado'),
    fechaCreacion DATETIME
);

-- Tabla Preguntas
CREATE TABLE Preguntas (
    preguntaId INT AUTO_INCREMENT PRIMARY KEY,
    juegoId INT,
    tipo ENUM('ahorcado', 'selección múltiple', 'verdadero o falso'),
    pregunta TEXT,
    opciones TEXT, -- JSON string para múltiples opciones
    respuestaCorrecta VARCHAR(100),
    fechaCreacion DATETIME,
    FOREIGN KEY (juegoId) REFERENCES Juegos(juegoId)
);

-- Tabla Resultados
CREATE TABLE Resultados (
    resultadoId INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    juegoId INT,
    puntaje INT,
    tiempo INT,
    fecha DATETIME,
    FOREIGN KEY (userId) REFERENCES Usuarios(userId),
    FOREIGN KEY (juegoId) REFERENCES Juegos(juegoId)
);

-- Tabla Publicaciones
CREATE TABLE Publicaciones (
    publicacionId INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    titulo VARCHAR(100),
    contenido TEXT,
    likes INT DEFAULT 0,
    fechaCreacion DATETIME,
    estado ENUM('activa', 'inactiva'),
    FOREIGN KEY (userId) REFERENCES Usuarios(userId)
);

-- Tabla LikesPublicaciones
CREATE TABLE LikesPublicaciones (
    likeId INT AUTO_INCREMENT PRIMARY KEY,
    publicacionId INT,
    userId INT,
    fecha DATETIME,
    FOREIGN KEY (publicacionId) REFERENCES Publicaciones(publicacionId),
    FOREIGN KEY (userId) REFERENCES Usuarios(userId)
);

-- Tabla Foros
CREATE TABLE Foros (
    foroId INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    titulo VARCHAR(100),
    contenido TEXT,
    fechaCreacion DATETIME,
    estado ENUM('activo', 'inactivo'),
    FOREIGN KEY (userId) REFERENCES Usuarios(userId)
);

-- Tabla RespuestasForo
CREATE TABLE RespuestasForo (
    respuestaId INT AUTO_INCREMENT PRIMARY KEY,
    foroId INT,
    userId INT,
    contenido TEXT,
    fecha DATETIME,
    FOREIGN KEY (foroId) REFERENCES Foros(foroId),
    FOREIGN KEY (userId) REFERENCES Usuarios(userId)
);

-- Tabla Notificaciones
CREATE TABLE Notificaciones (
    notificacionId INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    mensaje TEXT,
    leido BOOLEAN,
    fecha DATETIME,
    FOREIGN KEY (userId) REFERENCES Usuarios(userId)
);

-- Inserción de Usuarios
INSERT INTO Usuarios (nombre, correo, rol, fechaRegistro) VALUES
('Ana Gómez', 'ana@example.com', 'usuario', NOW()),
('Carlos Pérez', 'carlos@example.com', 'usuario', NOW()),
('María Torres', 'maria@example.com', 'administrador', NOW()),
('Luis Ramírez', 'luis@example.com', 'usuario', NOW()),
('Elena Rojas', 'elena@example.com', 'usuario', NOW());

-- Inserción de Juegos
INSERT INTO Juegos (titulo, tipo, descripcion, nivel, fechaCreacion) VALUES
('Juego del Ahorcado', 'ahorcado', 'Adivina la palabra', 'básico', NOW()),
('Trivia de Ciencia', 'selección múltiple', 'Preguntas de ciencia general', 'intermedio', NOW()),
('Verdadero o Falso Matemáticas', 'verdadero o falso', 'Cuestionario rápido de matemáticas', 'avanzado', NOW()),
('Trivia de Historia', 'selección múltiple', 'Historia del mundo', 'básico', NOW()),
('Ahorcado de Animales', 'ahorcado', 'Nombres de animales', 'básico', NOW());

-- Inserción de Preguntas
INSERT INTO Preguntas (juegoId, tipo, pregunta, opciones, respuestaCorrecta, fechaCreacion) VALUES
(1, 'ahorcado', 'Animal que ladra', NULL, 'perro', NOW()),
(2, 'selección múltiple', '¿Cuál es el planeta más grande?', '["Marte","Tierra","Júpiter","Venus"]', 'Júpiter', NOW()),
(2, 'selección múltiple', '¿Qué gas respiramos?', '["Oxígeno","Hidrógeno","CO2","Nitrógeno"]', 'Oxígeno', NOW()),
(3, 'verdadero o falso', '¿2 + 2 = 4?', NULL, 'true', NOW()),
(5, 'ahorcado', 'Ave nocturna con grandes ojos', NULL, 'búho', NOW());

-- Inserción de Resultados
INSERT INTO Resultados (userId, juegoId, puntaje, tiempo, fecha) VALUES
(1, 1, 80, 120, NOW()),
(2, 2, 90, 100, NOW()),
(3, 3, 100, 95, NOW()),
(4, 4, 70, 110, NOW()),
(5, 5, 85, 130, NOW());

-- Inserción de Publicaciones
INSERT INTO Publicaciones (userId, titulo, contenido, likes, fechaCreacion, estado) VALUES
(1, 'Mi primera publicación', 'Hola a todos', 3, NOW(), 'activa'),
(2, 'Aprendiendo SQL', '¡Es más fácil de lo que parece!', 5, NOW(), 'activa'),
(3, 'Tips de estudio', 'Organiza tu tiempo', 1, NOW(), 'activa'),
(4, 'Compartiendo un juego', 'Prueben el nuevo quiz', 2, NOW(), 'activa'),
(5, 'Buenas noticias', '¡Logré un nuevo récord!', 4, NOW(), 'inactiva');

-- Inserción de LikesPublicaciones
INSERT INTO LikesPublicaciones (publicacionId, userId, fecha) VALUES
(1, 2, NOW()),
(1, 3, NOW()),
(2, 1, NOW()),
(4, 3, NOW()),
(5, 2, NOW());

-- Inserción de Foros
INSERT INTO Foros (userId, titulo, contenido, fechaCreacion, estado) VALUES
(1, 'Problema con juego', 'No carga correctamente el juego', NOW(), 'activo'),
(2, 'Sugerencia de mejora', 'Podrían agregar más preguntas', NOW(), 'activo'),
(3, 'Duda con puntuaciones', 'No entiendo cómo se calculan', NOW(), 'activo'),
(4, 'Error visual', 'Hay un bug en la interfaz', NOW(), 'activo'),
(5, 'Felicitaciones', 'Gran trabajo con la plataforma', NOW(), 'activo');

-- Inserción de RespuestasForo
INSERT INTO RespuestasForo (foroId, userId, contenido, fecha) VALUES
(1, 2, 'Intenta recargar la página.', NOW()),
(2, 3, 'Buena idea, lo anotaremos.', NOW()),
(3, 4, 'Es por tiempo y respuestas correctas.', NOW()),
(4, 5, 'Estoy viendo lo mismo.', NOW()),
(5, 1, 'Gracias por el apoyo.', NOW());

-- Inserción de Notificaciones
INSERT INTO Notificaciones (userId, mensaje, leido, fecha) VALUES
(1, 'Tu puntuación ha sido actualizada.', FALSE, NOW()),
(2, 'Nueva publicación disponible.', TRUE, NOW()),
(3, 'Tienes una respuesta en el foro.', FALSE, NOW()),
(4, 'Actualización en los juegos.', TRUE, NOW()),
(5, 'Tu comentario fue respondido.', FALSE, NOW());
