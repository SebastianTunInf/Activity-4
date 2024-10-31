//exercise 1
let age = prompt('What is your age?')
switch(true) {
    case age >= 18:
        console.log('Youre old enough to drive')
        break
    case age == 17:
        console.log('You need to wait 1 year to drive')
        break
    case age < 17, age >= 0:
        console.log('You need to wait ' + (18 - age) + ' years to drive')
        break
    case age < 0:
        console.log('Invalid age')
        break
    default:
        console.log('Invalid input')
        break
}

//exercise 2
let myAge = 19
if (age > 20) {
    console.log ('Youre ' + (age - myAge) + ' years older than me')
} else if (age == 20) {
    console.log ('Youre 1 year older than me')
} else if (age == myAge) {
    console.log ('Youre as old as me')
} else if (age == 18) {
    console.log ('Im 1 year older than you')
} else if (age < 18, age >= 0)
    {
    console.log('Im ' + (myAge - age) + ' years older than you')
} else if (age < 0) {
    console.log ('Invalid age')
} else {
    console.log ('Invalid input')
}

//exercise 3
let a = Math.round(Math.random() * 10)
let b = Math.round(Math.random() * 10)
if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else if (a == b) {
    console.log(`${a} is the same as ${b}`)
} else {
    console.log(`${a} is lesser than ${b}`)
}

a > b
    ? console.log(`${a} is greater than ${b}`)
    : console.log(`${a} is lesser or the same as ${b}`)

//exercise 4
let season = prompt('What month is it?')
season = season.toLowerCase()
switch(true) {
    case season == 'september' || season == 'october' || season == 'november':
        console.log('The season is Autumn')
        break
    case season == 'december'|| season == 'january'|| season == 'february':
        console.log('The season is Winter')
        break
    case season == 'march' || season == 'april' || season == 'may':
        console.log('The season is Spring')
        break
    case season == 'june' || season == 'july' || season == 'august':
        console.log('The season is Summer')
        break
    default:
        console.log('Invalid input')
        break
}

//exercise 5
let grade = prompt('How much is the score?')
switch(true) {
    case grade <= 100, grade >= 80:
        console.log('A')
        break
    case grade <= 79, grade >= 70:
        console.log('B')
        break
    case grade <= 69, grade >= 60:
        console.log('C')
        break
    case grade <= 59, grade >= 50:
         console.log('D')
         break
    case grade <= 49, grade >= 0:
         console.log('F')
        break
    case grade < 0:
        console.log('Invalid grade')
        break
    default:
        console.log('Invalid input')
        break
}