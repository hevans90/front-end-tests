import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {

  public run() {
    for (let i = 1; i <= 100; i++) {
      console.log(this.fizzBuzz(i));
    }
  }

  public fizzBuzz(number: number): number | string {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'FizzBuzz';
    }
    if (number % 3 === 0) {
      return 'Fizz';
    }
    if (number % 5 === 0) {
      return 'Buzz';
    }
    return number;
  }
}
