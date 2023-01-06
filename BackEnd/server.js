const express = require('express') 
const mysql = require('mysql') 
const myconn = require('express-myconnection') 
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors())

app.set('port',9000)
/*
const dbOptions = {
    host:'150.230.185.202',
    port:'3306',
    user:'newuser',
    password:'PQssw0rd',
    database:'base_marcadores'
}*/
const dbOptions = {
    host:'localhost',
    port:'3306',
    user:'nodeuser',
    password:'12345678',
    database:'base_marcadores'
}

//middleware ----- procesos en el intermedio entre una petición y una respuesta
app.use(myconn(mysql,dbOptions,'single'))
app.use(express.json()) //formato de entrega y recepción

// routes -----
app.get('/',(req,res)=>{
    res.send('Welcome to my APP2')
})

// se usa use, porque la petición esta creada en routes
app.use('/api',routes)



app.listen(app.get('port'),()=>{
    console.log(`server running on port ${app.get('port')}`);
})