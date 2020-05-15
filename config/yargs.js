const opcions = {
    descripcion: {
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer',
        demand: true
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completada o pendiente la tarea'
    }
}
const argv = require('yargs')
    .command('crear', 'Crear una nueva tarea', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado de tarea', opcions)
    .help()
    .argv

module.exports = {
    argv
}