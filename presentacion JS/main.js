"use strict"

async function basedeDatos(ruta) {

    let getDatos = fetch(ruta);
    let parsDatos = await getDatos.then(e => e.json());
    return parsDatos.juegos;

}

const datos = await basedeDatos("./json/basedeDatos.json");

console.log(datos);

const newGames = datos.slice(0, 3);
console.log(newGames);

function darImagen(arr) {

    for (let i = 0; i < arr.length; i++) {

        const div = document.getElementById(`div${i + 1}`);

        console.log(div, arr[i].img);

        // div.style.backgroundImage = url(`${arr[i].img}`);

    }

}

darImagen(newGames)