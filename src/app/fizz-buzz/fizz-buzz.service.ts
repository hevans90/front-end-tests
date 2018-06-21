import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {

  constructor() { }

  public fizzBuzz(number: number) {
    return number;
  }

  public run() {
    for (let i = 1; i <= 100; i++) {
      console.log(this.fizzBuzz(i));
    }
  }
}
