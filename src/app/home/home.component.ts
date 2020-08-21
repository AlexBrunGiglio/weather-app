import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';
import { WeatherWeekInterface, WeatherListInterface } from './weather-week-interface';
import { WeatherDayInterface } from './weather-day-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  weatherDay: WeatherDayInterface;
  weatherWeek: WeatherWeekInterface;
  weekWeather: WeatherListInterface;
  weatherMain;
  weatherWeekList: Array<{ itemList: {} }>;
  cTemp: string;
  cTempMin: string;
  cTempMax: string;
  sunrise: string;
  sunset: string;
  moreInfo: boolean = false;
  weekInfo: boolean = false;
  speed: string;
  feels: string;

  constructor(private weatherService: WeatherApiService) { }

  ngOnInit(): void {
    this.load();
    console.log(this.weekInfo);

  }

  async load() {

    this.weatherDay = await this.weatherService.getWeatherToDay().toPromise();
    this.weatherWeek = await this.weatherService.getWeatherWeek().toPromise();
    this.weatherMain = this.weatherDay.main;


    this.cTemp = this.fTempTocTemp(this.weatherDay.main.temp).toFixed(0);
    this.feels = this.fTempTocTemp(this.weatherDay.main.feels_like).toFixed(0);
    this.cTempMin = this.fTempTocTemp(this.weatherDay.main.temp_min).toFixed(0);
    this.cTempMax = this.fTempTocTemp(this.weatherDay.main.temp_max).toFixed(0);

    this.sunrise = this.convertTimer(this.weatherDay.sys.sunrise);
    this.sunset = this.convertTimer(this.weatherDay.sys.sunset);

    for (let i = 1; i <= 5; i++) {
      this.weatherWeekList = [
        { itemList: this.weatherWeek.list[i] },
      ];
    }
    let test = this.weatherWeekList.map(x => x.itemList);
    console.log(test);

    this.speed = await (await this.convertMStoKMH(this.weatherDay.wind.speed)).toFixed(1);
  }

  convertMStoKMH(speedMS) {
    let speedConverted = (speedMS * (60 * 60)) / 1000;
    return speedConverted
  }

  changeDisplay() {
    if (this.moreInfo === false) {
      this.moreInfo = true;
    }
    else {
      this.moreInfo = false;
    }
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

  fTempTocTemp(fTemp: number) {
    return (fTemp - 273.15);
  }

  displayWeekInfos() {
    if (this.weekInfo === false) {
      this.weekInfo = true;
    }
    else {
      this.weekInfo = false;
    }
  }
}
