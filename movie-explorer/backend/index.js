// index.js
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Middleware de autenticación
const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "Acceso denegado. No se encontró token." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secreto");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: "Token inválido o expirado." });
  }
};

// Ruta pública
app.get('/test', (req, res) => {
  res.json({ message: '¡Backend funcionando!' });
});

// Ruta de login (simulada)
app.post('/login', (req, res) => {
  const { username } = req.body;
  const token = jwt.sign({ name: username }, process.env.JWT_SECRET || "secreto", { expiresIn: "1h" });
  res.json({ token });
});

// Ruta protegida
app.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: `Bienvenido al perfil, ${req.user.name}` });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
