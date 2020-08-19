import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-weather',
  templateUrl: './info-weather.component.html',
  styleUrls: ['./info-weather.component.scss']
})
export class InfoWeatherComponent implements OnInit {
  @Input() weatherMainWeek: "Clouds" | "Clear" | "Rain" | "Thunderstorm" | "Drizzle" | "Snow";

  constructor() { }

  ngOnInit(): void {
  }

}
