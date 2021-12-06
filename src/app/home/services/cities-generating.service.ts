import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawCity {

  private cityIdObj: string[]= [];
  private cityKey = '';
  private chosenCity: string[] = [];

  public drawCity(): void {
    this.cityKey = this.cityIdObj[Math.floor(Math.random() * this.cityIdObj.length)];
    const filtredCityId = this.cityIdObj.filter((el: string): boolean => {
      return el !== this.cityKey
    });
    this.cityIdObj = filtredCityId;
    this.chosenCity.push(this.cityKey);
  }

  public setCity(cityIdObj: string[]): string[] {
    this.chosenCity = [];
    this.cityIdObj = cityIdObj;
    const times = 3;
    for (let i = 0; i < times; i++) {
      this.drawCity();
    }
    return this.chosenCity;
  }
}
