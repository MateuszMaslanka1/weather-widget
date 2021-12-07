import { Component, Input } from '@angular/core';
import { OpenWeatherMapMappedData } from '../../models/open-weather-map-mapped-data.interface';

@Component({
  selector: 'app-weather-description',
  templateUrl: './weather-description.component.html',
  styleUrls: ['./weather-description.component.scss']
})
export class WeatherDescriptionComponent {

  @Input() weatherData: OpenWeatherMapMappedData = {
    weatherIcon: '',
    description: '',
    degree: 0,
    cityName: '',
    id: 0
  };

}
