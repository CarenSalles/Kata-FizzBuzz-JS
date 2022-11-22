import { Fizzbuzz } from "../src/scripts/FizzBuzz";

describe('FizzBuzz', () => {
    test('should return Fizz if divisible by three', ()  => {
      //Given
      let numb = 3;
      //when
      const result = Fizzbuzz(numb);
      //Then
      expect(result).toBe("Fizz");
    });
    test('should return Buzz if divisible by five', () => {
        //Given
        let numb = 5;
        //when
        const result = Fizzbuzz(numb);
        //Then
        expect(result).toBe("Buzz");
      });
    test('should return Fizz if divisible by three and five', () => {
        //Given
        letnumb = 15;
        //when
        const result = 

    });
});
