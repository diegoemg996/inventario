export const filterByBodega = ( bodega, productos ) => {
    if(bodega === ""){
        return productos;
    }
    bodega = bodega.toLocaleLowerCase();
    return productos.filter( producto => producto.bodega.toLocaleLowerCase() === bodega);

}