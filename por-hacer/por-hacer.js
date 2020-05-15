const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/db.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar')
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/db.json');
    } catch (e) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

module.exports = {
    crear
}