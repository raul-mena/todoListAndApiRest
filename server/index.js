const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      cors = require('cors');
// ================= Configuracion de permisos de acceso  =================
app.use(cors());
// set json format
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//load routes and static files
const routes = require('./routes/index');
app.use('/api', routes);
// start server
app.listen(3002,()=>{
    console.log('Servidor iniciado en el puerto 3002') 
});