async function basedeDatos(ruta) {

    let getDatos = fetch(ruta);
    let parsDatos = await getDatos.then(e=> e.json());
    return parsDatos;
    
}

const datos = await basedeDatos("./json/basedeDatos.json");

console.log(datos);