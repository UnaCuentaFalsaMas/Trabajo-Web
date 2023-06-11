const registros = require('./registros.json');

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');


const app = express();
app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json());

const registrosFilePath = path.join(__dirname, 'registros.json');

// Endpoint para guardar un registro
app.post('/api/registros', (req, res) => {
  const nuevoRegistro = req.body;
  registros.push(nuevoRegistro);

  // Guardar los datos en el archivo
  fs.writeFile(registrosFilePath, JSON.stringify(registros), (err) => {
    if (err) {
      console.error('Error al guardar los datos:', err);
      res.status(500).json({ message: 'Error al guardar los datos' });
    } else {
      res.status(201).json({ message: 'Registro guardado exitosamente' });
    }
  });
});

app.get('/api/registros', (req, res) => {
  res.json(registros);
});

// Configuración de otros endpoints y rutas

app.listen(3000, () => {
  console.log('El servidor está escuchando en el puerto 3000');
});


