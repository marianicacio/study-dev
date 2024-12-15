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

// Objeto
let obj = {
    nr: 600,
    str: "text"
}

console.log(obj)
console.table(obj)
console.table(obj.nr)
console.table(obj.str)

let person1 = {
    name: "Murillo",
    lastName: "Fernandes",
    age: 1888
}

console.table(person1)
console.log(person1.age)

delete person1.lastName

console.table(person1)

// Array
let mercado = ["Nescau", "Morango", "Laranja", "Maça"]
console.log(mercado[0])
console.log(mercado[4])
console.table(mercado)

mercado[0] = "Toddy" 

console.table(mercado)

let pessoas = []
console.table(pessoas)

pessoas[0] = "Darlyson"
pessoas[1] = "Cabritinha"
pessoas[3] = "Yasmin"

console.table(pessoas)

console.log(pessoas.indexOf("Yasmin"))

pessoas.push("Nicolly")

console.table(pessoas)

let name = pessoas.pop()
console.table(pessoas)

let names = pessoas.shift()
console.table(pessoas) 

pessoas.reverse()
console.table(pessoas)

let allArrays  = pessoas.concat(mercado)

console.table(allArrays)

//Exercicio 1
let ticket = { 
    from: "São Paulo",
    to: "São Bernardo",
    price: 25
}

console.log(`Ticket from: ${ticket.from}`)
console.log(`Ticket to: ${ticket.to}`)
console.log(`Ticket price: ${ticket.price}`)

//Exercicio 2
let nomes = {

}

nomes.name = "Darlyson"
nomes.lastName = "Robson"

console.log(nomes)

//Exercicio 3
let book = [{
    titulo: "Falado JavaScript",
    autor: "Axel Raushmayer",
    paginas: 460
},
{
    titulo: "Programação de aplicações Javascript",
    autor: "Eric Elliott",
    paginas: 254
},
{
    titulo: "Compreendendo ECMAScript 6",
    autor: "Nicholas C. Zakas",
    paginas: 352
}]

console.table(book)

//Exercicio 4

let newBook = {
    titulo:"Learning JavaScript Design Patterns",
    autor: "Addy Osmani",
    paginas: 254
}

book.push(newBook)
console.table(book)

//Exercicio 5
let selectedBooks = book.slice(-2)
console.table(selectedBooks)
console.table(book)

//Exercicio 6 
book.shift()
console.log(book.length)
console.log(book[0].titulo)
console.log(book[1].titulo)
console.log(book[2].titulo)
console.table(book)

//Exercicio 7 
let somaPag = book[0].paginas + book[1].paginas + book[2].paginas
console.log(`Paginas: ${somaPag}`)

let n1 = 10
let n2 = 10

console.log(n1)
console.log(n1 ++)
console.log(n1)

console.log(n2)
console.log(++n2)
console.log(n2)

let n3 = 20
let n4 = 20

console.log(n3)
console.log(n3--)
console.log(n3)

console.log(n4)
console.log(--n4)
console.log(n4)

let c = 10
c += 2 
console.log(c) 
c -= 4
console.log(c)
c *= 3
console.log(c)
c /= 6
console.log(c)
c **= 3
console.log(c)
c %= 10 
console.log(c)

console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

console.log(!true)
console.log(!false)

let numN = 0
let yearY = 1970
let nameN = "ALice"
let empty = ""

console.log(!numN)
console.log(!yearY)
console.log(!nameN)
console.log(!empty)
console.log(!!numN)
console.log(!!nameN)

let d = true
console.log(d)
d &&= false
console.log(d)

let e = false
console.log(e)
e ||= true
console.log(e)

//Exercicio 1
console.log(2*3+1)
console.log(2**4)
console.log(5*1)
console.log(8 ** 2 - 5 ** 2)

//Exercicio 2
console.log(4 * 5 === 20)
console.log(6 * 5 === 30)
console.log(-17 != 0) // -17 < 0
console.log(25 != 1) // 25 > 1
console.log(2 + 2 * 2 != 4)

//Exercico 3 
console.log(true || false)
console.log(false === false) // || !
console.log(false || false || true)
console.log(true || false && false && true)

let frase = "Happy New Year "
let novaFrase = frase + 2025
console.log(novaFrase)

frase = "Happy New "
frase += "Year "
frase += 2026
console.log(frase)

console.log(10 === 5)
console.log(10 === 10)
console.log(10 === "10")
console.log("10" === "10")
console.log("Alice" === "Bob")
console.log("Bob" === "Bob")

console.log(10 == 5)
console.log(10 == 10)
console.log(10 == "10")
console.log("10" == "10")
console.log("Alice" == "Bob")
console.log("Bob" == "Bob")

console.log(10 !== 5)
console.log(10 !== 10)
console.log(10 !== "10")
console.log("10" !== "10")
console.log("Alice" !== "Bob")
console.log("Bob" !== "Bob")

console.log(10 > 100)
console.log(101 > 100)
console.log(101 > "100")

console.log(mercado instanceof Array)
console.log(d instanceof Array)

console.log(true ? "Alice" : "Bob")
console.log(false ? "Alice" : "Bob")

alert("Hello, World")
window.alert("Hello, World! For the second time")
alert(4 * 7)
alert(true)
alert("text 1", "text 2")

let decision = window.confirm("Está tudo bem?")
console.log(decision)

let remove = confirm("Remove all data?")
let message = remove ? "Deleting Data" : "Cancelled"
console.log(message)

let nome = window.prompt("What is your name?", "John Doe")
nome = nome ? nome : "anonymous"
let idade = prompt("Hello " + nome + " how old are you?")
alert(nome + " is " + idade + " years old")