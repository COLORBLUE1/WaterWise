const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'WaterWiseBD'
});

con.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});


// AUTH ENDPOINTS

// Endpoint para login
app.post('/api/login', (req, res) => {
  const { correo, contrasena } = req.body;
  const sql = 'SELECT * FROM Usuarios WHERE correo = ? LIMIT 1';
  con.query(sql, [correo], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error en la base de datos' });
    }
    if (results.length === 0) return res.status(401).json({ error: 'Credenciales incorrectas' });

    const usuario = results[0];
    console.log('Body:', req.body);
    console.log('Usuario:', usuario);
    bcrypt.compare(contrasena, usuario['contrasena'], (err, isMatch) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error al comparar contraseñas' });
      }
      if (!isMatch) return res.status(401).json({ error: 'Credenciales incorrectas' });
      delete usuario['contrasena'];
      res.json(usuario);
    });
  });
});


const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

// Endpoint para registrar usuario
app.post('/api/register', (req, res) => {
  const { nombre, correo, contrasena, rol } = req.body;
  // Verifica si el correo ya existe
  con.query('SELECT * FROM Usuarios WHERE correo = ?', [correo], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error en la base de datos' });
    if (results.length > 0) return res.status(400).json({ error: 'El correo ya está registrado' });

    // Hashea la contraseña antes de guardar
    bcrypt.hash(contrasena, SALT_ROUNDS, (err, hash) => {
      if (err) return res.status(500).json({ error: 'Error al hashear contraseña' });
      const sql = 'INSERT INTO Usuarios (nombre, correo, contrasena, rol, fechaRegistro) VALUES (?, ?, ?, ?, NOW())';
      con.query(sql, [nombre, correo, hash, rol || 'usuario'], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al registrar usuario' });
        res.json({ success: true, userId: result.insertId });
      });
    });
  });
});

/* FOROS ENDPOINTS */


// Endpoint para obtener los foros
app.get('/api/foros', (req, res) => {
  con.query('SELECT * FROM Foros', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener los foros' });
      return;
    }
    res.json(results);
  });
});

// Endpoint para obtener respuestas de un foro con nombre de usuario
app.get('/api/foros/:foroId/respuestas', (req, res) => {
  const foroId = req.params.foroId;
  const sql = `
    SELECT r.*, u.nombre AS usuarioNombre
    FROM RespuestasForo r
    JOIN Usuarios u ON r.userId = u.userId
    WHERE r.foroId = ?
  `;
  con.query(sql, [foroId], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener respuestas' });
    res.json(results);
  });
});

// Endpoint para agregar un foro
app.post('/api/foros', (req, res) => {
  const { userId, titulo, contenido } = req.body;
  const sql = 'INSERT INTO Foros (userId, titulo, fechaCreacion, estado, contenido) VALUES (?, ?, NOW(), ?, ?)';
  con.query(sql, [userId, titulo, 'activo', contenido], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al crear foro' });
    }
    res.json({ success: true, foroId: result.insertId });
  });
});


// Agregar respuesta a un foro
app.post('/api/foros/:foroId/respuestas', (req, res) => {
  const foroId = req.params.foroId;
  const { userId, contenido } = req.body;
  const sql = 'INSERT INTO RespuestasForo (foroId, userId, contenido, fecha) VALUES (?, ?, ?, NOW())';
  con.query(sql, [foroId, userId, contenido], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al guardar respuesta' });
    }
    res.json({ success: true, respuestaId: result.insertId });
  });
});


// Eliminar un foro (solo si el userId coincide)
app.delete('/api/foros/:foroId', (req, res) => {
  const foroId = req.params.foroId;
  const userId = req.query.userId; // <-- así si lo mandas como query param

  // Verifica que el foro sea del usuario
  con.query('SELECT * FROM Foros WHERE foroId = ? AND userId = ?', [foroId, userId], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al buscar foro' });
    if (results.length === 0) return res.status(403).json({ error: 'No tienes permiso para eliminar este foro' });

    // Elimina el foro
    con.query('DELETE FROM Foros WHERE foroId = ?', [foroId], (err) => {
      if (err) return res.status(500).json({ error: 'Error al eliminar foro' });
      res.json({ success: true });
    });
  });
});


// Editar un foro (solo si el userId coincide)
app.put('/api/foros/:foroId', (req, res) => {
  const foroId = req.params.foroId;
  const { userId, titulo, contenido, estado } = req.body;

  // Verifica que el foro sea del usuario
  con.query('SELECT * FROM Foros WHERE foroId = ? AND userId = ?', [foroId, userId], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al buscar foro' });
    if (results.length === 0) return res.status(403).json({ error: 'No tienes permiso para editar este foro' });

    // Actualiza el foro
    con.query(
      'UPDATE Foros SET titulo = ?, contenido = ?, estado = ? WHERE foroId = ?',
      [titulo, contenido, estado || 'activo', foroId],
      (err) => {
        if (err) return res.status(500).json({ error: 'Error al editar foro' });
        res.json({ success: true });
      }
    );
  });
});

/* JUEGOS ENDPOINTS */


// Endpoint para obtener los juegos
app.get('/api/juegos', (req, res) => {
  con.query('SELECT * FROM Juegos', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener los juegos' });
      return;
    }
    res.json(results);
  });
});



/* USUARIOS ENDPOINTS */


// Endpoint para obtener los usuarios
app.get('/api/usuarios', (req, res) => {
  con.query('SELECT * FROM Usuarios', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener los usuarios' });
      return;
    }
    res.json(results);
  });
});




// Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor backend escuchando en http://localhost:3000');
});