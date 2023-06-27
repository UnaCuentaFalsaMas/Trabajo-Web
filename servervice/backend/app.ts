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
  port: 3306,
  database: 'LaWeb',
});

connection.connect(function (err: any) {
  if (err) {
    console.error('Error conectando a la DB ' + err.stack);
    return;
  }
  console.log('Conexión establecida' + connection.threadId);
});

app.post('/leer', jsonParser, (req: any, res: any) => {
    connection.query('select * from usuarios', function (error: any, results: any, fields: any) {
        if (error) throw error;
        res.send(JSON.stringify({ mensaje: true, resultado: results }));
    });
});

app.post('/registro', jsonParser, (req: any, res: any) => {
  let email = req.body.email; // Obtener el valor del campo 'email' del cuerpo de la solicitud
  let password = req.body.password; // Obtener el valor del campo 'password' del cuerpo de la solicitud
  let nombre = req.body.nombre; // Obtener el valor del campo 'nombre' del cuerpo de la solicitud
  let apellido = req.body.apellido; // Obtener el valor del campo 'apellido' del cuerpo de la solicitud
  let genero = req.body.genero; // Obtener el valor del campo 'genero' del cuerpo de la solicitud
  let edad = req.body.edad; // Obtener el valor del campo 'edad' del cuerpo de la solicitud
  let altura = req.body.altura; // Obtener el valor del campo 'altura' del cuerpo de la solicitud
  let peso = req.body.peso; // Obtener el valor del campo 'peso' del cuerpo de la solicitud
  let llave = req.body.llave; // Obtener el valor del campo 'llave' del cuerpo de la solicitud

  // Realizar una consulta a la base de datos para verificar si existe un usuario con el email y password proporcionados
  connection.query(
    'insert into usuarios (email, contrasenia, llave) values (?, ?, ?)',
    [email, password, llave],
    function (error: any, results: any, fields: any) {
      if (error) throw error;
      else {
        connection.query(
          "INSERT INTO id_usuarios (id_usuario, nombre, apellido, genero, edad, altura, peso) VALUES (SELECT id_usuario FROM usuario WHERE email = '?', ?, ?, ?, ?, ?, ?)",
          [email, nombre, apellido, genero, edad, altura, peso],
          function (error: any, results: any) {
            if (error) throw error;
            res.send(JSON.stringify({ mensaje: true, resultado: results }));
          }
        );
      }
      if (results[0] && results[0].activo == 1) {
        // Si el usuario se encuentra activo, entonces se guardara en la tabla log, la fecha y hora que accedio a la tarea “inicio de sesión”.

        let ip = iprequest.getClientIp(req); // Obtener la dirección IP del cliente
        let fecha = new Date().toISOString().slice(0, 19).replace('T', ' '); // Obtener la fecha y hora actual en formato ISO
        let id_usuario = results[0].id; // Obtener el id del usuario que inicio sesión
        app.post('/log', jsonParser, (req: any, res: any) => {
          connection.query(
            'insert into log (id_usuario, ip, Tarea, fecha) values (?, ?, ?, ?)',
            [id_usuario, ip, 'inicio de sesión', fecha],
            function (error: any, results: any, fields: any) {
              if (error) throw error;
            }
          );
        });
      } else {
        // Hacer algo si el usuario no está activo
      }

      res.send(JSON.stringify({ mensaje: true, resultado: results })); // Enviar una respuesta en formato JSON
    }
  );
});

const configuracion = {
  hostname: '127.0.0.1',
  port: 5001,
};

app.listen(configuracion.port, () => {
  console.log(`Conectando al servidor http://localhost:${configuracion.port}`);
});