import { WeatherService } from './service/weather.service';
import { Component, OnInit } from '@angular/core';
import {  weatherData } from './models/weather.model';
// import { WeatherServicervicer } from './service/weather.service  ';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title(title: any) {
      throw new Error('Method not implemented.');
    }
    

    constructor(private weatherService: WeatherService) {

    }

    cityName: string = 'Wellington';
    weatherData?: weatherData;

    ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
    }

    onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
    }

    private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
    .subscribe({
        next: (response) => {
        this.weatherData = response;
        console.log(response);
        }
    });
    }
}
