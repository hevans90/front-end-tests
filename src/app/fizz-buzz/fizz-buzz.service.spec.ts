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
});
