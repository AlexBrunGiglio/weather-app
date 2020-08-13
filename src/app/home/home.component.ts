import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';
import { WeatherInterface, WeatherListInterface } from './weather-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  weather: WeatherInterface;
  currentWeaher: WeatherListInterface;
  cTemp: string;

  constructor(private weatherService: WeatherApiService) { }

  ngOnInit(): void {
    this.load();
  }

  async load() {
    this.weather = await this.weatherService.getWeatherWeek().toPromise();

    this.currentWeaher = this.weather.list[0];

    this.cTemp = this.fTempTocTemp(this.currentWeaher.main.temp).toFixed(0)
  }

  fTempTocTemp(fTemp: number) {
    return (fTemp - 273.15);
  }
}
