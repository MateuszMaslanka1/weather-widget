import { Injectable } from '@angular/core';
import { CityId } from '../model/city-id.interface';
import { DrawCity } from './draw-city.service';
import { WeatherApiService } from './weather-api.service';

@Injectable({
  providedIn: 'root'
})
export class RefreshWeatherService {

  constructor(private drawCity: DrawCity, weatherApiService: WeatherApiService) { }

  private cityIdObj: CityId = {
    Berlin: '2950159',
    Warszawa: '7531926',
    Lodz: '3337493',
    NewYork: '5128638',
    London: '2643743'
  };

  refreshWeather() {
    // console.log(this.drawCity.getCity());
    setInterval(() => {
      console.log(this.drawCity.setCity(this.cityIdObj));
    }, 60000);
  }
}
