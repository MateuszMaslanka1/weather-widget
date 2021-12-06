import { TestBed } from '@angular/core/testing';

import { CitiesGeneratingService } from './cities-generating.service';

describe('WeatherApiService', () => {
  let service: CitiesGeneratingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitiesGeneratingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
