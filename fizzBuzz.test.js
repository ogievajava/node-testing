import {checkNum} from './fizzBuzz.js'
// 1. Write a function that takes in a number and returns one of the following:

//     - If the number is divisible by 3, return "Fizz".
//     - If the number is divisible by 5, return "Buzz".
//     - If the number is divisible by both 3 and 5, return "FizzBuzz".
//     - Otherwise, just return the number that was passed into the function.

test('If the number is divisible by 3, return "Fizz"', function(){
    expect (checkNum(9)).toBe('fizz')
})
test('If the number is divisible by 3, return "Fizz"', function(){
    expect (checkNum(12)).toBe('fizz')
})
test('If the number is divisible by 5, return "Buzz"', function(){
    expect (checkNum(20)).toBe('Buzz')
})
test('If the number is divisible by both 3 and 5, return "FizzBuzz"', function(){
    expect (checkNum(30)).toBe('FizzBuzz')
})
test('If the number is not divisible by both 3 and 5, return "the number"', function(){
    expect (checkNum(19)).toBe(19);
})