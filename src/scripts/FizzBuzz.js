export function fizzBuzz(number) 
{
    if (number % 3 == 0 && number % 5 == 0) {
        return "FizzBuzz";
    }
    if(number % 3 == 0){
        return "Fizz";
    }
    if(number % 5 == 0){
        return "Buzz";
    }
}

export function fizzBuzz2(number){
    if((number % 3 == 0 || number.toString().indexOf("3") >= 0) && (number % 5 == 0 || number.toString().indexOf("5") >= 0)) {
        return "FizzBuzz";
    }

if(number % 3 == 0 || number.toString().indexOf("3") >= 0) {
    return "Fizz";
    }

if(number % 5 == 0 || number.toString().indexOf("5") >= 0) {
    return "Buzz";
    }

}
