const fs = require ('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
  console.log('================================='.green);
  console.log('====tabla de multiplicar========='.green);
  console.log('================================='.green);
  return new Promise((resolve, reject) =>{

    if(!Number(base) || !Number(limite)){
      reject('El valor introducido no es un numero');
      return;
    } else {
      let resp;
      for(let i = 1; i <= limite; i++){
        resp = resp + `${base} * ${i} = ${base*i} \n`;
      }
      resolve (resp);
    }
    });
}


let crearArchivo = (base, limite = 10) =>{
  return new Promise((resolve, reject) =>{

    if(!Number(base)){
      reject(`El valor introducido ${base} no es un numero`);
      return;
    }
  let data = '';
  for(let i = 1; i <= limite; i++){
    data += `${base} * ${i} = ${base*i} \n`;
  }
  fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err)
      reject (err);
    else
      resolve(`tabla-${base} hasta al -${limite}`);

  });

});
}

module.exports = {
  crearArchivo,
  listarTabla
}
