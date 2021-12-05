import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherData } from './model/weather-data.interface';
import { DrawCity } from './services/draw-city.service';
import { RefreshWeatherService } from './services/refresh-weather.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private drawCity: DrawCity, private refreshWeatherService: RefreshWeatherService) { }

  private cityIdObj: string[] = [
    '2950159',
    '7531926',
    '3337493',
    '5128638',
    '2643743'
 ];

 private drawCityArray: string[] = [];
 private countSeconds: number = 0;
 public weatherDataObject?: Observable<WeatherData[]>;

  ngOnInit(): void {
    this.drawCityArray = this.drawCity.setCity(this.cityIdObj);
    this.weatherDataApi();
    // this.startInterval();
  };

  startInterval(): void {
    setInterval(() => {
      this.countSeconds++;
      this.weatherDataApi();
    }, 10000);
  };

  weatherDataApi(): void {
    if (this.countSeconds === 6) {
      this.drawCityArray = this.drawCity.setCity(this.cityIdObj);
      this.countSeconds = 0;
    }
    this.weatherDataObject = this.refreshWeatherService.refreshWeather(this.drawCityArray).pipe(
      map((response: any) => response.map((item: any) => {
        return <WeatherData>{
          weatherIcon: item.weather[0].icon,
          description: item.weather[0].description,
          degree: item.main.temp,
          cityName: item.name,
          id: item.id
        };
      }))
    );
  };
};
