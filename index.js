//Index aplication
const express=require('express');
const methodOverride = require('method-override');

//Require routes
const adminRoutes = require('./routes/adminRoutes');
const tlRoutes = require('./routes/tlRoutes');
const employerRoutes = require('./routes/employerRoutes');

//Variables de configuración
require('dotenv').config({ quiet: true });
const PORT=process.env.PORT || 8080;

//Inicion servidor
const app=express();

const cors=require('cors');//requerimos cors permitir que una página web cargada en un dominio pueda acceder a recursos de otro dominio, cuando la política de "mismo origen" del navegador web por defecto no lo permitiría.

//Require dbConection
const { dbConnection } = require('./config/config.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.use(methodOverride('X-HTTP-Method-Override'));
app.use('/admin', adminRoutes);
app.use('/tl', tlRoutes);
app.use('/employer', employerRoutes);


dbConnection();

app.listen(PORT,()=> console.log(`Active server in http://localhost:${PORT}`));