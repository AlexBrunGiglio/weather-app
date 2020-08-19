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
  weatherWeekList: Array<{ itemList: {} }>;
  cTemp: string;
  cTempMin: string;
  cTempMax: string;
  sunrise: string;
  sunset: string;
  testeur: boolean = false;

  constructor(private weatherService: WeatherApiService) { }

  ngOnInit(): void {
    this.load();
  }

  async load() {

    this.weatherDay = await this.weatherService.getWeatherToDay().toPromise();
    this.weatherWeek = await this.weatherService.getWeatherWeek().toPromise()



    this.cTemp = this.fTempTocTemp(this.weatherDay.main.temp).toFixed(0);
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




  }



  async changeDisplay() {
    if (this.testeur === false) {
      this.testeur = true;
    }
    else {
      this.testeur = false;
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
}
