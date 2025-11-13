import Cl_mJugador, { iJugador } from "./Cl_mJugador.js";


export default class Cl_mCasino {
  private jugadorP:  Cl_mJugador[] = [];

  agregarJugador({
    jugador,
    callback,
  }: {
    jugador: Cl_mJugador;
    callback: (error: string | false) => void;
  }): void {
    // Validar nombre de jugador repetido
    const nombreRepetido = this.jugadorP.find(
      (J) => J.nombre.toLowerCase() === jugador.nombre.toLowerCase()
    );
    if (nombreRepetido) {
      callback(` ${jugador.nombre} ya jugó hoy en el casino.`);
      return;
    }
    // Validar tragamonedas repetida
    const TragamonedasRepetido = this.jugadorP.find(
      (J) => J.tragamonedas.toLowerCase() === jugador.tragamonedas.toLowerCase()
    );
    if (TragamonedasRepetido) {
      callback(`la tragamonedas ${jugador.tragamonedas} ya fue usada`);
      return;
    }
    this.jugadorP.push(jugador);
    localStorage.setItem("jugador", JSON.stringify(this.listar()));
    callback(false);
  }
  
  listar(): iJugador[] {
    let jugadores: iJugador[] = [];
    this.jugadorP.forEach((J) => { jugadores.push(J.toJSON())});
    return jugadores;
  }
}