export const filterByName = ( busqueda, productos ) => {
    if(busqueda === ""){
        return productos
    }
    busqueda = busqueda.toLocaleLowerCase();
    return productos.filter( producto => producto.producto.toLocaleLowerCase().includes( busqueda ));

}