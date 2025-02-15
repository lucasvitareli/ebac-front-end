
function Aluno(nome, sobrenome, materia, nota) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.materia = materia;
    let _nota = nota;
    
    // retornar a nota do aluno
    this.getNota = function () {
        return _nota;
    }
    
    // atribuir uma nova nota ao aluno
    this.setNota = function (novaNota) {
        if (typeof novaNota === "number" && novaNota >= 0 && novaNota <= 10) {
            this._nota = novaNota;
        } else {
            console.log("Nota inválida! Devem ser números entre 0 e 10");
        }
    }

    this.definirAprovacao = function() {
        const notaDeCorte = 6;
        if (this.getNota() >= notaDeCorte) {
            console.log(`Parabéns ${this.nome}, você foi aprovado na matéria ${this.materia}`);
        } else {
            console.log(`Sinto muito ${this.nome}, você foi reprovado na matéria ${this.materia}`);
    }
}
    
    // método para exibir os dados do aluno
    this.exibirDados = function() {
        console.log(`Aluno: ${this.nome}, tirou nota (${this._getNota}) na matéria ${this.materia})`)
    }
}

// classe EnsinoFundamental
function EnsinoFundamental(nome, sobrenome, materia, nota) {
    Aluno.call(this, nome, sobrenome, materia, nota);

    const notaDeCorte = 6;
    this.definirAprovacao = function() {
        if (this.getNota() >= notaDeCorte) {
            console.log(`Parabéns ${this.nome}, você foi aprovado na matéria ${this.materia} com nota ${this.getNota()}`);
        } else {
            console.log(`Sinto muito ${this.nome}, você foi reprovado na matéria ${this.materia} com nota ${this.getNota()}`);
        }
    }

    this.exibirDados = function() {
        console.log(`Aluno: ${this.nome}, tirou nota (${this._getNota}) na matéria ${this.materia} com nota ${this.getNota()})`)
    }
}

// classe EnsinoMedio
function EnsinoMedio(nome, sobrenome, materia, nota) {
    Aluno.call(this, nome, sobrenome, materia, nota);

    const notaDeCorte = 7;
    this.definirAprovacao = function() {
        if (this.getNota() >= notaDeCorte) {
            console.log(`Parabéns ${this.nome}, você foi aprovado na matéria ${this.materia} com nota ${this.getNota()}`);
        } else {
            console.log(`Sinto muito ${this.nome}, você foi reprovado na matéria ${this.materia} com nota ${this.getNota()}`);
        }
    }

    this.exibirDados = function() {
        console.log(`Aluno: ${this.nome}, tirou nota (${this._getNota}) na matéria ${this.materia} com nota ${this.getNota()})`)
    }
}

// classe EnsinoSuperior
function EnsinoSuperior(nome, sobrenome, materia, nota) {
    Aluno.call(this, nome, sobrenome, materia, nota);

    const notaDeCorte = 7.5;
    this.definirAprovacao = function() {
        if (this.getNota() >= notaDeCorte) {
            console.log(`Parabéns ${this.nome}, você foi aprovado na matéria ${this.materia} com nota ${this.getNota()}`);
        } else {
            console.log(`Sinto muito ${this.nome}, você foi reprovado na matéria ${this.materia} com nota ${this.getNota()}`);
        }
    }
}

// instâncias de objetos Aluno
const aluno1 = new EnsinoFundamental("Lucas", "Silva", "Matemática", 6);
const aluno2 = new EnsinoFundamental("Maria", "Santos", "Português", 5);
const aluno3 = new EnsinoFundamental("João", "Oliveira", "História", 7);
const aluno4 = new EnsinoMedio("Igor", "Oliveira", "História", 7);
const aluno5 = new EnsinoMedio("Ana", "Souza", "Geografia", 6);
const aluno6 = new EnsinoSuperior("Pedro", "Ferreira", "Ciências", 7.5);
const aluno7 = new EnsinoSuperior("Carla", "Silveira", "Física", 7);
const aluno8 = new EnsinoSuperior("Mariana", "Santos", "Química", 8);


// chamada para cada aluno
aluno1.definirAprovacao();
aluno2.definirAprovacao();
aluno3.exibirDados();
