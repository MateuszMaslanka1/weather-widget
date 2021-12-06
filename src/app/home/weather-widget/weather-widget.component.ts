import { Component, Input } from '@angular/core';
import { OpenWeatherMapMappedData } from '../models/open-weather-map-mapped-data.interface';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent {

  @Input() weatherData: OpenWeatherMapMappedData = {
    weatherIcon: '',
    description: '',
    degree: 0,
    cityName: '',
    id: 0
  };
}
