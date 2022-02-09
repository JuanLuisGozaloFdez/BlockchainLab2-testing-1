var expect = require("chai").expect;
var calculadora = require("../calculadora");

describe("Paquete Test de Calculadora", function() {
    
    describe("Suma", function() {
        it("Suma los números 4 y 7", function() {
            var resultado = calculadora.suma(4,7);

            expect(resultado).to.equal(11);
        });
        it("Suma los números -1 y -2", function() {
            var resultado = calculadora.suma(-1,-2);

            expect(resultado).to.equal(-3);
        });
    });

    describe("Resta", function() {
        it("Resta los números 4 y 7", function() {
            var resultado = calculadora.resta(4,7);

            expect(resultado).to.equal(-3);
        });
    });
    
    describe("Multiplica", function() {
        it("Multiplica los números 4 y 7", function() {
            var resultado = calculadora.multiplica(4,7);

            expect(resultado).to.equal(28);
        });
    });
    
    describe("Divide", function() {
        it("Divide los números 8 y 4", function() {
            var resultado = calculadora.divide(8,4);

            expect(resultado).to.equal(2);
        });
        it("Divide los números 4 y 0", function() {
            var resultado = calculadora.divide(4,0);

            expect(resultado).to.equal(Infinity);
        });
    });

})
