console.log("====== Question 1 ======")

function addiotion(x, y) {
    return x + y
}
console.log(addiotion(3, 2))
console.log(addiotion(-3, -6))
console.log(addiotion(7, 3))

console.log("====== Question 2 ======")

function convert(min) {
    return min * 60
}
console.log(convert(5));
console.log(convert(3));
console.log(convert(2));

console.log("====== Question 3 ======")

function findPerimeter(width, length) {
    width = width * 2
    length = length * 2
    return width + length
}
console.log(findPerimeter(6, 7))
console.log(findPerimeter(20, 10))
console.log(findPerimeter(2, 9))

console.log("====== Question 4 ======")

function checkDivide(a, b) {
    if (a % b === 0) {
        return "true"
    } else {
        return "false"
    }
}
console.log(checkDivide(5, 1))
console.log(checkDivide(6, 3))
console.log(checkDivide(10, 3))

console.log("====== Question 5 ======")

function calAge(age) {
    return age * 365
}

console.log(calAge(65))
console.log(calAge(0))
console.log(calAge(20))

console.log("====== Question 6 ======")

function footballPoints(wins, draws, losses) {
    wins = wins * 3
    draws = draws * 1
    losses = 0
    return wins + draws + losses
}

console.log(footballPoints(3, 4, 2))
console.log(footballPoints(5, 0, 2))
console.log(footballPoints(0, 0, 1))