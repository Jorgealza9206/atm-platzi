
var base_datos = []; //Array que guarda la base de datos del banco
var dato; // Captura el nombre del cliente
var dato2; // Captura el banco del destino
var banco_t; //Captura el banco de transferencia
var banco_o; //Captura el banco de origen
var cuenta_o; //Captura la cuenta de origen
var numero_cuenta; //Captura el numero de cuenta de destino
var verificado = document.getElementById("verificado"); //String que notifica si el cliente existe
var destino = document.getElementById("destino"); // Menú del banco de transferencia
var intro = document.getElementById("intro");// Menú de inicio
var cuenta = document.getElementById("cuenta");//Datos del cliente al inicio
var verificado2 = document.getElementById("verificado2"); // String que verifica banco y cuenta de destino
var cuenta_destino = document.getElementById("cuenta_destino"); // Muestra info de la cuenta
var monto = document.getElementById("monto");// String que pide el monto
var confirmacion = document.getElementById("confirmacion");// Notifica que la transacción se realizó
var id_o; //Identifica el H de indexacion de la base de datos de la cuenta origen;
var id_d; //Identifica el H de indexacion de la base de datos de la cuenta destino;
var costo_t = document.getElementById("costo"); // String que pregunta el costo de transacción
var monto_v; //Obtiene el monto que se desea transferir
var costo = 0; //Costo de la transacción
var hora; //Obtiene la hora
var elements = document.querySelectorAll("p[id]");; //Captura los los elementos que sean parrafos en HTML
var n = true;
var bancos = []; //Adjunta todos los bancos del catalogo
var time;
var i = 0;

class Cliente
{
  constructor(nombre, banco, cuenta, saldo)
  {
    this.nombre = nombre;
    this.banco = banco;
    this.cuenta = cuenta;
    this.saldo = saldo;
  }
}

var Camilo_Contreras = new Cliente("Camilo Contreras","Bancolombia","01004",200000);
var Carolina_Cordoba = new Cliente("Carolina Cordoba","Banco Caja Social","01025",3200000);
var Andrés_Ortiz = new Cliente("Andrés Ortiz","Banco Pichincha","040032",500000);
var Daniel_Morales = new Cliente("Daniel Morales","Colpatria","010039",450000);
var Cristian_Piza = new Cliente("Cristian Piza","Bancolombia","01008",800000);
var Jonathan_Castillo = new Cliente("Jonathan Castillo","Davivienda","2336",2000000);
var Jorge_Alza = new Cliente("Jorge Alza","Davivienda","2315",5000000);
var Julian_Murcia = new Cliente("Julian Murcia","Banco J.P.Morgan","00001",150000);
var Luis_Velandia = new Cliente("Luis Velandia","GNB Sudameris","000537",2500000);
var Michael_Nino = new Cliente("Michael Niño","Banco de Bogotá","013648",300000);
var Michael_Zea = new Cliente("Michael Zea","Scotia Bank","14767",500000);
var Paola_Galindo = new Cliente("Paola Galindo","Bancolombia","01389",2100000);
var Yeimi_Acero = new Cliente("Yeimi Acero","Banco Caja Social","01043",1500000);
var Sergio_Buitrago = new Cliente("Sergio Buitrago","GNB Sudameris","000048",1000000);

base_datos = [Camilo_Contreras,Carolina_Cordoba,Andrés_Ortiz,Daniel_Morales,Cristian_Piza,
Jonathan_Castillo,Jorge_Alza,Julian_Murcia,Luis_Velandia,Michael_Nino,Michael_Zea,
Paola_Galindo,Yeimi_Acero,Sergio_Buitrago];

Inicio();

document.addEventListener("keydown",function(evento){if(evento.key == "Escape"){Limpiar()}});
//La tecla Escape limpia la pantalla y anula la operación

document.addEventListener("keydown",function(ddd){;if(ddd.key == "Enter"){console.log(i);}});
document.addEventListener("keydown",Enter);

document.addEventListener("keydown",Retardo);
document.addEventListener("click",Retardo);

function Retardo()// Es la función que detecta inactividad
{
  clearTimeout(time);
  time = setTimeout(Limpiar, 20000);
}

function Enter(ddd)
{
  if(ddd.key == "Enter")
  {
    switch(i)
    {
      case 1: Siguiente();break;
      case 2: Siguiente_2();break;
      case 3: Siguiente_3();break;
      case 4: Transferencia();break;
      case 5: Si();break;
      case 6: Transferencia_2();break;
    }
  }
}

function Inicio()
{
  i = 0;
  hora = new Date().getHours();
  intro.innerHTML = "Digite su nombre</br></br>"
  + "<input type=\"text\" id=\"datos\" />"
  + "<input type=\"button\" value=\"Confirmar\" id = \"Confirmar\"/>";
  var b = document.getElementById("Confirmar");//Toma la accion de confirmar el cliente
  b.addEventListener("click",Siguiente);
  i++;
  document.addEventListener("keydown",Enter);
  if((hora >= 0 && hora <= 11)||(hora >= 15 && hora <= 19))
  {

  }
  else {
    intro.innerHTML = "Horario de atención: 09:00 - 12:00 y 15:00 - 20:00";
  }

}

function Siguiente()
{
  var k = document.getElementById("datos");
  dato = k.value;
  for (var q of base_datos)
  {
    if (dato == q.nombre)
    {
      banco_o = q.banco; //Obtiene el banco origen
      cuenta_o = q.cuenta; //Obtiene la cuenta origen
      verificado.style.color = "blue";
      verificado.innerHTML = "Verificado";
      cuenta.innerHTML = "Nombre: " + q.nombre
      +"</br>Banco: " + q.banco +"</br>Cuenta: " + q.cuenta +"</br>Saldo: $" + q.saldo;
      destino.innerHTML = "Digite la cuenta de destino</br></br>Banco Destino "
      +"<input type=\"text\" id=\"datos2\" />"
      +"<input type=\"button\" value=\"Confirmar\" id = \"Confirmar2\"/>";
      var c = document.getElementById("Confirmar2");// Toma la acción de confirmar el banco de transferencia
      c.addEventListener("click",Siguiente_2);
      i++;
      document.addEventListener("keydown",Enter);
      id_o = q;
      n = false;
      break;
    }
    else {
      verificado.innerHTML = "Usuario no existe";
      verificado.style.color = "red";
    }
  }
  if(n == true)
  {
    setTimeout(Limpiar,10000);
  }
}

function Siguiente_2()
{
  n = true;
  var l = document.getElementById("datos2");
  banco_t = l.value; // Se obtiene el valor del banco de destino
  for (var q of base_datos)
  {
    if(banco_t == q.banco)
    {
      destino_2.innerHTML = "Numero de cuenta "
      +"<input type=\"text\" id=\"datos3\" />"
      +"<input type=\"button\" value=\"Confirmar\" id = \"Confirmar3\"/>";
      var d = document.getElementById("Confirmar3");// Toma la acción de confirmar el # de cuenta
      d.addEventListener("click",Siguiente_3);
      i++;
      document.addEventListener("keydown",Enter);
      n = false;
      break;
    }
    else {
      destino_2.innerHTML = "Banco no encontrado";
    }
  }
  if(n == true)
  {
    destino_2.style.color = "red";
    setTimeout(Limpiar,10000);
  }
}

function Siguiente_3()
{
  var m = document.getElementById("datos3");
  numero_cuenta = m.value; // Se obtiene el numero de cuenta
  if (banco_o == banco_t && numero_cuenta == cuenta_o)//Verifica si es la misma cuenta
  {
    verificado2.innerHTML = "La cuenta de destino es la misma de origen";
    verificado2.style.color = "red";
    setTimeout(Limpiar,10000);
  }
  else {
    n = true;
    for (var q of base_datos)
    {
      if ((banco_t == q.banco) && (numero_cuenta == q.cuenta)) //Busca la cuenta
      {
        verificado2.style.color = "blue";
        verificado2.innerHTML = "Verificado";
        cuenta_destino.innerHTML = "Nombre: " + q.nombre
        +"</br>Banco: " + q.banco +"</br>Cuenta: " + q.cuenta;
        monto.innerHTML = "Ingrese el monto</br>"
        +"<input type=\"number\" id=\"datos4\" />"
        +"<input type=\"button\" value=\"Confirmar\" id = \"Confirmar4\"/>";
        document.getElementById("Confirmar4").addEventListener("click",Transferencia);// Toma la acción de confirmar el # de cuenta
        i++;
        document.addEventListener("keydown",Enter);
        id_d = q;
        n = false;
        break;
      }
      else {
        verificado2.innerHTML = "Cuenta no existe";
      }
    }
    if(n == true)
    {
      verificado2.style.color = "red";
      setTimeout(Limpiar,10000);
    }
  }
}

function Transferencia()
{
  var m = document.getElementById("datos4");
  monto_v = parseInt(m.value);
  var n_saldo = document.getElementById("n_saldo");
  if (id_d.banco != id_o.banco){
    costo = 10000;
  }
  if (monto_v + costo > id_d.saldo)
  {
    confirmacion.style.color = "red";
    confirmacion.innerHTML = "Saldo insuficiente";
    setTimeout(Limpiar,10000);
  }
  else if(monto_v % 1000 == 0)
    {
      costo_t.innerHTML = "Desea ver el costo de la transacción?</br>"
      + "<input type = \"button\" value = \"Sí\" id = \"si\" />"
      + "<input type = \"button\" value = \"No\"id = \"no\" />";
      document.getElementById("si").addEventListener("click",Si);
      document.getElementById("no").addEventListener("click",Transferencia_2);
      i++;
      document.addEventListener("keydown",Enter);
    }
    else {
      confirmacion.style.color = "red";
      confirmacion.innerHTML = "Monto debe ser múltiplos de 1000";
      datos4.value = "";
    }
}

function Limpiar()
{
  for (var q of elements){
    q.innerHTML = "";
    q.style.color = "";
  }
  Inicio();
}

function Si()
{
  costo_t.innerHTML = "Costo: $" + costo
  + "</br><input type = \"button\" value = \"Continuar\" id = \"continuar\" />"
  + "<input type = \"button\" value = \"Anular\" id = \"anular\" />";
  document.getElementById("continuar").addEventListener("click",Transferencia_2);
  document.getElementById("anular").addEventListener("click",Anular);
  i++;
  document.addEventListener("keydown",Enter);
}
// function No()
// {
//   costo_t.innerHTML = "</br><input type = \"button\" value = \"Continuar\" id = \"continuar\" />";
//   document.getElementById("continuar").addEventListener("click",Transferencia_2);
// }

function Transferencia_2()
{
  id_d.saldo = id_d.saldo + monto_v;
  id_o.saldo = id_o.saldo - monto_v - costo;
  confirmacion.style.color = "green";
  confirmacion.innerHTML = "Transferencia realizada";
  n_saldo.innerHTML = "Nuevo saldo: " + id_o.saldo;
  setTimeout(Limpiar,10000);
}

function Anular()
{
  confirmacion.style.color = "red";
  confirmacion.innerHTML = "Transferencia anulada";
  setTimeout(Limpiar,10000);
}
