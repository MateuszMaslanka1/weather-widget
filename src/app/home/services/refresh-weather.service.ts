import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { environment } from 'src/environments/environment';
import { FullWeatherData } from '../model/full-weather-data.interface';

@Injectable({
  providedIn: 'root'
})
export class RefreshWeatherService {

  constructor(private httpClient: HttpClient) { }

  weatherApi(id: string): Observable<FullWeatherData> {
    return this.httpClient.get<FullWeatherData>(environment.API_URL, {
      params: {
        id: id,
        appid: environment.appid,
        units: environment.units
      },
    });
  }

  refreshWeather(getCity: string[]): Observable<FullWeatherData[]> {
    return forkJoin(getCity.map((id: string) => this.weatherApi(id)));
  }
}
