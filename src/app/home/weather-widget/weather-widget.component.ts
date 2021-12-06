import { Component, Input } from '@angular/core';
import { WeatherData } from '../models/weather-data.interface';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent {

  constructor() { }

  @Input() weatherData: WeatherData = {
    weatherIcon: '',
    description: '',
    degree: 0,
    cityName: '',
    id: 0
  };
}
