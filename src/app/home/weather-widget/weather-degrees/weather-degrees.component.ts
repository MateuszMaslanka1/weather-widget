import { Component, Input } from '@angular/core';
import { OpenWeatherMapMappedData } from '../../models/open-weather-map-mapped-data.interface';

@Component({
  selector: 'app-weather-degrees',
  templateUrl: './weather-degrees.component.html',
  styleUrls: ['./weather-degrees.component.scss']
})
export class WeatherDegreesComponent {

  @Input() weatherData: OpenWeatherMapMappedData = {
    weatherIcon: '',
    description: '',
    degree: 0,
    cityName: '',
    id: 0
  };

}
