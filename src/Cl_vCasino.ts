import { iJugador } from "./Cl_mJugador.js";
import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";

export default class Cl_vCasino extends Cl_vGeneral {
  private btAgregarJugador: HTMLButtonElement;
  private divJugadoresRegistrados: HTMLDivElement;
  constructor() {
    super({ formName: "Casino" });
    console.debug("Cl_vCasino: constructor inicializado");
    this.btAgregarJugador = this.crearHTMLButtonElement("btAgregarJugador", {
      onclick: () => this.agregarJugador(),
    });
    this.divJugadoresRegistrados = this.crearHTMLElement("divJugadoresRegistrados", {
      type: tHTMLElement.CONTAINER,
      refresh: () => this.mostrarJugadoresRegistrados(),
    }) as HTMLDivElement;
  }
  mostrarJugadoresRegistrados() {
    this.divJugadoresRegistrados.innerHTML = "";
    let jugadores = this.controlador?.jugadoresRegistrados();
    if (!jugadores) return;
    jugadores.forEach((jugador: iJugador) => {
      this.divJugadoresRegistrados.innerHTML += `<tr>
            <td>${jugador.nombre}</td>
            <td>${jugador.tragamonedas}</td>
            <td>${jugador.premio} bs</td>
        </tr>`;
    });
  }
  agregarJugador() {
    console.debug("Cl_vCasino: agregarJugador invocado");
    let nombre = prompt("Ingrese el nombre del Jugador:");
    if (!nombre) return;
    let tragamonedas = prompt("Ingrese La Tragamonedas que jugo:");
    if (!tragamonedas) return;
    let premio = prompt("Ingrese el premio que gano:");
    if (!premio) return;
    this.controlador!.agregarJugador({
      jugadorData: {
        nombre: nombre,
        tragamonedas: tragamonedas,
        premio: +premio,
      },
      callback: (error: string | false) => {
        if (error) alert(error);
        this.refresh();
      },
    });
  }
}