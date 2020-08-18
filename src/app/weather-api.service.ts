import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherWeekInterface } from './home/weather-week-interface';
import { WeatherDayInterface } from './home/weather-day-interface'

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private httpClient: HttpClient) {
    // Observable.interval()
  }

  public getWeatherWeek(): Observable<WeatherWeekInterface> {
    return this.httpClient.get<WeatherWeekInterface>('https://api.openweathermap.org/data/2.5/forecast?q=ajaccio&appid=b1883eccb9456a29ba04a5a64ad3883b&lang=fr');
  }

  public getWeatherToDay(): Observable<WeatherDayInterface> {
    return this.httpClient.get<WeatherDayInterface>('https://api.openweathermap.org/data/2.5/weather?q=ajaccio&appid=b1883eccb9456a29ba04a5a64ad3883b&lang=fr');
  }
}
