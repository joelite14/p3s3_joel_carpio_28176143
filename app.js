//INVOCAR EXPRESS
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');




//Motor de Plantilla "EJS"

app.set('view engine', 'ejs');


//Llamar router
app.use('/', require('./router'));

app.use(express.static(path.join(__dirname, 'public')));


    
app.get('/dashboard', (req, res)=>{
    res.render('dashboard')
});
//CREACION DE SERVIDOR!
app.listen(5000, ()=>{
    console.log('Servidor creado exitosamente en http://localhost:5000');
});
