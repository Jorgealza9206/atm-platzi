var cafecito = require("express");
var aplicacion = cafecito();

aplicacion.get("/", inicio);

function inicio(peticion, resultado)
{
  resultado.send("Este es el <strong>home<strong/> genial!!!")
}

aplicacion.listen(8990);
