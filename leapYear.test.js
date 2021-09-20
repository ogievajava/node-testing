import {calculateYear} from './leapYear.js'
// 2. Write a function that takes in a year and returns a boolean indicating if the year is a leap year. Years that are divisible by 4 are leap years, but years that are divisible by 100 are not leap years, but years that are divisible by 400 are leap years.

test('if year is divisible by 400 = "true"', function(){
    expect (calculateYear(800)).toBe(true);
})
test('if year is divisible by 100 and not by 400  = "false"', function(){
    expect (calculateYear(500)).toBe(false);
})
test('if year is divisible by 4  = "true"', function(){
    expect (calculateYear(264)).toBe(true);
})



