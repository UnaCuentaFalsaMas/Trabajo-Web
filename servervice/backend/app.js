"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var mysql = require('mysql');
var iprequest = require('request-ip');
var app = express();
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
    var email = req.body.email;
    // Validate email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        res.send(JSON.stringify({ "mensaje": false, "resultado": null, "error": "Formato de email incorrecto" }));
        return;
    }
    connection.query('SELECT * FROM usuario WHERE email = ?', [email], function (error, results, fields) {
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
    var email = req.body.email;
    var password = req.body.password;
    var nombre = req.body.nombre;
    var apellido = req.body.apellido;
    var genero = req.body.genero;
    var edad = req.body.edad;
    var altura = req.body.altura;
    var peso = req.body.peso;
    var llave = '1';
    var query = 'INSERT INTO usuario (email, contrasenia, llave, nombre, apellido, genero, edad, altura, peso) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    var values = [email, password, llave, nombre, apellido, genero, edad, altura, peso];
    connection.query(query, values, function (error, results, fields) {
        if (error)
            throw error;
        res.send(JSON.stringify({ mensaje: true, resultado: results }));
    });
});
var configuracion = {
    hostname: '127.0.0.1',
    port: 3000,
};
app.listen(configuracion.port, function () {
    console.log("Conectando al servidor http://localhost:".concat(configuracion.port, "\n"));
});
