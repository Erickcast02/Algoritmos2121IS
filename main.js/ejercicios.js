var Sed="Agua";
var Correr="Hacer ejercicio";
var jugar="divertirme";
var Programar="Saber programar";

//-ejercicio 1
var dinero = 1;
if(dinero > 10){
    console.log("compra una caja chicle");
}else{
    console.log("comprar un solo chicle")

    }


 //-ejercicio 2
 var comida= "hambre";
if( comida="hambre" ){
    console.log("ir por unos Hotcakes");
}else{
    console.log("Solo tomar un cafe")

    
    }

 //-ejercicio 3

var Comprar= "Dinero";
if(Comprar="Dinero" ){
    console.log("ir por unos tacos");
}else{
    console.log("Solo tomar un cafe")

    }


     //-ejercicio 4

var Jugar= "Perder";
if(Jugar="Perder" ){
    console.log("Me enojo com mi duo");
}else{
    console.log("No me enojo")

    }

     //-ejercicio 5

var Mexico= "Fiesta";
if(Mexico="Fiesta" ){
    console.log("Convivimos en familia");
}else{
    console.log("Me pongo ebrio yo solo")

    }
    //-ejercio 6
switch ("Dinero"){
    case "Quieres comprar algo en la tienda ":
          console.log("Vamos a la tienda")
        break;
    case"Quieres comprarle algo a tu amigo":
          console.log("Comprarle un dulce")
    default:
        console.log("Negarse ha no tener dinero");
        break;
}
   //-ejercicio 7
switch ("hambre"){
    case "Si tienes hambre desayuna ":
          console.log("Hacerme de comer")
        break;
    case"Si tienes hambre ir a la cocina por comida":
          console.log("")
    default:
        console.log("Ir por un cafe y tomar clase");
        break;
}
    //-ejercicio 8
    switch ("Ejercitarse"){
        case "Hace frio":
              console.log("No puedo hacer ejercicio me puedo enfermar")
            break;
        case"Tengo que hacer ejercicio hoy":
              console.log("Tengo que hacer ejercicio hoy")
        default:
            console.log("No tengo energia para hacer ejercicio hoy");
            break;
    }
    //-ejercicio 9
    switch ("Tarea"){
        case "Pedir la tarea":
              console.log("Decirles que me pasen la tarea a mis amigos")
            break;
        case"Hacer la tarea":
              console.log("Tengo sueño para hacer la tarea")
        default:
            console.log("No hacer la tarea con el riesgo de reprobar");
            break;
    }
    //-ejercicio 10
    switch ("Celular"){
        case "Comprarme un celular ":
              console.log("Ir a un centro comercial por un celular ")
            break;
        case"Pedir el celular en linea":
              console.log("Prevenir que el envio llegue seguro")
        default:
            console.log("Seguir con mi celular roto");
            break;
    }
    //-ejercicio 11
    if(dinero=="Tener dinero"){
      console.log("Hoy hay dinero");
    } else {
      switch(dinero) {
        case"No hay comida":
           console.log("Tengo que ir a comprar");
            break;
        case"Tengo que ir hasta el centro comercial":
           console.log("Me da flojera ir tan lejos");
            break;
        default:
            console.log("No comer por tener flojera")
        }

    }
    //-ejercicio 12
    if(Sed=="Agua"){
       console.log("Tengo Sed");
      } else {
        switch(Agua) {
          case"Necesito tomar agua":
             console.log("ir por un vaso y servirme");
              break;
          case"Necesito tomar agua pero estoy en clase":
             console.log("Puedo perder me de algo importmante");
              break;
          default:
              console.log("Esperar a que acabe la clase ")
          }
  
      }
    //-ejercicio 13
    if(Correr=="Hacer ejercicio"){
        console.log("tener energia");
      } else {
        switch(correr) {
          case"Tener energia para salir a correr":
             console.log("Ayudo a mi salud corriendo");
              break;
          case"Tengo energia para correr pero esta lloviendo":
             console.log("Quedarme en casa");
              break;
          default:
              console.log("Salir a correr rapido")
          }
  
      }
    //-ejercicio 14
    if(jugar=="divertirme"){
        console.log("Me divierto jugando");
      } else {
        switch(jugar) {
          case"Me voy a jugar a mi cuarto para divertirme ":
             console.log("Tengo tarea que hacer");
              break;
          case"No voy a mi cuarto para hacer tarea":
             console.log("La entrego a tiempo y despues puedo jugar");
              break;
          default:
              console.log("No hacer nada y frustrarme ")
          }
  
      }
    //-ejercicio 15
    if(Programar=="Saber programar"){
        console.log("Enteder la programacion");
      } else {
        switch(Programar) {
          case"Tener ganas de programar ":
             console.log("Meterme a una clase del profesor emmanuel");
              break;
          case"No tengo ganas de programar":
             console.log("Me pierdo de una vida exitosa");
              break;
          default:
              console.log("Ir a clase diario para ser un buen programador")
          }
  
      }