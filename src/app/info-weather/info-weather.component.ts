import { Component, OnInit, Input } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';
import { WeatherWeekInterface, WeatherListInterface } from '../home/weather-week-interface';

@Component({
  selector: 'app-info-weather',
  templateUrl: './info-weather.component.html',
  styleUrls: ['./info-weather.component.scss']
})
export class InfoWeatherComponent implements OnInit {
  @Input() weatherMainWeek: "Clouds" | "Clear" | "Rain" | "Thunderstorm" | "Drizzle" | "Snow";

  weatherWeek: WeatherWeekInterface;
  tomorow;
  day2;
  day3;

  constructor(private weatherService: WeatherApiService) {

  }

  ngOnInit(): void {
    this.load();
    this.carouselSpeed();
  }

  async load() {
    this.weatherWeek = await this.weatherService.getWeatherWeek().toPromise();
    console.log(this.weatherWeek);
    const array = [];
    const nbDays = 3;

    let defaultTime = this.weatherWeek.list[0].dt;
    for (let index = 0; index < nbDays; index++) {
      defaultTime += 86400;
      array.push(this.weatherWeek.list.find(x => x.dt === defaultTime));
    }
    this.tomorow = array[0];
    this.day2 = array[1];
    this.day3 = array[2];

    let test = this.fTempTocTemp(this.tomorow.main.temp).toFixed(0);
    console.log(test);

    let timeTomoworw = this.convertTimer(this.tomorow.dt);
    console.log(timeTomoworw);


  }

  fTempTocTemp(fTemp: number) {
    return (fTemp - 273.15);
  }

  convertTimer(timer: number) {
    let convertedTime: string;
    let date = new Date(timer * 1000);
    let hours = date.getHours();
    let min = "0" + date.getMinutes();
    if (hours < 10)
      convertedTime = '0' + hours + 'h' + min.substr(-2)
    else
      convertedTime = hours + 'h' + min.substr(-2);
    return convertedTime;
  }

  carouselSpeed() {
    $('.carousel').carousel({
      interval: 2000
    })
  }

}
