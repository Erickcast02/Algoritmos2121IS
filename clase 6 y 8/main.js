for (var i = .5; i < 9; i++) {
    console.log(i);
  
}

for (var x = 100; x < 200; x++) {
    console.log(x);
  
}

for (var y = 5; y <=20; y+=3) {
    console.log(y);
  
}

var num = parseInt(prompt("Ingresa un numero"))
   if (num >= 0) {
       console.log("Tu numero ingresado es: " +num);
       for (i = num; i <=num; i++) {
           console.log(i * 2 -1);
       }
   }else{
   console.log("Ingresa un numero positivo mayor a 0");
}

var total = 0;
var resultado;
var num = parseInt(prompt("Ingresa la cantidad de numeros que quieres repetir"));
   console.log("Quieres hacaer " +num+ " veces la suma");
       for (var i = 1; i <= num; i++) {
           var num2 = parseInt(prompt("Ingresa el numero a sumar"));
           resultado = total += num2;
           console.log("Ingresaste "+num2+ " para hacer la suma");
           console.log(resultado);
}

for (var num1 = 0; num1 <= 100; num1++) {
    for (var num2 = 0; num2 <=100; num2++) {
        console.log(num1 + "+" + num2 + "=");
      console.log(num1 + num2);
    }
}