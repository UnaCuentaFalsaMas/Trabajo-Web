"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var mysql = require('mysql');
var iprequest = require('request-ip');
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
    port: 3307,
    database: 'proyecto',
});
connection.connect(function (err) {
    if (err) {
        console.error('Error conectando a la DB ' + err.stack);
        return;
    }
    console.log('Conexión establecida' + connection.threadId);
});
app.get('/leer', jsonParser, function (req, res) {
    var email = req.query.email; // Obtener el valor del parámetro 'email' de la solicitud GET
    connection.query('SELECT * FROM usuario WHERE email = ?', [email], function (error, results, fields) {
        //console.log(results[0].contrasenia);
        if (error)
            throw error;
        if (results) {
            res.send(JSON.stringify({ "mensaje": true, "resultado": results }));
        }
        else {
            console.log("entro");
            res.send(JSON.stringify({ "mensaje": false, "resultado": null }));
        }
    });
});
app.put('/registro', jsonParser, function (req, res) {
    var email = req.body.email; // Obtener el valor del campo 'email' del cuerpo de la solicitud
    var password = req.body.password; // Obtener el valor del campo 'password' del cuerpo de la solicitud
    var nombre = req.body.nombre; // Obtener el valor del campo 'nombre' del cuerpo de la solicitud
    var apellido = req.body.apellido; // Obtener el valor del campo 'apellido' del cuerpo de la solicitud
    var genero = req.body.genero; // Obtener el valor del campo 'genero' del cuerpo de la solicitud
    var edad = req.body.edad; // Obtener el valor del campo 'edad' del cuerpo de la solicitud
    var altura = req.body.altura; // Obtener el valor del campo 'altura' del cuerpo de la solicitud
    var peso = req.body.peso; // Obtener el valor del campo 'peso' del cuerpo de la solicitud
    var llave = '1'; // Obtener el valor del campo 'llave' del cuerpo de la solicitud
    // Realizar una consulta a la base de datos para verificar si existe un usuario con el email y password proporcionados
    connection.query('INSERT INTO usuario (email, contrasenia, llave, nombre, apellido, genero, edad, altura, peso) values (?, ?, ?, ?, ?, ?, ?, ?, ?)', [email, password, llave, nombre, apellido, genero, edad, altura, peso], function (error, results, fields) {
        if (error)
            throw error;
        res.send(JSON.stringify({ mensaje: true, resultado: results })); // Enviar una respuesta en formato JSON
    });
});
var configuracion = {
    hostname: '127.0.0.1',
    port: 3000,
};
app.listen(configuracion.port, function () {
    console.log("Conectando al servidor http://localhost:".concat(configuracion.port));
});
