import Cl_mJugador from "./Cl_mJugador.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_mCasino from "./Cl_mCasino.js";
import Cl_vCasino from "./Cl_vCasino.js";
export default class Cl_index {
    constructor() {
        this.modelo = new Cl_mCasino();
        let JugadoresLS = localStorage.getItem("jugador");
        if (JugadoresLS) {
            let contactosDT = JSON.parse(JugadoresLS);
            contactosDT.forEach((jugador) => {
                this.modelo.agregarJugador({
                    jugador: new Cl_mJugador(jugador),
                    callback: (error) => {
                        // Ignorar errores al cargar desde localStorage
                    },
                });
            });
        }
        this.vista = new Cl_vCasino();
        let controlador = new Cl_controlador(this.modelo, this.vista);
        this.vista.controlador = controlador;
        this.vista.refresh();
    }
}
