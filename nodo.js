class Nodo{
    constructor(dato){
        this.dato = dato
        this.leftSon = null
        this.rightSon = null
    }

    set Dato(valor){
        this._dato = valor
    }

    set leftSon(valor){
        this._leftSon = valor
    }

    set rightSon(valor){
        this._rightSon = valor
    }

    get Dato() {
        return this._dato
    }

    get leftSon() {
        return this._leftSon
    }

    get rightSon() {
        return this._rightSon
    }
}