import { Injectable } from '@angular/core';
import { CityId } from '../model/city-id.interface';

@Injectable({
  providedIn: 'root'
})
export class DrawCity {

  constructor() { }

  private cityIdObj: CityId = {};
  public cityKey: string = '';
  private chosenCity: CityId = {};

  public drawCity(): void {
    const cityObjectKeys: string[] = Object.keys(this.cityIdObj);
    // console.log(cityObjectKeys.length, cityObjectKeys)
    this.cityKey = cityObjectKeys[Math.floor(Math.random() * cityObjectKeys.length)];
    const newCityIdObj = Object.keys(this.cityIdObj).reduce((cityObject: CityId, key: string) => {
      key !== this.cityKey ? cityObject[key] = this.cityIdObj[key] :
        this.chosenCity[this.cityKey] = this.cityIdObj[this.cityKey];
      return cityObject
    }, {});
    this.cityIdObj = newCityIdObj;
  }

  public setCity(cityIdObj: CityId): CityId {
    this.cityIdObj = cityIdObj;
    const times: number = 2;
    for (let i: number = 0; i < times; i++) {
      this.drawCity();
    }
    return this.cityIdObj;
  }
}
