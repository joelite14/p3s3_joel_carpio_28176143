const express = require('express');
const router = express.Router();

//llamar la conexion
const conexion = require('./database/db');
const { error } = require('console');

router.get('/', (req,res)=>{
    res.render('index');
});

router.get('/dashboard', (req, res) =>{
    res.render('dashboard')
});

router.get('/', (req,res)=>{
    conexion.query('SELECT * FROM productos', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
});



//Exportar
module.exports = router;