import { encriptar } from "./encriptacion";
import express from "express";
import mysql from "mysql";
import requestIp from "request-ip";

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "LaWeb",
});

connection.connect(function (err) {
  if (err) {
    console.error("Error conectando a la DB " + err.stack);
    return;
  }
  console.log("Conexión establecida" + connection.threadId);
});

app.post("/registro", jsonParser, (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let nombre = req.body.nombre;
  let apellido = req.body.apellido;
  let genero = req.body.genero;
  let edad = req.body.edad;
  let altura = req.body.altura;
  let peso = req.body.peso;
  let llave = req.body.llave;

  connection.query(
    "INSERT INTO usario (email, contrasenia, llave) VALUES (?, ?, ?)",
    [email, password, llave],
    function (error, results) {
      if (error) throw error;

      else {
        connection.query(
          "INSERT INTO DatosUsuario (select * from usuario where email = ?), nombre, apellido, genero, edad, altura, peso",
          [email],
          function (error, results) {
            if (error) throw error;
            if (results[0]) {
              res.send(
                JSON.stringify({
                  mensaje: false,
                  resultado: "El email ya existe",
                })
              );
            } else {
              connection.query(
                "INSERT INTO usuarios (email, contrasenia, nombre, apellido, genero, edad, altura, peso, llave) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                [
                  email,
                  password,
                  nombre,
                  apellido,
                  genero,
                  edad,
                  altura,
                  peso,
                  llave,
                ],
                function (error, results) {
                  if (error) throw error;
                  res.send(
                    JSON.stringify({ mensaje: true, resultado: results })
                  );
                }
              );
            }
          }
        );
      }

      if (results[0] && results[0].activo == 1) {
        let ip = requestIp.getClientIp(req);
        let fecha = new Date().toISOString().slice(0, 19).replace("T", " ");
        let id_usuario = results[0].id;

        app.post("/log", jsonParser, (req, res) => {
          connection.query(
            "INSERT INTO log (id_usuario, ip, Tarea, fecha) VALUES (?, ?, ?, ?)",
            [id_usuario, ip, "inicio de sesión", fecha],
            function (error, results) {
              if (error) throw error;
            }
          );
        });
      } else {
        // Hacer algo si el usuario no está activo
      }

      res.send(JSON.stringify({ mensaje: true, resultado: results }));
    }
  );
});

const configuracion = {
  hostname: "127.0.0.1",
  port: 5001,
};

app.listen(configuracion.port, () => {
  console.log(
    `Conectando al servidor http://localhost:${configuracion.port}`
  );
});
