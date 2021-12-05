import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';

@Injectable({
  providedIn: 'root'
})
export class RefreshWeatherService {

  constructor(private httpClient: HttpClient) { }

  weatherApi(id: string): Observable<Object> {
    return this.httpClient.get(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=b7fd55ae9eb65b6ae897e500d292df43&units=metric`);
  }

  refreshWeather(getCity: string[]): Observable<Object[]> {
    return forkJoin(getCity.map((id: string) => this.weatherApi(id)));
  }
}
