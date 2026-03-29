const container = document.getElementById("container");

for (let i = 1; i <= 10; i++) {
    const button = document.createElement("button");
    button.id = "exercicio" + i;
    button.textContent = "Exercício " + i;
    container.appendChild(button);
}

const botoes = document.querySelectorAll("button");

function Clicado(botao) {
    botao.style.backgroundColor = "#f0d86a";
    botao.style.color = "black";
}

botoes.forEach(botao => {
    botao.addEventListener("click", () => Clicado(botao));
});

const header = document.getElementById("header");
const tl = gsap.timeline();

tl.from(header, {
    opacity: 0,
    y: -30,
    duration: 2.25,
    ease: "back.out(1.7)",
});

tl.from(botoes, {
    opacity: 0,
    y: 50,
    duration: 2.25,
    ease: "back.out(1.7)",
}, "<");

tl.to(header, {
    y: "-5",
    duration: 1.5,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
}, 1.25);

tl.to(botoes, {
    y: "+5",
    duration: 1.5,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
}, "<");

/////////////////////////////////////////////////////////////////////////////////

// Exercício 1
document.getElementById("exercicio1").addEventListener("click", function() {
    class Pessoa {
        constructor(nome, idade) {
            this.nome = nome;
            this.idade = idade;
        }
        Apresentar() {
            return "Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos";
        }
    }

    let Pessoa1 = new Pessoa(prompt("Digite seu nome:"), prompt("Digite sua idade: "));
    alert(Pessoa1.Apresentar());

    let Pessoa2 = new Pessoa(prompt("Digite seu nome:"), prompt("Digite sua idade: "));
    alert(Pessoa2.Apresentar());
});

// Exercício 2
document.getElementById("exercicio2").addEventListener("click", function() {
    class Carro {
    constructor(marca, modelo, velocidade) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }

    acelerar(valor) {
        this.velocidade += valor; 
        return ("A velocidade do carro " + this.marca + " aumentou para " + this.velocidade);
    }


    frear(valor) {
        this.velocidade -= valor;
        return ("A velocidade do carro " + this.marca + " diminuiu para " + this.velocidade);
    }

    mostrarVelocidade() {
        return ("A velocidade atual do carro " + this.marca + " é de " + this.velocidade);
    }
}

    let carro1 = new Carro("Toyota", "Corolla", 80);
    let carro2 = new Carro("Ford", "Mustang", 120);

    //alert(carro1.mostrarVelocidade());
    //alert(carro1.acelerar(10));

    //alert(carro2.mostrarVelocidade());
    //alert(carro2.frear(5));

    let quantoAcelerar = Number(prompt("Quanto você deseja acelerar o " + carro1.marca + "?"));
    alert(carro1.acelerar(quantoAcelerar));

    let quantoFrear = Number(prompt("Quanto você deseja frear o " + carro2.marca + "?"));
    alert(carro2.frear(quantoFrear));
});

// Exercício 3
document.getElementById("exercicio3").addEventListener("click", function() {
    class ContaBancaria {
        constructor(titular, saldo) {
            this.titular = titular;
            this.saldo = saldo;
        }

        depositar(valor) {
            this.saldo += valor;
            alert("Depósito de R$" + valor + " realizado. Saldo atual: R$" + this.saldo);
            return this.saldo;
        }

        sacar(valor) {
            if (valor > this.saldo) {
                alert("Saldo insuficiente!");
                return this.saldo;
            } else {
                this.saldo -= valor;
                alert("Saque de R$" + valor + " realizado. Saldo atual: R$" + this.saldo);
                return this.saldo;
            }
        }

        mostrarSaldo() {
            alert("O saldo da conta de " + this.titular + " é R$" + this.saldo);
            return this.saldo;
        }
    }

    let conta1 = new ContaBancaria("Samara", 1000);

    conta1.mostrarSaldo();
    conta1.depositar(Number(prompt("Digite o valor para depositar:")));
    conta1.sacar(Number(prompt("Digite o valor para sacar:")));
    conta1.mostrarSaldo();
});

// Exercício 4
document.getElementById("exercicio4").addEventListener("click", function() {
    class Animal {
        constructor(nome) {
            this.nome = nome;
        }
        falar() {
            return ("Animal falou.");
        }
    }

    class Cachorro extends Animal {
        constructor(nome, raca) {
            super(nome);
            this.raca = raca;
        }
        falar() {
            return (this.nome + " latiu.");
        }
    }

    class Gato extends Animal {
        constructor(nome, raca) {
            super(nome);
            this.raca = raca;
        }
        falar() {
            return (this.nome + " miou.");
        }
    }

    let Cesar = new Cachorro("César", "pitbull");
    let Roberto = new Gato("Roberto", "tricolor");

    alert(Roberto.falar());
    alert(Cesar.falar());
});

// Exercício 5
document.getElementById("exercicio5").addEventListener("click", function() {
    class Produto {
        constructor(nome, preco, quantidade) {
            this.nome = nome;
            this.preco = preco;
            this.quantidade = quantidade;
        }
        calcularTotal() {
            return ("O total do preço dessa " + this.nome + " é de R$" + (this.preco * this.quantidade));
        }
    }

    let produto1 = new Produto("Camiseta", 50, 3);
    alert(produto1.calcularTotal());
});

// Exercício 6
document.getElementById("exercicio6").addEventListener("click", function() {
    class Aluno {
        constructor(nome, nota1, nota2) {
            this.nome = nome;
            this.nota1 = nota1;
            this.nota2 = nota2;
        }

        inserirNotas() {
            this.nota1 = Number(prompt("Digite a primeira nota:"));
            this.nota2 = Number(prompt("Digite a segunda nota:"));
        }

        CalcularMedia() {
            let media = (this.nota1 + this.nota2) / 2;
            let resultado;

            if (media >= 7) {
                resultado = "Este aluno foi aprovado!";
            } else {
                resultado = "Este aluno não foi aprovado.";
            }

            return (resultado + " A média de " + this.nome + " é: " + media.toFixed(2));
        }
    }

    let Clara = new Aluno("Clara");
    Clara.inserirNotas();
    alert(Clara.CalcularMedia());

    let Carlos = new Aluno("Carlos");
    Carlos.inserirNotas();
    alert(Carlos.CalcularMedia());
});

// Exercício 7
document.getElementById("exercicio7").addEventListener("click", function() {
    class Livro {
        constructor(Titulo, Autor) {
            this.Titulo = Titulo;
            this.Autor = Autor;
        }
    }

    let Livros = [
        new Livro("Dom Quixote", "Miguel de Cervantes"),
        new Livro("Dom Casmurro", "Machado de Assis"),
        new Livro("A Divina Comédia", "Dante Alighieri"),
    ];

    for (let livro of Livros) {
        alert("Título: " + livro.Titulo + ", Autor: " + livro.Autor);
    }
});

// Exercício 8
document.getElementById("exercicio8").addEventListener("click", function() {
    class Usuario {
        #Senha;
        constructor(Nome, Senha) {
            this.Nome = Nome;
            this.#Senha = Senha;
        }

        validarAcesso(nomeDigitado, senhaDigitada) {
            if (this.Nome === nomeDigitado && this.#Senha === senhaDigitada) {
                alert("Acesso permitido!");
            } else {
                alert("Acesso negado!");
            }
        }
    }

    let nomeDigitado = prompt("Digite seu nome:");
    let senhaDigitada = prompt("Digite sua senha:");
    let usuario1 = new Usuario(nomeDigitado, senhaDigitada);

    let nomeConfirmado = prompt("Confirme seu nome de usuario para entrar:");
    let senhaConfirmada = prompt("Confirme sua senha para entrar:");

    usuario1.validarAcesso(nomeConfirmado, senhaConfirmada);
});

// Exercício 9
document.getElementById("exercicio9").addEventListener("click", function() {
    class Veiculo {
        constructor(Marca, Ano) {
            this.Marca = Marca;
            this.Ano = Ano;
        }

        info() {
            return ("A Marca do veiculo é: " 
                + 
                this.Marca 
                + 
                ";\nO ano de lançamento desse veiculo é: " 
                + 
                this.Ano);
        }
    }

    class Carro extends Veiculo {
        constructor(Marca, Ano, Portas) {
            super(Marca, Ano);
            this.Portas = Portas;
        }

        info() {
            return ("A Marca desse Carro é: " + this.Marca + ";\nO ano de lançamento desse Carro é: " + this.Ano + ";\nE a quantidade de portas desse Carro é: " + this.Portas);
        }
    }

    class Moto extends Veiculo {
        constructor(Marca, Ano, cilindradas) {
            super(Marca, Ano);
            this.cilindradas = cilindradas;
        }

        info() {
            return ("A Marca dessa Moto é: " + this.Marca + ";\nO ano de lançamento dessa Moto é: " + this.Ano + ";\nE ela: " + this.cilindradas);
        }
    }

    let carro1 = new Carro("Fiat", 2015, 2);
    let carro2 = new Carro("Toyota", 2022, 4);

    let moto1 = new Moto("Honda", 2020, "com cilindragem definida de 160cc");
    let moto2 = new Moto("Yamaha", 2018, "sem cilindragem definida");

    alert(carro1.info());
    alert(carro2.info());
    alert(moto1.info());
    alert(moto2.info());
});

// Exercício 10
document.getElementById("exercicio10").addEventListener("click", function() {
    class Produto {
        constructor(Nome, Preco) {
            this.Nome = Nome;
            this.Preco = Preco;
        }
    }

    class Carrinho {
        constructor() {
            this.itens = [];
        }

        adicionarProduto(produto) {
            this.itens.push(produto);
            return (produto.Nome + " foi adicionado ao carrinho.");
        }

        mostrarCarrinho() {
            if (this.itens.length === 0) return ("O seu carrinho está vazio.");
            let listaNomes = "";
            for (let i = 0; i < this.itens.length; i++) {
                if (i < this.itens.length - 1) {
                    listaNomes += this.itens[i].Nome + ", ";
                } else {
                    listaNomes += this.itens[i].Nome;
                }
            }
            return ("Atualmente, no seu carrinho tem: " + listaNomes);
        }

        calcularTotal() {
            let total = 0;
            for (let i = 0; i < this.itens.length; i++) {
                total += this.itens[i].Preco;
            }
            return total;
        }
    }

    let listaProdutosLoja = [
        new Produto("Camisa", 50),
        new Produto("Camiseta", 60),
        new Produto("Moletom", 70),
        new Produto("Calça", 100),
        new Produto("Cropped", 50),
        new Produto("Shorts", 75),
        new Produto("Blusa de Frio", 75)
    ];

    alert("Olá! Seja bem-vindo!");
    alert("Atualmente, na nossa loja temos diversos produtos! Aí vai uma lista deles:");

    for (let item of listaProdutosLoja) {
        alert(item.Nome + ", saindo pelo preço de: R$ " + item.Preco + "!");
    }

    let meuCarrinho = new Carrinho();
    let continuar = "sim";

    while (continuar === "sim") {
        let escolha = prompt("Digite o nome do produto que você deseja adicionar ao seu carrinho:");
        let produtoEncontrado = null;

        for (let item of listaProdutosLoja) {
            if (item.Nome.toLowerCase() === escolha.toLowerCase()) {
                produtoEncontrado = item;
            }
        }

        if (produtoEncontrado) {
            alert(meuCarrinho.adicionarProduto(produtoEncontrado));
            continuar = prompt("Ótimo! Deseja comprar mais alguma coisa? (sim/nao)").toLowerCase();
        } else {
            alert("Ops! Não encontramos nenhum produto com o nome: " + escolha);
            continuar = prompt("Deseja tentar de novo? (sim/nao)").toLowerCase();
        }
    }

    alert(meuCarrinho.mostrarCarrinho());
    alert("Total atual: R$ " + meuCarrinho.calcularTotal());
    alert("Compra finalizada! Volte sempre!");
});