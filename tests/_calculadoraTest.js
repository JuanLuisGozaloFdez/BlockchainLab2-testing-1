var expect = require("chai").expect;
var calculadora = require("../calculadora");

describe("Paquete Test de Calculadora", function() {
    
    describe("Suma", function() {
        it("Suma los números 4 y 7", function() {
            var resultado = calculadora.suma(4,7);

            expect(resultado).to.equal(1221); // valor erroneo a proposito para que falle el test
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
    });

})
