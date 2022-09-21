/**
 * return the sum of 2 numbers
 * create a function that takes 2 arguments as functions and returns their sum
 */

function addition(num1, num2) {
    return num1 + num2
    // use return if you want to use the value
}

console.log(addition(3, 5))
console.log(addition(-3, -6))
console.log(addition(7, 3))

/**
 * convert hours into seconds
 * create a function that converts hours into seconds
 */

function hoursIntoSeconds(hours) {
    return hours * 60 * 60
    // let minutes = hour * 60
    // let seconds = minutes * 60
    // return seconds
}

console.log(hoursIntoSeconds(2))
console.log(hoursIntoSeconds(10))
console.log(hoursIntoSeconds(24))

/**
 * calculate the perimeter of a rectangle
 * create a function that takes the length and width of a rectangle and return its perimeter
 */

function calcPerimeter(length, width) {
    return (length + width) * 2
}

console.log(calcPerimeter(6, 7))
console.log(calcPerimeter(20, 10))
console.log(calcPerimeter(2, 9))

/**
 * calculate the area of a triangle
 * write a function that takes the base and height of a triangle and return its area
 */

function calcTriangleArea(base, height) {
    return 0.5 * base * height
}

console.log(calcTriangleArea(3, 2))
console.log(calcTriangleArea(10, 10))
console.log(calcTriangleArea(20, 20))

/**
 * extend a string
 * write a function that accepts a string and adds "Frontend" onto the end of it
 */

function appendFrontend(str) {
    return str + "Frontend"
}

console.log(appendFrontend("Apple"))
console.log(appendFrontend("Banana"))
console.log(appendFrontend("Orange"))

// function appendFrontend(number) {
//      return 4 + (+number)
// }
// console.log(appendFrontend(1))

/**
 * greater than 100?
 * given 2 numbers, return true if the sum of both numbers is greater than 100
 * otherwise, return false
 */

function sumGreaterThan100(num1, num2) {
    if (num1 + num2 > 100) {
        return true
    }
    else {
        return false
    }
}

// function sumGreaterThan100(num1, num2) {
//   if (num1 + num2 > 100) {
//      return true
//   }
//   return false
// }

// function sumGreaterThan100(num1, num2) {
//   return num1 + num2 > 100
// }

console.log(sumGreaterThan100(20, 10))
console.log(sumGreaterThan100(50, 60))
console.log(sumGreaterThan100(100, -50))

/**
 * less than or equal to 0?
 * write a function that accepts a number 
 * and returns true if it is less than or equal to 0,
 * otherwise returns false
 */

function lessThanOrEqualToZero(num) {
    return num <= 0
}

console.log(lessThanOrEqualToZero(3))
console.log(lessThanOrEqualToZero(0))
console.log(lessThanOrEqualToZero(-2))

/**
 * opposite boolean
 * given a boolean (true or false),
 * return the opposite boolean
 */

function oppositeBoolean(boolean) {
    return boolean = !boolean
}

// function oppositeBoolean(bool) {
    // if (bool === false) {
        // return true
    // }
    // return false
// }

// function oppositeBoolean(bool) {
    // return !bool
// }

console.log(oppositeBoolean(true))
console.log(oppositeBoolean(false))

/**
 * is not the number 0
 * given ANY element, return true if it is NOT the number 0
 */

function isNotZero(element) {
    return element !== 0
}

console.log(isNotZero(5))
console.log(isNotZero(0))
console.log(isNotZero(null))

/**
 * calculate the remainder
 * given 2 numbers, return their remainder when divided by each other
 */

function calcRemainder(num1, num2) {
    return num1 % num2
}

console.log(calcRemainder(4, 2))
console.log(calcRemainder(7, 8))
console.log(calcRemainder(9, 8))

/**
 * is the number odd?
 * given 2 numbers, return true if the number is odd
 */

function isOdd(num) {
    return num % 2 !== 0
}

console.log(isOdd(1))
console.log(isOdd(2))
console.log(isOdd(3))

/**
 * if a number is even, return 1 otherwise return -1
 * create a function that takes a number argument
 * and returns 1 if the number is even
 * if the number is odd return -1
 */

function booleanInteger(num) {
    if (num % 2 === 0) {
        return 1
    }
    return -1
}

// function booleanInteger(num) {
    // return num % 2 === 0 ? 1 : -1
// }

console.log(booleanInteger(1))
console.log(booleanInteger(2))
console.log(booleanInteger(5))

/**
 * check if a user is logged in AND subscribed
 * create a function that takes in 2 strings
 * if 1st string is equal to 'LOGGED_IN' AND 
 * 2nd string is equal to 'SUBSCRIBED' return true,
 * otherwise return false
 */

function isLoggedInAndSubscribed(str1, str2) {
    return str1 === 'LOGGED_IN' && str2 === 'SUBSCRIBED' ? true : false
}

// function isLoggedInAndSubscribed(loggedIn, subscribed) {
    // return (loggedIn === 'LOGGED_IN') && (subscribed === 'SUBSCRIBED')
// }

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))
console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'))
console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'))

/**
 * check if a user is logged in OR subscribed
 * create a function that takes in 2 strings
 * if 1st string is equal to 'LOGGED_IN' OR 
 * 2nd string is equal to 'SUBSCRIBED' return true,
 * otherwise return false
 */

function isLoggedInOrSubscribed(str1, str2) {
    return (str1 === 'LOGGED_IN') || (str2 === 'SUBSCRIBED')
}

 console.log(isLoggedInOrSubscribed('LOGGED_IN', 'SUBSCRIBED'))
 console.log(isLoggedInOrSubscribed('LOGGED_IN', 'UNSUBSCRIBED'))
 console.log(isLoggedInOrSubscribed('LOGGED_OUT', 'SUBSCRIBED'))