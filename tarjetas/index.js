"use strict";
exports.__esModule = true;
var visa_1 = require("./visa");
var masterCard_1 = require("./masterCard");
var tarjetaVisa1 = new visa_1["default"]("Juan Carlos", 752, "05/23");
console.log(tarjetaVisa1.verificar(48));
console.log(tarjetaVisa1.interesYCuota(15000, 23, 6));
var tarjetaVisa2 = new visa_1["default"]("Lucas Suarez", 234, "04/24");
console.log(tarjetaVisa2.verificar(23));
var tarjetaMasterCard1 = new masterCard_1["default"]("Martin Ramirez", 545, "06/24");
console.log(tarjetaMasterCard1.verificar("Galicia"));
console.log(tarjetaMasterCard1.interesYCuota(25000, 18));
var tarjetaMasterCard2 = new masterCard_1["default"]("Luis Gonzalez", 671, "07/26");
console.log(tarjetaMasterCard2.verificar('Nación'));
