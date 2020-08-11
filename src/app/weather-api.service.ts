import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private httpClient: HttpClient) {
    Observable.interval()
  }

  public getWeatherWeek() {
    return this.httpClient.get('api.openweathermap.org/data/2.5/forecast?q=ajaccio&appid=b1883eccb9456a29ba04a5a64ad3883b');
  }
}
