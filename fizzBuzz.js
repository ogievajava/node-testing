export function checkNum(numB){
    let res;
    if(numB % 5 == 0 && numB % 3 == 0){
        res = 'FizzBuzz';
        //return 'FizzBuzz';
    }
    else if (numB % 3 == 0){
        res = 'fizz';
       // return 'fizz';
    } 
    else if(numB % 5 == 0){
        res = 'Buzz';
       // return 'Buzz';
    }
    else {
        res = numB;
    }
    return res;
}