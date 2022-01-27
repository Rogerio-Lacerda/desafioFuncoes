function msg() {
  console.log("Olá, um Bom dia.")
}

msg();

nome = "Rogerio";

function mostrar(nome){
  console.log(`Meu nome é ${nome}`)
}

mostrar(nome);

function perfil(nome, estilo, numero){
  console.log(`${nome} gosta de ${estilo} e tem ${numero} anos.`)
}

perfil(nome,"rap", 19);

function info(filme, musica) {
  console.log(`O filme ${filme} é muito bom e a musica ${musica} do Djonga é incrivel.`)
}

info("Carros","Ouro Branco");

let num = 3;

function triplo(num, y){
  return num * y;
}

console.log(triplo(num, 3))