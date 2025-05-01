let usu = "oscarlopez88991@gmail.com";
let pass = 12345;
let intentos = 3;
let login = false;

let formulario = document.getElementById("form");
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
});
let usuario = document.getElementById("usuario").value;
let contrasena = document.getElementById("password").value;
console.log(usuario, contrasena);

while (intentos > 0 && !login) {
  if (usu === usuario && pass === contrasena) {
    console.log("exito");
    login = true;
  } else {
    intentos--;
    if (intentos > 0) {
      console.log("llevas intentos " + intentos);
    } else {
      console.log("has superado el limite de intentos ");
    }
  }
}
