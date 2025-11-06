import Cl_mCasino from "./Cl_mCasino.js";
import Cl_mJugador, { iJugador } from "./Cl_mJugador.js";
import Cl_vCasino from "./Cl_vCasino.js";


export default class Cl_controlador {
  public modelo: Cl_mCasino;
  public vista: Cl_vCasino;
  constructor(modelo: Cl_mCasino, vista: Cl_vCasino) {
    this.modelo = modelo;
    this.vista = vista;
  }
  agregarJugador({
    jugadorData,
    callback,
  }: {
    jugadorData: iJugador;
    callback: Function;
  }): void {
    this.modelo.agregarJugador({
      jugador: new Cl_mJugador(jugadorData),
      callback: (error: string | false) => {
        callback(error);
      },
    });
  }
  jugadoresRegistrados(): iJugador[] {
    return this.modelo.listar();
  }
}
