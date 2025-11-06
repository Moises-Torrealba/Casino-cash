export default class Cl_mCasino {
    constructor() {
        this.jugadores = [];
    }
    agregarJugador({ jugador, callback, }) {
        // Validar nombre de jugador repetido
        const nombreRepetido = this.jugadores.find((g) => g.nombre.toLowerCase() === jugador.nombre.toLowerCase());
        if (nombreRepetido) {
            callback(` ${jugador.nombre} ya jugo hoy en el casino.`);
            return;
        }
        // Si todo está bien, agregar el jugador
        this.jugadores.push(jugador);
        callback(false);
    }
    listar() {
        let jugadores = [];
        this.jugadores.forEach((g) => jugadores.push(g.toJSON()));
        return jugadores;
    }
}
