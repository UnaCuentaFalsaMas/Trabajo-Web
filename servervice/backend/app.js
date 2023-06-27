"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mysql = require("mysql");
var iprequest = require("request-ip");
var app = express();
//cors
var cors = require('cors');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
app.use(cors());
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'LaWeb'
});
connection.connect(function (err) {
    if (err) {
        console.error('Error conectando a la DB ' + err.stack);
        return;
    }
    console.log('Conexión establecida' + connection.threadId);
});
app.post("/", jsonParser, function (req, res) {
    var email = req.body.email; // Obtener el valor del campo 'email' del cuerpo de la solicitud
    var password = req.body.password; // Obtener el valor del campo 'password' del cuerpo de la solicitud
    // Realizar una consulta a la base de datos para verificar si existe un usuario con el email y password proporcionados
    connection.query("select * from usuarios where email=? and password=?", [email, password], function (error, results, fields) {
        if (error)
            throw error;
        if (results[0] && results[0].activo == 1) {
            // Si el usuario se encuentra activo, entonces se guardara en la tabla log, la fecha y hora que accedio a la tarea “inicio de sesión”.
            var ip_1 = iprequest.getClientIp(req); // Obtener la dirección IP del cliente
            var fecha_1 = new Date().toISOString().slice(0, 19).replace('T', ' '); // Obtener la fecha y hora actual en formato ISO
            var id_usuario_1 = results[0].id; // Obtener el id del usuario que inicio sesión
            app.post("/log", jsonParser, function (req, res) {
                connection.query("insert into log (id_usuario, ip, Tarea, fecha) values (?, ?, ?, ?)", [id_usuario_1, ip_1, 'inicio de sesión', fecha_1], function (error, results, fields) {
                    if (error)
                        throw error;
                });
            });
        }
        else {
            // Hacer algo si el usuario no está activo
        }
        res.send(JSON.stringify({ "mensaje": true, "resultado": results })); // Enviar una respuesta en formato JSON
    });
});
var configuracion = {
    hostname: "127.0.0.1",
    port: 5001,
};
app.listen(configuracion.port, function () {
    console.log("Conectando al servidor http://localhost:".concat(configuracion.port));
});
