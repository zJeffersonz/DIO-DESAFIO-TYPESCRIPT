
enum cargo {
    Dev = "Desenvolvedor",
    AnalistadeSeguros = "Analista de Seguros",
    Aposentada = "Aposentada",
    Professora = "Professora"
}

interface pessoa  {
    nome: string,
    idade: number,
    profissao: cargo
}

let p1: pessoa = {
    nome: 'Maria Rita',
    idade: 26,
    profissao: cargo.AnalistadeSeguros
};

let p2: pessoa = {
    nome: 'Jefferson',
    idade: 33,
    profissao: cargo.Dev
};

let p3: pessoa = {
    nome: 'Antonia Alves',
    idade: 69,
    profissao: cargo.Aposentada
};

let p4: pessoa = {
    nome: "Maria Alice",
    idade: 20,
    profissao: cargo.Professora
}

console.log(p1, p2, p3, p4);