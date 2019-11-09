
export class Materiel {
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
  
constructor(private _nom: string) {

}

}