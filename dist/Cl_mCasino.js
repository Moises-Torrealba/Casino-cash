export default class Cl_mCasino {
    constructor() {
        this.jugadores = [];
    }
    agregarJugador({ jugador, callback, }) {
        // Validar nombre de grupo repetido
        const nombreRepetido = this.jugadores.find((g) => g.nombre.toLowerCase() === jugador.nombre.toLowerCase());
        if (nombreRepetido) {
            callback(` ${jugador.nombre} ya jugo hoy en el casino.`);
            return;
        }
        // Si todo está bien, agregar el grupo
        this.jugadores.push(jugador);
        callback(false);
    }
    listar() {
        let jugadores = [];
        this.jugadores.forEach((g) => jugadores.push(g.toJSON()));
        return jugadores;
    }
}
