import { Inject } from 'typescript-ioc';

@Inject
export class FizzBuzz {
  public run(): void {
    for (let i = 1; i <= 100; i++) {
      let result = '';
      if (i % 3 === 0) {
        result += 'Fizz';
      } 
      if (i % 5 === 0) {
        result += 'Buzz';
      }
      console.log(result ? result : i);
    }
  }
}
