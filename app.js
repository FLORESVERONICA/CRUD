const express = require('express');
const app = express();
let usuarios = [
    { id: 1, nombre: 'Ryu', edad: 32, lugarProcedencia: 'Japón' },
    { id: 2, nombre: 'Chun-Li', edad: 29, lugarProcedencia: 'China' },
    { id: 3, nombre: 'Guile', edad: 35, lugarProcedencia: 'Estados Unidos' },
    { id: 4, nombre: 'Dhalsim', edad: 45, lugarProcedencia: 'India' },
    { id: 5, nombre: 'Blanka', edad: 32, lugarProcedencia: 'Brasil' },
];

 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get ('/',(req,res) => {
    res.send(`
        <DOCTYPE html>
        <html lang="es">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        </hea>
        <body>
        <h1> Luchadores Street Fighter II</h1>
        <ul>
        ${usuarios.map(usuario => `<li>
        <h2>Nombre: ${usuario.nombre}</li></h2>
        <p>Edad: ${usuario.edad}</p>
        <p>procedencia: ${usuario.lugarProcedencia}</p>
        `).join("")}
        </ul>
        </body>
        </html>
        `)
   });
   app.get("/usuarios", (req, res) => {
    res.json(usuarios)
   })

   app.get("usuarios/:nombre", (req, res) => {
    const nombre = req.params.nombre
    const usuario = usuario.find(usuario => usuario.nombre === nombre)

    if(!usuario) {
         res.status(404).json({mensaje: "el usuario no existe"})
        }else {
            res.json(usuario)
        }
   })

   app.post("/usuarios", (req, res) => {
    const nuevoUsuario = {
        id:usuarios.length +1,
        nombre: req.body.nombre,
        edad: req.body.edad,
        lugarProcedencia: req.body.lugarProcedencia
    }
    usuarios.push(nuevoUsuario)
    res.redirect("/")
   })
 
   app.put("/usuario/:nombre", (req, res) => {
     const nombre = req.params.nombre
     const nombreNuevo = req.body.nombre|| ""
     const edadNueva = req.body.edad || ""
     const ProcedenciaNueva = req.body.LugarProcededencia

     const index = usuarios.findIndex(usuario => usuario.nombre === nombre)

     if(index === -1) {
        res.status(404).json({error: "usuario no encontrado"})
     } else {
        usuarios(index) = {
            ...usuarios[index], 
            nombre: nombreNuevo || usuarios[index].nombre,
            edad: edadNuevo || usuarios[index].edad,
            lugarProcedencia: ProcedenciaNueva || usuarios[index].lugarProcedencia,

            }
            res.json(usuarios[index])
        }
     })

const PORT = 3000
app.listen(3000, () => {
    console.log('node está escuchando en el puerto 3000 ')
});
