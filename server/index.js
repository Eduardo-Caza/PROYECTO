const express = require("express");
const app = express();
const mysql = require("mysql");
const cors=require("cors");

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"USUARIOS"
});

app.post("/create",(req,res)=>{
    const nombre=req.body.nombre
    const edad=req.body.edad
    const correo=req.body.correo
    const clave=req.body.clave
    const telefono=req.body.telefono

    db.query('INSERT INTO empleados(nombre, edad, correo, clave, telefono) VALUES(?,?,?,?,?)',[nombre,edad,correo,clave,telefono],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
});

app.post("/createevento",(req,res)=>{
    const titulo=req.body.titulo
    const valor=req.body.valor
    const descripcion=req.body.descripcion
    const anfitrion=req.body.anfitrion
    const capacidad=req.body.capacidad

    db.query('INSERT INTO eventos(titulo, valor, descripcion, anfitrion, capacidad) VALUES(?,?,?,?,?)',[titulo,valor,descripcion,anfitrion,capacidad],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
});

app.get("/empleados",(req,res)=>{
    db.query('SELECT * FROM empleados',
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
});

app.get("/evento",(req,res)=>{
    db.query('SELECT * FROM eventos',
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
});


app.put("/update",(req,res)=>{
    const idempleados=req.body.idempleados
    const nombre=req.body.nombre
    const edad=req.body.edad
    const correo=req.body.correo
    const clave=req.body.clave
    const telefono=req.body.telefono

    db.query('UPDATE empleados SET nombre=?, edad=?, correo=?, clave=?, telefono=? WHERE idempleados=?',[nombre,edad,correo,clave,telefono,idempleados],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
});

app.put("/updateevento",(req,res)=>{
    const idevento=req.body.idevento
    const titulo=req.body.titulo
    const valor=req.body.valor
    const descripcion=req.body.descripcion
    const anfitrion=req.body.anfitrion
    const capacidad=req.body.capacidad

    db.query('UPDATE eventos SET titulo=?, valor=?, descripcion=?, anfitrion=?, capacidad=? WHERE idevento=?',[titulo,valor,descripcion,anfitrion,capacidad,idevento],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
});

app.delete("/delete/:idempleados",(req,res)=>{
    const idempleados=req.params.idempleados;

    db.query('DELETE FROM empleados WHERE idempleados=?',[idempleados],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
});

app.delete("/deleteevento/:idevento",(req,res)=>{
    const idevento=req.params.idevento;

    db.query('DELETE FROM eventos WHERE idevento=?',[idevento],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
});

app.post("/login", (req, res) => {
    const { email, contra } = req.body;
  
    db.query(
      'SELECT * FROM empleados WHERE correo = ? AND clave = ?', 
      [email, contra],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send('Error de servidor');
          return;
        }
  
        if (result.length > 0) {
          // Credenciales correctas
          res.send('success');
        } else {
          // Credenciales incorrectas
          res.send('failure');
        }
      }
    );
  });  

app.get("/eventos", (req, res) => {
    db.query('SELECT * FROM eventos', (err, result) => {
        if(err) {
            console.log(err);
            res.status(500).send('Error de servidor');
            return;
        }
        res.json(result);
    });
});

app.listen(3001,()=>{
    console.log("Corriendo en el puerto 3001")
})