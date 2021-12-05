import { Component, Input, OnChanges } from '@angular/core';
import { WeatherData } from '../model/weather-data.interface';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnChanges {

  constructor() { }

  @Input() weatherData?: WeatherData;

  ngOnChanges(): void {
    if (this.weatherData) {
      console.log(this.weatherData)
    }
  }

}
