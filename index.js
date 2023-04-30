/* Este código está seleccionando un elemento de botón y un elemento de casilla de verificación con los ID "sincronizados" y definiendo un
función llamada `TOGGLE`. Cuando se hace clic en el botón, se llama a la función `TOGGLE`. La función
comprueba si la casilla de verificación está marcada y establece el atributo `data-dark-mode` del elemento del cuerpo en
`verdadero` o `falso` según el estado actual del atributo `aria-pressed` del botón. El
El atributo `aria-pressed` del botón se alterna entre `true` y `false`.*/
const BUTTON = document.querySelector("button");

const TOGGLE = () => {
  const IS_PRESSED = BUTTON.matches("[aria-pressed=true]");
  document.body.setAttribute("data-dark-mode", IS_PRESSED ? false : true);
  BUTTON.setAttribute("aria-pressed", IS_PRESSED ? false : true);
};

BUTTON.addEventListener("click", TOGGLE);
