import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesGeneratingService {

  private cityIds: string[] = [];
  private cityKey: string = '';
  private chosenCities: string[] = [];

  private saveRandomCity(): void {
    this.cityKey = this.cityIds[Math.floor(Math.random() * this.cityIds.length)];
    const filteredCityIds: string[] = this.cityIds.filter((id: string): boolean => id !== this.cityKey);
    this.cityIds = filteredCityIds;
    this.chosenCities.push(this.cityKey);
  }

  getChosenCities(cityIds: string[]): string[] {
    this.chosenCities = [];
    this.cityIds = cityIds;
    Array.from(Array(3)).forEach((): void => this.saveRandomCity())
    return this.chosenCities;
  }
}
