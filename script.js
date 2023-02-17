//plantillas generales
class Producto{
constructor(nombre, precio, lote, tamanio){

    this.nombre=nombre;
    this.precio = precio;
    this.lote = lote;
    this.tamanio =tamanio; 
}

imprimirNombre() {
    console.log(this.nombre);
}

}

const producto1= new Producto("Lavatrastes", 200, 32434, 's');

const producto2= new Producto("lavadora", 200, .32434, 's');

console.log(producto1);
producto1.imprimirNombre();
producto2.imprimirNombre();