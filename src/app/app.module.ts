import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherWidgetComponent } from './home/weather-widget/weather-widget.component';
import { WeatherDescriptionComponent } from './home/weather-widget/weather-description/weather-description.component';
import { WeatherDegreesComponent } from './home/weather-widget/weather-degrees/weather-degrees.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherWidgetComponent,
    WeatherDescriptionComponent,
    WeatherDegreesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
