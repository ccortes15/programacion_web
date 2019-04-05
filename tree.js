class ArbolBinario{
    constructor(){
        this.raiz = null
    }

    agregar(valor)
    {
        if(this.raiz == null)
        {
            this.raiz = valor
        }
        else
        {
            this.addTree(valor, this.raiz)
        }
    }

    addTree(n, r)
    {
        if(n.Dato < r.dato)
        {
            if(r.leftSon == null)
            {
                r.leftSon = n
            }
            else
            {
                this.addTree(n, r.leftSon)
            }
        }
        else
        {
            if (r.rightSon == null) {
                r.rightSon = n
            } else {
                this.addTree(n, r.rightSon)
            }
        }
    }

    inOrder(n){
        if(n != null)
        {
            this.inOrder(n.leftSon)
            let val = n
            this.inOrder(n.rightSon)
            return val
        }
    }

    preOrder(n){
        if(n != null)
        {
            let val = n
            this.preOrder(n.leftSon)
            this.preOrder(n.rightSon)
            return val
        }
    }

    postOrder(n){
        if(n!=null)
        {
            this.postOrder(n.leftSon)
            this.postOrder(n.rightSon)
            return n
        }
    }

    nodoRaiz()
    {
        return this.raiz
    }
}