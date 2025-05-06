let usuBd = "oscarlopez88991@gmail.com";
let passBd = "123";
intentos = 0;
intentosMaximos = 3;

let form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
let inputPass = document.getElementById("password");
let confirmar = document.getElementById("confirmar");

confirmar.addEventListener("change", function () {
  if (this.checked) {
    inputPass.type = "text";
  } else {
    inputPass.type = "password";
  }
});

function login() {
  let boton = document.getElementById("boton");
  let inputUsu = document.getElementById("usuario").value;
  let passForm = inputPass.value;

  if (usuBd === inputUsu && passBd === passForm) {
    window.location.href = "./home.html";
  } else {
    intentos++;
    alert(
      "Usuario o contraseña incorrecto llevas " + intentos + " Intento (s)"
    );
  }
  if (intentos >= intentosMaximos) {
    alert("Has superado el liomite de intentos ");
    boton.disabled = true;
  }
}
