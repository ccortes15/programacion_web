var ab = new ArbolBinario()
var raiz = ab.nodoRaiz()
ab.agregar(10)
ab.agregar(5)
ab.agregar(15)
ab.agregar(3)
ab.agregar(8)
ab.agregar(12)
ab.agregar(14)

document.getElementById('demo').innerHTML = `${raiz}`


