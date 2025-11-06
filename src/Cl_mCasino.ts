import Cl_mJugador, { iJugador } from "./Cl_mJugador.js";


export default class Cl_mCasino {
  private jugadores:  Cl_mJugador[] = [];

  agregarJugador({
    jugador,
    callback,
  }: {
    jugador: Cl_mJugador;
    callback: (error: string | false) => void;
  }): void {
    // Validar nombre de jugador repetido
    const nombreRepetido = this.jugadores.find(
      (g) => g.nombre.toLowerCase() === jugador.nombre.toLowerCase()
    );
    if (nombreRepetido) {
      callback(` ${jugador.nombre} ya jugo hoy en el casino.`);
      return;
    }
    // Validar tragamonedas repetida
    const TragamonedasRepetido = this.jugadores.find(
      (g) => g.tragamonedas.toLowerCase() === jugador.tragamonedas.toLowerCase()
    );
    if (TragamonedasRepetido) {
      callback(`la tragamonedas ${jugador.tragamonedas} ya fue usada`);
      return;
    }
    // Si todo está bien, agregar el jugador
    this.jugadores.push(jugador);
    callback(false);
  }
  listar(): iJugador[] {
    let jugadores: iJugador[] = [];
    this.jugadores.forEach((g) => jugadores.push(g.toJSON()));
    return jugadores;
  }
}