let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let limpiarBtn = document.getElementById("limpiar");
let contrasena = document.getElementById("contrasena");

const cadenaCaracteres =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generar() {
  let numerodigitado = parseInt(cantidad.value);
  if (numerodigitado < 8) {
    alert("La cantidad tiene que ser mayor que 8");
    return;
  }

  let password = "";
  let contieneNumero = false;
  let contieneMayuscula = false;
  const caracteresEspeciales = "!@#$%^&*()";

  for (let i = 0; i < numerodigitado; i++) {
    let caracterAleatorio =
      cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];

    if (/\d/.test(caracterAleatorio)) contieneNumero = true;
    if (/[A-Z]/.test(caracterAleatorio)) contieneMayuscula = true;
    if (caracteresEspeciales.includes(caracterAleatorio))
      contieneEspecial = true;

    password += caracterAleatorio;
  }

  if (!contieneNumero || !contieneMayuscula || !contieneEspecial) {
    alert(
      "Contraseña débil: debe contener al menos un número, una letra mayúscula y un carácter especial."
    );
  }

  contrasena.value = password;
}

function limpiar() {
  contrasena.value = "";
  cantidad.value = "";
}
