import Cl_mJugador from "./Cl_mJugador.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarJugador({ jugadorData, callback, }) {
        this.modelo.agregarJugador({
            jugador: new Cl_mJugador(jugadorData),
            callback: (error) => {
                callback(error);
            },
        });
    }
    jugadoresRegistrados() {
        return this.modelo.listar();
    }
}
