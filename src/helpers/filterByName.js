export const filterByName = ( busqueda, productos ) => {

    busqueda = busqueda.toLocaleLowerCase();
    return productos.filter( producto => producto.producto.toLocaleLowerCase().includes( busqueda ));

}