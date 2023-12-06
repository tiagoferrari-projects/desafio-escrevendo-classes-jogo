class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atacar() {
    let ataque = '';

    if (this.tipo === 'mago') {
      ataque = 'magia';
    } else if (this.tipo === 'guerreiro') {
      ataque = 'espada';
    } else if (this.tipo === 'monge') {
      ataque = 'artes marciais';
    } else if (this.tipo === 'ninja') {
      ataque = 'shuriken';
    }

    console.log(
      `O ${this.tipo} chamado ${this.nome}, atacou usando ${ataque}!`,
    );
  }
}

let hero1 = new Hero('ShaKhaN9', 29, 'mago');
hero1.atacar();
