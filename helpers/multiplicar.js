const fs = require("fs");
const colors = require('colors')

const crearArchivo = async (base = 5, listar, hasta) => {
  let salida = "";
  console.log(hasta);

  for (let i = 1; i < hasta + 1; i++) {
    salida += `${base} x ${i} = ${base * i} \n`;
  }

  if (listar) {
    console.log(salida);
  } else {
    console.log("No se imprime la tabla".underline.green);
  }

  try {
    fs.writeFileSync(`./salida/tabla${base}.txt`, salida);
  } catch (error) {
    console.log(error);
  }

  return `tabla ${base}.txt creado`;
};

module.exports = { crearArchivo };
