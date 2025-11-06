export default class Cl_mJugador {
    constructor({ nombre = "", tragamonedas = "", premio = 0, }) {
        this._nombre = "";
        this._tragamonedas = "";
        this._premio = 0;
        this.nombre = nombre;
        this.tragamonedas = tragamonedas;
        this.premio = premio;
    }
    set nombre(nombre) {
        this._nombre = nombre.trim().toUpperCase();
    }
    get nombre() {
        return this._nombre;
    }
    set tragamonedas(tragamonedas) {
        this._tragamonedas = tragamonedas.trim().toUpperCase();
    }
    get tragamonedas() {
        return this._tragamonedas;
    }
    set premio(premio) {
        this._premio = premio;
    }
    get premio() {
        return this._premio;
    }
    existeJugador(Jugador) {
        if (Jugador === null)
            return false;
        if (this.nombre === Jugador)
            return true;
        return false;
    }
    toJSON() {
        return {
            nombre: this._nombre,
            tragamonedas: this._tragamonedas,
            premio: this._premio,
        };
    }
}
