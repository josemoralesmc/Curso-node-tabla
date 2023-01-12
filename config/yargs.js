const { describe } = require("yargs");

const argv = require("yargs")
                .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption:true,
                        describe: 'base del multiplicar'
                    })
                .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'muestra la tabla'

                })
                .option('h', {
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'hasta que numero multiplicar',
                        demandOption:true

                })
                .check((argv, options) => {
                        if(isNaN(argv.b)){
                                throw 'la base tiene que ser un numero'
                        }
                        return true
                })
                .argv;

module.exports = argv