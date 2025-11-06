import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";
export default class Cl_vCasino extends Cl_vGeneral {
    constructor() {
        super({ formName: "Casino" });
        this.btAgregarJugador = this.crearHTMLButtonElement("btAgregarJugador", {
            onclick: () => this.agregarJugador(),
        });
        this.divJugadoresRegistrados = this.crearHTMLElement("divJugadoresRegistrados", {
            type: tHTMLElement.CONTAINER,
            refresh: () => this.mostrarJugadoresRegistrados(),
        });
    }
    mostrarJugadoresRegistrados() {
        var _a;
        this.divJugadoresRegistrados.innerHTML = "";
        let jugadores = (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.jugadoresRegistrados();
        if (!jugadores)
            return;
        jugadores.forEach((jugador) => {
            this.divJugadoresRegistrados.innerHTML += `<tr>
            <td>${jugador.nombre}</td>
            <td>${jugador.tragamonedas}</td>
            <td>${jugador.premio} bs</td>
        </tr>`;
        });
    }
    agregarJugador() {
        let nombre = prompt("Ingrese el nombre del Jugador:");
        if (!nombre)
            return;
        let tragamonedas = prompt("Ingrese La Tragamonedas que jugo:");
        if (!tragamonedas)
            return;
        let premio = prompt("Ingrese el premio que gano:");
        if (!premio)
            return;
        this.controlador.agregarJugador({
            jugadorData: {
                nombre: nombre,
                tragamonedas: tragamonedas,
                premio: +premio,
            },
            callback: (error) => {
                if (error)
                    alert(error);
                this.refresh();
            },
        });
    }
}
