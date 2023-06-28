import { encriptar } from './encriptacion';
const express = require('express');
const mysql = require('mysql');
const iprequest = require('request-ip');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3307,
  database: 'proyecto',
});

connection.connect(function (err: any) {
  if (err) {
    console.error('Error conectando a la DB ' + err.stack);
    return;
  }
  console.log('Conexión establecida' + connection.threadId);
});

app.get('/leer', jsonParser, (req: any, res: any) => {
  const email = req.body.email;
  
  //Prevencion de SQL Injection
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    res.send(JSON.stringify({ "mensaje": false, "resultado": null, "error": "Formato de email incorrecto" }));
    return;
  }

  connection.query(
    'SELECT * FROM usuario WHERE email = ?',
    [email],
    function (error: any, results: any, fields: any) {
      if (error) throw error;

      if (results) {
        res.send(JSON.stringify({ "mensaje": true, "resultado": results }));
      } else {
        console.log("entro");
        res.send(JSON.stringify({ "mensaje": false, "resultado": null }));
      }
    }
  );
});

app.put('/registro', jsonParser, (req: any, res: any) => {
  let email = req.body.email;
  let password = req.body.password;
  let nombre = req.body.nombre;
  let apellido = req.body.apellido;
  let genero = req.body.genero;
  let edad = req.body.edad;
  let altura = req.body.altura;
  let peso = req.body.peso;
  let llave = '1';

  const query = 'INSERT INTO usuario (email, contrasenia, llave, nombre, apellido, genero, edad, altura, peso) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [email, password, llave, nombre, apellido, genero, edad, altura, peso];

  connection.query(query, values, function (error: any, results: any, fields: any) {
    if (error) throw error;

    res.send(JSON.stringify({ mensaje: true, resultado: results }));
  });
});

const configuracion = {
  hostname: '127.0.0.1',
  port: 3000,
};

app.listen(configuracion.port, () => {
  console.log(`Conectando al servidor http://localhost:${configuracion.port}\n`);
});

declare module './app.js' {
  export function get(email: string): boolean;
}
