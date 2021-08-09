const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
require('./config/db');
require('dotenv').config();


// crear el servidor 
const app = express();

// leer objetos json
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// rutas de la app
app.use('/', routes());

// puerto
app.listen(process.env.PORT || 5000);