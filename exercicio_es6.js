const alunos = [
    { nome : 'João', nota : 7.3 },
    { nome : 'Maria', nota : 9.2 },
    { nome : 'Ana', nota : 9.8 },
    { nome : 'Pedro', nota : 5.7 },
    { nome : 'José', nota : 7.1 },
    { nome : 'Carlos', nota : 5.9 }
]

function aprovados(alunos) {
    return alunos.nota >= 6;
}

const alunosAprovados = alunos.filter(aprovados);
console.log(alunosAprovados);