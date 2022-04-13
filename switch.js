
function resultado() {
  const cantidad = document.getElementById("boxText").value;
  const stock = 100;
  
    switch (cantidad !== "" || isNaN(cantidad)=== false)
    {      
      case parseInt(cantidad) > parseInt(stock):
       console.log("La cantidad es mayor al stock");
      break;

      case parseInt(cantidad) < parseInt(stock):
       console.log("La cantidad es menor al stock");
      break;

      case parseInt(cantidad) === parseInt(stock):
       console.log("La cantidad es igual al stock");
      break;

      default:
       console.log("El valor ingresado no es un numero");
      break;
    }
}

 