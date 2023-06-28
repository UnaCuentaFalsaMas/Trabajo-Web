import { encriptar } from './encriptacion';

const express = require('express');
const mysql = require('mysql');
const iprequest = require('request-ip');
const app = express();

//cors
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
  const email = req.query.email; // Obtener el valor del parámetro 'email' de la solicitud GET
  
  connection.query(
    'SELECT * FROM usuario WHERE email = ?',
    [email],
    function (error: any, results: any, fields: any) {
      //console.log(results[0].contrasenia);
      if (error) throw error;

      if(results){
        
        res.send(JSON.stringify({"mensaje":true,"resultado":results}));
      } else {
        console.log("entro");
        res.send(JSON.stringify({"mensaje":false,"resultado":null})); 
      }
      
    }
  );
});

app.put('/registro', jsonParser, (req: any, res: any) => {
  let email = req.body.email; // Obtener el valor del campo 'email' del cuerpo de la solicitud
  let password = req.body.password; // Obtener el valor del campo 'password' del cuerpo de la solicitud
  let nombre = req.body.nombre; // Obtener el valor del campo 'nombre' del cuerpo de la solicitud
  let apellido = req.body.apellido; // Obtener el valor del campo 'apellido' del cuerpo de la solicitud
  let genero = req.body.genero; // Obtener el valor del campo 'genero' del cuerpo de la solicitud
  let edad = req.body.edad; // Obtener el valor del campo 'edad' del cuerpo de la solicitud
  let altura = req.body.altura; // Obtener el valor del campo 'altura' del cuerpo de la solicitud
  let peso = req.body.peso; // Obtener el valor del campo 'peso' del cuerpo de la solicitud
  let llave = '1'; // Obtener el valor del campo 'llave' del cuerpo de la solicitud

  // Realizar una consulta a la base de datos para verificar si existe un usuario con el email y password proporcionados
  connection.query(
    'INSERT INTO usuario (email, contrasenia, llave, nombre, apellido, genero, edad, altura, peso) values (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [email, password, llave, nombre, apellido, genero, edad, altura, peso],
    function (error: any, results: any, fields: any) {
      if (error) throw error;

      res.send(JSON.stringify({ mensaje: true, resultado: results })); // Enviar una respuesta en formato JSON
    }
  );
});

const configuracion = {
  hostname: '127.0.0.1',
  port: 3000,
};

app.listen(configuracion.port, () => {
  console.log(`Conectando al servidor http://localhost:${configuracion.port}`);
});

declare module './app.js' {
  export function get(email: string): boolean;
}