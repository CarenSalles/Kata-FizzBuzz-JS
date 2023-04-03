import { fizzBuzz, fizzBuzz2} from "../src/scripts/FizzBuzz";

describe('FizzBuzz', () => {
    test('should return Fizz if is divisible by three', ()  => {
      //Given
      let number = 3;
      //when
      const result = fizzBuzz(number);
      //Then
      expect(result).toBe("Fizz");
    });

    test('should return Buzz if is divisible by five', () => {
        //Given
        let number = 5;
        //when
        const result = fizzBuzz(number);
        //Then
        expect(result).toBe("Buzz");
      });

    test('should return FizzBuzz if is divisible by three and five', () => {
        //Given
        let number = 15;
        //when
        const result = fizzBuzz(number);
        //Then
        expect(result).toBe("FizzBuzz");
    });

    test('should return Fizz if is divisible by three or has a three in it', () => {
      //Given
      let number = 32;
      //when
      const result = fizzBuzz2(number);
      //Then
      expect(result).toBe("Fizz");
    });

    test('should return Buzz if is divisible by five or has a five in it', () => {
      let number = 52;

      const result = fizzBuzz2(number);
      
      expect(result).toBe("Buzz");
    });

    test('should return FizzBuzz if is divisible by five or has a five in it AND if is divisible by three or has a three in it', () => {
      let number = 53;

      const result = fizzBuzz2(number);

      expect(result).toBe("FizzBuzz");
    });

});
