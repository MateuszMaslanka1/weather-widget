import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { openWeatherMapApi } from 'src/environments/environment';
import { OpenWeatherMapData } from '../models/open-weather-map-data.interface';

@Injectable({
  providedIn: 'root'
})
export class RefreshWeatherService {

  constructor(private httpClient: HttpClient) { }

  weatherApi(id: string): Observable<OpenWeatherMapData> {
    return this.httpClient.get<OpenWeatherMapData>(openWeatherMapApi.url, {
      params: {
        id: id,
        appid: openWeatherMapApi.key,
        units: openWeatherMapApi.appUnits
      },
    });
  }

  refreshWeather(getCity: string[]): Observable<OpenWeatherMapData[]> {
    return forkJoin(getCity.map((id: string): Observable<OpenWeatherMapData> => this.weatherApi(id)));
  }
}
