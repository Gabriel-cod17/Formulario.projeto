class CarroPadrao {
    constructor() {
        this.portas = 4
        if (this.ligar === undefined) {
            throw new TypeError("É obrigatorio o carro estar ligado")
        }
        this.ligado = false
    }
}

class Esportivo extends CarroPadrao {
    constructor(nome, tipo) {
        super()
        this.nome = nome
        this.tipo = tipo
        if (this.tipo == 1) {
            this.veloci = 100
            this.esportivo = "Fuleragem"
        } else if (this.tipo == 2) {
            this.veloci = 150
            this.esportivo = "Receita"
        }
    }

    ligar() {
        this.ligado = true
        return `Carro acabou de ligar`
    }

    info() {
        console.log(`Nome do carro = ${this.nome}`)
        console.log(`Tipo do carro = ${this.tipo}`)
        console.log(`Esportivo do carro = ${this.esportivo}`)
        console.log(`Portas do carro = ${this.portas}`)
        console.log(`Carro Ligado ou desligado= ${this.ligado ? "sim" : "não"}`)
        console.log(`Velocidade do carro = ${this.veloci}`)

    }

}


const c1 = new Esportivo("onix", 2)

c1.info()
console.log(c1.ligar())