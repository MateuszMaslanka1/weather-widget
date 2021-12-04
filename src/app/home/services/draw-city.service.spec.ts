import { TestBed } from '@angular/core/testing';

import { DrawCity } from './draw-city.service';

describe('WeatherApiService', () => {
  let service: DrawCity;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrawCity);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
