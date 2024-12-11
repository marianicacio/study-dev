"use strict"

console.log("Hello, World")
console.log("Murillo Fernandes")
console.log("1888 anos")
console.log("nasceu em 2006")
console.log(2006)
console.log("Maria", " 17 anos", " 2007")

const vagabundo = {
    name: 'Murillo',
    data: 2006,
    age: 1888
}

console.table(vagabundo)
console.log("Maria" + " tem 17 anos" + " nasceu em 2007")

var height = 1.69
let weight = 52
Number = 69
let murilloHeight = height

let capela = 10

console.log(height, weight)
console.log(Number)
console.log(murilloHeight)
console.log(capela)

let steps = 100
console.log(steps)
steps = 200
console.log(steps + 300)

let greeting = 'hello'
let counter = 100

console.log(greeting)
greeting = 1
console.log(greeting + counter)

const bronwnie = 8

let gasolina = 8
console.log(gasolina) 
{
    gasolina = 10
    console.log(gasolina)
}
gasolina += 2
console.log(gasolina)

let global = 552 
{
    let notGlobal = 569
    console.log(global)
    console.log(notGlobal)
}
// console.log(notGlobal) como está definida dentro de chaves, quando chamada fora ela dá indefinida

function consoleHello() {
    console.log("Hello")
    console.log("World")
}

consoleHello()

let x = 23
let y = 12

function soma() {
    console.log(x + y)
}

soma()

let rosaP = 8
let rosaQ = 70
let lirioP = 10 
let lirioQ = 50 
let tulipaP = 2
let tulipaQ = 120

console.log("Rosa - Preço unidade: " + rosaP + ", Quantidade: " + rosaQ)
console.log("Lirio - Preço unidade: " + lirioP + ", Quantidade: " + lirioQ)
console.log("Tulipa - Preço unidade: " + tulipaP + ", Quantidade: " + tulipaQ)

console.log("Total: " + (rosaP * rosaQ + lirioP * lirioQ + tulipaP * tulipaQ))