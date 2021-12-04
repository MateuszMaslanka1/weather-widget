import { Component, OnInit } from '@angular/core';
import { RefreshWeatherService } from './services/refresh-weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private refreshWeatherService: RefreshWeatherService) { }

  ngOnInit(): void {
    this.refreshWeatherService.refreshWeather();
  }

}
