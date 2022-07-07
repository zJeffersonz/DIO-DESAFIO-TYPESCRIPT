"use strict";
var cargo;
(function (cargo) {
    cargo["Dev"] = "Desenvolvedor";
    cargo["AnalistadeSeguros"] = "Analista de Seguros";
    cargo["Aposentada"] = "Aposentada";
    cargo["Professora"] = "Professora";
})(cargo || (cargo = {}));
var p1 = {
    nome: 'Maria Rita',
    idade: 26,
    profissao: cargo.AnalistadeSeguros
};
var p2 = {
    nome: 'Jefferson',
    idade: 33,
    profissao: cargo.Dev
};
var p3 = {
    nome: 'Antonia Alves',
    idade: 69,
    profissao: cargo.Aposentada
};
var p4 = {
    nome: "Maria Alice",
    idade: 20,
    profissao: cargo.Professora
};
console.log(p1, p2, p3, p4);
//# sourceMappingURL=app2.js.map