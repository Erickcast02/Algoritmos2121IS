var x = 1;
var suma = 0;

for (x = 1; x <100; x++) {
  if (x % 3 == 0) {
    console.log(x);
  } else{
      suma = suma + x
  }
}
console.log("La suma es: "+ suma);