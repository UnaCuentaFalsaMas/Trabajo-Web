"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var encriptacion_1 = require("./encriptacion");
var express = require('express');
var mysql = require('mysql');
var iprequest = require('request-ip');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var cripto = require('crypto');
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
    //Prevencion de SQL Injection
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        res.send(JSON.stringify({
            mensaje: false,
            resultado: null,
            error: 'Formato de email incorrecto',
        }));
        return;
    }
    connection.query('SELECT * FROM usuario WHERE email = ?', [email], function (error, results, fields) {
        if (error)
            throw error;
        if (results) {
            res.send(JSON.stringify({ mensaje: true, resultado: results }));
        }
        else {
            console.log('entro');
            res.send(JSON.stringify({ mensaje: false, resultado: null }));
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
    var salt = cripto.randomBytes(16).toString('hex');
    console.log("Salt\n:" + salt + "\n");
    var hashed = (0, encriptacion_1.encriptar)(password, salt);
    var query = 'INSERT INTO usuario (email, contrasenia, llave, nombre, apellido, genero, edad, altura, peso) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    var values = [
        email,
        hashed,
        salt,
        nombre,
        apellido,
        genero,
        edad,
        altura,
        peso,
    ];
    connection.query(query, values, function (error, results, fields) {
        if (error)
            throw error;
        res.send(JSON.stringify({ mensaje: true, resultado: results }));
    });
});
app.post('/acceder', jsonParser, function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    //Prevencion de SQL Injection
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        res.send(JSON.stringify({
            mensaje: false,
            resultado: null,
            error: 'Formato de email incorrecto',
        }));
        return;
    }
    var sql = 'SELECT * FROM usuario WHERE email=?';
    connection.query(sql, [email], function (err, data, fields) {
        if (err)
            throw err;
        if (data.length > 0) {
            console.log('Salr BD: \n' +
                data[0].llave +
                '\nContraseña BD: \n' +
                data[0].contrasenia +
                '\nContraseña formulario: \n' +
                (0, encriptacion_1.encriptar)(password, data[0].llave));
            if (data[0].contrasenia == (0, encriptacion_1.encriptar)(password, data[0].llave)) {
                res.send(JSON.stringify({ mensaje: true, resultado: data }));
            }
            else {
                res.send(JSON.stringify({
                    mensaje: false,
                    resultado: null,
                    error: 'Contraseña o correo son incorrecta',
                }));
            }
        }
    });
});
var configuracion = {
    hostname: '127.0.0.1',
    port: 3000,
};
app.listen(configuracion.port, function () {
    console.log("Conectando al servidor http://localhost:".concat(configuracion.port, "\n"));
});
