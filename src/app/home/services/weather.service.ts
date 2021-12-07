import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { openWeatherMapApi } from 'src/environments/environment';
import { OpenWeatherMapData } from '../models/open-weather-map-data.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeathersForCities(getChosenCities: string[]): Observable<OpenWeatherMapData[]> {
    return forkJoin(getChosenCities.map((cityId: string): Observable<OpenWeatherMapData> => this.getOpenWeatherMapData(cityId)));
  }

  private getOpenWeatherMapData(cityId: string): Observable<OpenWeatherMapData> {
    return this.httpClient.get<OpenWeatherMapData>(openWeatherMapApi.url, {
      params: {
        id: cityId,
        appid: openWeatherMapApi.key,
        units: openWeatherMapApi.appUnits
      },
    }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error(`Backend returned code ${error.status}, body was: `, error.error);
    return throwError('Something bad happened; please try again later.');
  }
}
