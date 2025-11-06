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
    // Validar nombre de grupo repetido
    const nombreRepetido = this.jugadores.find(
      (g) => g.nombre.toLowerCase() === jugador.nombre.toLowerCase()
    );
    if (nombreRepetido) {
      callback(` ${jugador.nombre} ya jugo hoy en el casino.`);
      return;
    }
    // Si todo está bien, agregar el grupo
    this.jugadores.push(jugador);
    callback(false);
  }
  listar(): iJugador[] {
    let jugadores: iJugador[] = [];
    this.jugadores.forEach((g) => jugadores.push(g.toJSON()));
    return jugadores;
  }
}