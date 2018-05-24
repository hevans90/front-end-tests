import {TestBed} from '@angular/core/testing';

import {FizzBuzzService} from './fizz-buzz.service';

describe('FizzBuzzService', () => {

  let service: FizzBuzzService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FizzBuzzService]
    });

    service = TestBed.get(FizzBuzzService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fizzBuzz', () => {
    it('should return Fizz if passed a number divisible by 3', () => {
      expect(service.fizzBuzz(3)).toEqual('Fizz');
      expect(service.fizzBuzz(6)).toEqual('Fizz');
      expect(service.fizzBuzz(9)).toEqual('Fizz');
      expect(service.fizzBuzz(18)).toEqual('Fizz');
    });
    it('should return Buzz if passed a number divisible by 5', () => {
      expect(service.fizzBuzz(5)).toEqual('Buzz');
      expect(service.fizzBuzz(10)).toEqual('Buzz');
      expect(service.fizzBuzz(20)).toEqual('Buzz');
      expect(service.fizzBuzz(25)).toEqual('Buzz');
    });
    it('should return FizzBuzz if passed a number divisible by 3 and 5', () => {
      expect(service.fizzBuzz(15)).toEqual('FizzBuzz');
      expect(service.fizzBuzz(30)).toEqual('FizzBuzz');
      expect(service.fizzBuzz(45)).toEqual('FizzBuzz');
      expect(service.fizzBuzz(60)).toEqual('FizzBuzz');
    });
    it('should return a number if passed a number', () => {
      expect(service.fizzBuzz(1)).toEqual(1);
      expect(service.fizzBuzz(2)).toEqual(2);
      expect(service.fizzBuzz(13)).toEqual(13);
    });
  });

  describe('run', () => {
    it('should print 100 values', () => {
      const spy = spyOn(console, 'log');
      service.run();
      expect(spy.calls.allArgs().length).toEqual(100);
    });
    it('should print the number 1 first', () => {
      const spy = spyOn(console, 'log');
      service.run();
      expect(spy.calls.allArgs()[0][0]).toEqual(1);
    });
    it('should print the word Buzz last', () => {
      const spy = spyOn(console, 'log');
      service.run();
      expect(spy.calls.allArgs()[99][0]).toEqual('Buzz');
    });
  });
});
