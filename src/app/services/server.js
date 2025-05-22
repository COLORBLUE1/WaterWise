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

// Agregar respuesta a un foro
app.post('/api/foros/:foroId/respuestas', (req, res) => {
  const foroId = req.params.foroId;
  const { texto } = req.body;
  con.query('INSERT INTO Respuestas (foro_id, texto) VALUES (?, ?)', [foroId, texto], (err, result) => {
    if (err) return res.status(500).json({ error: 'Error al agregar respuesta' });
    res.json({ success: true });
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