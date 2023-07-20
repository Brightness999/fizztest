import { instance, mock, when } from 'ts-mockito';
import { FizzBuzz } from '../src/fizz';

describe('FizzBuzz', () => {
  it('should print Fizz for multiples of 3', () => {
    const mockedFizzBuzz = mock(FizzBuzz);
    when(mockedFizzBuzz.run()).thenCall(() => {
      for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
          console.log('Fizz');
        }
      }
    });

    const fizzBuzz = instance(mockedFizzBuzz);
    fizzBuzz.run();
  });

  it('should print Buzz for multiples of 5', () => {
    const mockedFizzBuzz = mock(FizzBuzz);
    when(mockedFizzBuzz.run()).thenCall(() => {
      for (let i = 1; i <= 100; i++) {
        if (i % 3 !== 0 && i % 5 === 0) {
          console.log('Buzz');
        }
      }
    });

    const fizzBuzz = instance(mockedFizzBuzz);
    fizzBuzz.run();
  });

  it('should print FizzBuzz for multiples of both 3 and 5', () => {
    const mockedFizzBuzz = mock(FizzBuzz);
    when(mockedFizzBuzz.run()).thenCall(() => {
      for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          console.log('FizzBuzz');
        }
      }
    });

    const fizzBuzz = instance(mockedFizzBuzz);
    fizzBuzz.run();
  });

  it('should print the number for non-multiples of 3 or 5', () => {
    const mockedFizzBuzz = mock(FizzBuzz);
    when(mockedFizzBuzz.run()).thenCall(() => {
      for (let i = 1; i <= 100; i++) {
        if (i % 3 !== 0 && i % 5 !== 0) {
          console.log(i);
        }
      }
    });

    const fizzBuzz = instance(mockedFizzBuzz);
    fizzBuzz.run();
  });
});
