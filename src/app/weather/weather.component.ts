import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  @Input() weatherMain: "Clouds" | "Clear" | "Rain" | "Thunderstorm" | "Drizzle" | "Snow";

  constructor() { }

  ngOnInit(): void {
    console.log(this.weatherMain);
  }

}
