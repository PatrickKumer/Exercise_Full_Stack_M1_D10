const printTitle = function(nameOfTitle){
    console.log(`\n${nameOfTitle}`)
}




printTitle("21")

let x = "John"
let y = "Doe"
let z = "<>"

console.log(x + z + y)

printTitle("22")

let personal = {
    name: "Mark",
    lastName: "Robertson",
    email: "mark.robertson123@gmail.com"
}

console.log(personal)

printTitle("23")

delete personal.email

console.log(personal)

printTitle("24")

let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",]

printTitle("25")

console.log(arr)

printTitle("26")

const random = function(){
    let randomNumber = Math.floor(Math.random() * 100)
    return randomNumber
}
let array = [random()]

console.log(array)

printTitle("31 ")

let getCountry = document.getElementById('countries')

printTitle("32")

let getTd = document.getElementsByTagName('td')

printTitle("33")

const writeText = function(){
    let loop = document.getElementsByTagName('td')
    
}
