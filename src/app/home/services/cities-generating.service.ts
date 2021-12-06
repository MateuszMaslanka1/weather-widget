import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesGeneratingService {

  private cityIds: string[]= [];
  private cityKey = '';
  private chosenCities: string[] = [];

  private saveRandomCity(): void {
    this.cityKey = this.cityIds[Math.floor(Math.random() * this.cityIds.length)];
    const filtredCityId = this.cityIds.filter((id: string): boolean => id !== this.cityKey);
    this.cityIds = filtredCityId;
    this.chosenCities.push(this.cityKey);
  }

  setCity(cityIds: string[]): string[] {
    this.chosenCities = [];
    this.cityIds = cityIds;
    Array.from(Array(3)).forEach(() => this.saveRandomCity())
    return this.chosenCities;
  }
}
