import Cl_mJugador,{ iJugador } from "./Cl_mJugador.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_mCasino from "./Cl_mCasino.js";
import Cl_vCasino from "./Cl_vCasino.js";


export default class Cl_index {
  public modelo: Cl_mCasino;
  public vista: Cl_vCasino;
  constructor() {
    this.modelo = new Cl_mCasino();
    let JugadoresLS = localStorage.getItem("jugador");
    if (JugadoresLS) {
      let contactosDT = JSON.parse(JugadoresLS);      
      contactosDT.forEach((jugador: iJugador) => {
        this.modelo.agregarJugador({
          jugador: new Cl_mJugador(jugador),
          callback: (error: string | false) => {
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