var usuBd = "oscarlopez88991@gmail.com";
var passBd = 123;
let intentos = 0;
let intentosMaximos = 3;

function login(e) {
  e.preventDefault(); // Evita que el formulario se recargue

  let usuForm = document.getElementById("usuario").value;
  let passForm = parseInt(document.getElementById("password").value);

  if (intentos >= intentosMaximos) {
    alert("Has superado el límite de intentos");
    return;
  }

  if (usuBd === usuForm && passBd === passForm) {
    alert("Bienvenido!");
    window.location.href = "./home.html";
  } else {
    intentos++;
    alert("Contraseña incorrecta. Llevas " + intentos + " intento(s).");
  }

  if (intentos >= intentosMaximos) {
    alert("Has superado el límite de intentos. Intenta más tarde.");
    document.querySelector("button").disabled = true;
  }
}
