
  export interface iJugador {
  nombre: string;
  tragamonedas: string;
  premio: number;
}
export default class Cl_mJugador {
  _nombre: string = "";
  _tragamonedas: string = "";
  _premio: number = 0;
  constructor({
    nombre = "",
    tragamonedas = "",
    premio = 0, 
  }: {
    nombre: string;
    tragamonedas: string;
    premio: number;
  }) {
    this.nombre = nombre;
    this.tragamonedas = tragamonedas;
    this.premio = premio;
  }
  set nombre(nombre: string) {
    this._nombre = nombre.trim().toUpperCase();
  }
  get nombre() {
    return this._nombre;
  }
    set tragamonedas(tragamonedas: string) {
        this._tragamonedas = tragamonedas.trim().toUpperCase();
    }
    get tragamonedas(): string {
        return this._tragamonedas;
    }
    set premio(premio: number) {
        this._premio = premio;
    }
    get premio(): number {
        return this._premio;
    }
  
  existeJugador(Jugador: string | null): boolean {
    if (Jugador === null) return false;
    if (this.nombre === Jugador || this.tragamonedas === Jugador) return true;
    return false;
  }
  toJSON(): iJugador {
    return {
        nombre: this._nombre,
        tragamonedas: this._tragamonedas,
        premio: this._premio,
    };
  }
}
