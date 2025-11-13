export default class Cl_mCasino {
    constructor() {
        this.jugadorP = [];
    }
    agregarJugador({ jugador, callback, }) {
        // Validar nombre de jugador repetido
        const nombreRepetido = this.jugadorP.find((J) => J.nombre.toLowerCase() === jugador.nombre.toLowerCase());
        if (nombreRepetido) {
            callback(` ${jugador.nombre} ya jugó hoy en el casino.`);
            return;
        }
        // Validar tragamonedas repetida
        const TragamonedasRepetido = this.jugadorP.find((J) => J.tragamonedas.toLowerCase() === jugador.tragamonedas.toLowerCase());
        if (TragamonedasRepetido) {
            callback(`la tragamonedas ${jugador.tragamonedas} ya fue usada`);
            return;
        }
        this.jugadorP.push(jugador);
        localStorage.setItem("jugador", JSON.stringify(this.listar()));
        callback(false);
    }
    listar() {
        let jugadores = [];
        this.jugadorP.forEach((J) => { jugadores.push(J.toJSON()); });
        return jugadores;
    }
}
