import { Container } from 'typescript-ioc';
import { FizzBuzz } from './fizz';

const fizzBuzz: FizzBuzz = Container.get(FizzBuzz);
fizzBuzz.run();
