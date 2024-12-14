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

const rosaPTwo = 8
let rosaQTwo = 70
const lirioPTwo = 10 
let lirioQTwo = 50 
const tulipaPTwo = 2
let tulipaQTwo = 120

rosaQTwo -= 20 
tulipaQTwo -= 30


console.log("Rosa - Preço unidade: " + rosaPTwo + ", Quantidade: " + rosaQTwo)
console.log("Lirio - Preço unidade: " + lirioPTwo + ", Quantidade: " + lirioQTwo)
console.log("Tulipa - Preço unidade: " + tulipaPTwo + ", Quantidade: " + tulipaQTwo)

console.log("Total: " + (rosaPTwo * rosaQTwo + lirioPTwo * lirioQTwo + tulipaPTwo * tulipaQTwo))

let personOne = ["Name: Maxwell Wright", "Telefone: (0191) 719 6495", "Email: Curabitur.egestas.nunc@nunummyac.co.uk"]
let personTwo = ["Name: Raja Villareal", "Telefone: 0866 398 2895", "Email: posuere.vulputate@sed.com"]
let personThree = ["Name: Helena Richards", "Telefone: 0800 1111", "Email: libero@convallies.edu"]

console.log(personOne)
console.log(personTwo)
console.log(personThree)

let year = 2006
console.log(year)
console.log(2007)
console.log("Murillo")

let cpfValid = false
let nomeValid = true
let telValid = false
nomeValid = false

console.log(cpfValid)
console.log(nomeValid)
console.log(telValid)
console.log(typeof telValid)
console.log(typeof year)

let delay = 0.00016
let area = (16 * 3.14)
let halfArea = area / 2

console.log(area)
console.log(halfArea)

let a = 1 / 0
let b = -Infinity

console.log(a)
console.log(b)
console.log(typeof a)
console.log(typeof b)

let s = "não é um numero"
let n = s * 10
console.log(n)
console.log(typeof n)

let big = 1n

console.log(typeof big)

let teste = '100' - '10'
console.log(teste)
console.log(typeof teste)
teste = '100' * '10'
console.log(teste)
teste = '100' / '10'
console.log(teste)
teste = '100' + '10'
console.log(teste)

let country = "Malawi"
let continent = "Africa"

let sentence = `${country} está localizada na ${continent}`
console.log(sentence)

console.time()
console.log("Teste")
console.timeEnd()

let river = "Tiete"
let character = river.charAt(2)
console.log(character)

let str = "Vai se fuder Murillo"

console.log(str.length)
console.log(str.charAt(0))
console.log('abc'.charAt(1))
console.log(str.slice(0, 3))
console.log(str.split(' '))

let nulo = null
console.log(nulo)
console.log(typeof nulo)

const string = String()
const bool = Boolean()

console.log(string)
console.log(bool)

const big1 = BigInt(42)
console.log(big1)

const num = 42

const strFromNum1 = String(num)
const strFromNum2 = String(8)
const strFromBool = String(true)
const boolFromNumber = Boolean(0)

console.log(strFromNum1)
console.log(strFromNum2)
console.log(strFromBool)
console.log(boolFromNumber)

let st = "text"
let stStr = String(st)
console.log(`${typeof st} : ${st}`)
console.log(`${typeof stStr} : ${stStr}`)

let nr = 42
let strNr = String(nr)
console.log(`${typeof nr} : ${nr}`)
console.log(`${typeof strNr} : ${strNr}`)

let bl = true 
let strBl = String(bl)
console.log(`${typeof bl} : ${bl}`)
console.log(`${typeof strBl} : ${strBl}`)

let bnr = 123n
let strBnr = String(bnr)
console.log(`${typeof bnr} : ${bnr}`)
console.log(`${typeof strBnr} : ${strBnr}`)

console.log(Boolean(true))
console.log(Boolean(42))
console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean("text"))
console.log(Boolean(""))