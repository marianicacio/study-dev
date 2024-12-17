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

let allArrays = pessoas.concat(mercado)

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
    titulo: "Learning JavaScript Design Patterns",
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
console.log(n1++)
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
console.log(2 * 3 + 1)
console.log(2 ** 4)
console.log(5 * 1)
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

// alert("Hello, World")
// window.alert("Hello, World! For the second time")
// alert(4 * 7)
// alert(true)
// alert("text 1", "text 2")

// let decision = window.confirm("Está tudo bem?")
// console.log(decision)

// let remove = confirm("Remove all data?")
// let message = remove ? "Deleting Data" : "Cancelled"
// console.log(message)

// let nome = window.prompt("What is your name?", "John Doe")
// nome = nome ? nome : "anonymous"
// let idade = prompt("Hello " + nome + " how old are you?")
// alert(nome + " is " + idade + " years old")

// //Exercico 1
// let L = window.prompt("Qual é a largura da caixa?", "0")
// let A =  window.prompt("Qual é a altura da caixa?", "0")
// let C =  window.prompt("Qual é a comprimento da caixa?", "0")
// let V = L * A * C
// alert(`O volume é ${V}`)

let num1 = 2 * 3 ** 3 - 1
console.log(num1)

let num2 = 2
num2 **= 3
console.log(num2)

let ss = "12"
ss = +s
console.log(ss)

let f = 10
let m = ++f
console.log(m)
console.log(f)

console.log(true && false || true)
console.log(20 || 5)
console.log(false || "false")

let nn = "1"
let g = (nn === 1)
let h = (nn == 1)
let i = (nn = 1)

console.log(g)
console.log(h)
console.log(i)

console.log(3 * 4 > 20 - 15)

// let isUserReady = confirm("Are you ready?")
// console.log(isUserReady)
// if(isUserReady){
//     alert("User ready!")
// } else {
//     alert("User not ready!")
// }

// let unitPrice = 10
// let pieces = prompt("How many pieces do you order?", 0)
// if (pieces > 0) {
//     let total = unitPrice * pieces
//     alert(`The price is: ${total}`)
// }

// let number = prompt("Enter a number", 0)
// if (number < 10) {
//     alert("<10")
// } else if (number < 30) {
//     alert("<30")
// } else if (number < 60) {
//     alert("<60")
// } else if (number < 90) {
//     alert("<90")
// } else if (number < 100) {
//     alert("<100")
// } else if (number === 100) {
//     alert("100")
// } else {
//     alert(">100")
// }

let price2 = 80
let shippingCost
if (price2 > 50) {
    shippingCost = 0
} else {
    shippingCost = 5
}

// console.log(`price = ${price2}, shipping = ${shippingCost}`)

// let price3 = 100
// let shipping = price3 > 50 ? 0 : 5
// console.log(`price = ${price3}, shipping = ${shipping}`)

// let start = confirm("Start?")
// start ? alert("Here we go!") : console.log("Aborted")

// let gate = prompt("Choose gate: a,b, or c")
// let win = false
// switch (gate) {
//     case "a":
//         alert("Gate A: empty")
//         break
//     case "b":
//         alert("Gate B: main prize")
//         break
//     case "c":
//         alert("Gate C: empty")
//         break
//         default:
//         alert("No gate " + String(gate))
// }
// if (win) {
//     alert("Winner!")
// }

// let numB = prompt("Escolha um numero: ")
// if (numB > 90 && numB < 110) {
//     alert("Bingo")
// } else {
//     alert("Perdeu")
// }

// let numC = (numB > 90 && numB < 110) ? "Bingo" : "Perdeu" 
// alert(numC)

let nW = 0
while (nW < 999) {
    console.log(nW)
    nW += 10
}

// let isOver = false 
// let counter1 = 1
// while(isOver != true) {
//     let continueLoop = confirm(`[${counter1}] Continue the loop?`)
//     isOver = continueLoop === true ? false : true
//     counter1++
// } 

// let over 
// counter1 = 1
// do {
//     over = !confirm(`[${counter1++}] Continue the loop?`)
// } while (!over)

for (let i = 0; i < 10; i++) {
    console.log(i)
}

i = 0
while (i < 10) {
    console.log(i)
    i++
}

let values = [10, 30, 50, 100]
let sum = 0
for (let i = 0; i < values.length; i++) { // values.length para se caso a array aumentar
    sum += values[i]
}
console.log(sum)

// let nomes1 = []
// let ov = false
// while (!ov) {
//     let nome = prompt("Enter another name or press cancel.")
//     if (nome != null) {
//         nomes1.push(nome)
//     } else {
//         ov = true
//     }
// }
// for (let i = 0; i < nomes1.length; i++) {
//     console.log(nomes1[i])
// }

let usuario = {
    name: "Maria",
    lastName: "Nicacio",
    age: 22,
    email: "mariaeduarda.nicacio2007@gmail.com"
}
for (let key in usuario) {
    console.log(`${key} -> ${usuario[key]}`)
}

i = 0

// while (true) {
//     console.log(i)
//     i++
//     if(i >= 5) {
//         break
//     }
// }
// alert(`Exitedd the loop with a break (${i})`)

for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue
    }
    console.log(i)
}

let n5 = 100
while (n5 >= 0) {
    console.log(n5)
    n5 -= 10
}

// let nU = prompt("Escolha o primeiro numero")
// let nU2 = prompt("Escolha o segundo numero")
// while(nU >= nU2) {
//     console.log(nU)
//     nU -= 10
// }

let numeros = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22]

for (i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}
for (i = 0; i < numeros.length; i++) {
    if ((numeros[i] % 2) == 0) {
        console.log(numeros[i])
    }
}
for (i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10 && numeros[i] < 60) {
        console.log(numeros[i])
    }
}

let navio = {
    latitude: 40.07288,
    longitude: 154.48535,
    curso: 285.6,
    velocidade: 14.0,
    imo: 9175717,
    nome: "Mareno"
}

for (let key in navio) {
    console.log(`${key} -> ${navio[key]}`)
}

let temp
let soma1
let meanTemp
function getMeanTemp() {
    soma1 = 0
    for (let i = 0; i < temp.length; i++) {
        soma1 += temp[i]
    }
    meanTemp = soma1 / temp.length
}
temp = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
getMeanTemp()
console.log(`mean: ${meanTemp}`)
temp = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
getMeanTemp();
console.log(`mean: ${meanTemp}`)

let nameF = "Alice"
function showName() {
    console.log(nameF)
}
showName()

function showMsg() {
    console.log("message 1")
    return
    console.log("message 2")
}
showMsg()

function getTrue() {
    return true
}

let tr = getTrue()
console.log(tr)

function getElement(elements, index) {
    return elements[index]
}

let nM = ["Alice", "Bob", "Eve", "John"]
let nm = getElement(nM, 2)
console.log(nm)
nM.forEach(showName)

function add(first, second) {
    return first + second
}

let first = 10, second = 20, third = 40, fourth = 80
console.log(add(first, second))
console.log(add(second, third))
console.log(add(third, fourth))

let j = 100, k = 200, l = 300
function t(j) {
    let k = 10
    console.log(j)
    console.log(k)
    console.log(l)
}
t(1)

console.log(j)
console.log(k)
console.log(l)

function getMeanTemp(temp) {
    if (!(temp instanceof Array)) {
        return NaN
    }
    let sum = 0
    for (let i = 0; i < temp.length; i++) {
        sum += temp[i]
    }
    return sum / temp.length
}

console.log(getMeanTemp(10))
console.log(getMeanTemp([10, 30]))

function factorial(n) {
    let result = 1
    while (n > 1) {
        result *= n
        n--
    }
    return result
}
console.log(factorial(6))

function factorial(n) {
    return n > 1 ? n * factorial(n - 1) : 1
}
console.log(factorial(6))

function showMessage(message) {
    console.log(`Message: ${message}`)
}
let sm = showMessage

sm("This works!")
console.log(typeof sm)

function add(a, b) {
    return a + b
}

function multiply(a, b) {
    return a * b
}

function operation(func, first, second) {
    return func(first, second)
}

console.log(operation(add, 10, 20))
console.log(operation(multiply, 10, 20))

let myAdd = function add(a, b) {
    return a + b
}
console.log(myAdd(10, 20))
console.log(add(10, 20))

console.log(operation(function (a, b) {
    return a + b
}, 10, 20))

let inner = function () {
    console.log('inner 1')
}
let outer = function (callback) {
    console.log('outer 1')
    callback()
    console.log('outer 2')
}
console.log('test 1')
outer(inner)
console.log('test 2')

let inner2 = function () {
    console.log('inner 1')
}
let outer2 = function (callback) {
    console.log('outer 1')
    setTimeout(callback, 1000) // atraso de 1000 milissegundos
    console.log('outer 2')
}
console.log('test 1')
outer(inner)
console.log('test 2')

let inner3 = function () {
    console.log('inner 1')
}
let outer3 = function (callback) {
    console.log('outer 1')
    let timeId = setInterval(callback, 1000)
    console.log('outer 2')
    setTimeout(function () {
        clearInterval(timeId)
    }, 5500)
}
console.log('test 1')
outer3(inner3)
console.log('test 2')

//contador de cliques
// window.addEventListener("click", function () {
//     console.log("clicked!")
// })

let add2 = (a,b) => {
    return a + b
}
console.log(add(10, 20))

let add3 = (a,b) => a + b
console.log(add(10, 20))

//Exercicio 1
// let numB = prompt("Digite um número: ")
// if(numB > 90 && numB < 110) {
//     alert("Bingo")
// } else {
//     alert("Errou")
// }

//Exercicio 2
// function add (a,b) {
//     if(!Number.isInteger(a) || !Number.isInteger(b)) {
//         return NaN
//     }
//     return a + b
// } 
// function sub (a,b) {
//     if(!Number.isInteger(a) || !Number.isInteger(b)) {
//         return NaN
//     }
//     return a - b
// } 
// function mult (a,b) {
//     if(!Number.isInteger(a) || !Number.isInteger(b)) {
//         return NaN
//     }
//     return a * b
// } 

// console.log(add(12, 10))
// console.log(mult(12, 10))

try {
    let a = b
} catch (error) {
    console.log("Caught " + error)
}
console.log("We handled the exception!")