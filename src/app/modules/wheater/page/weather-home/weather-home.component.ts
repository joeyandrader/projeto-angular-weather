import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Weather } from 'src/app/models/interfaces/weather.interface';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html'
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  initialCityName = 'Uberlandia';
  weatherDatas!: Weather;
  searchIcon = faMagnifyingGlass;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (res) => {
          res && (this.weatherDatas = res)
          console.log(this.weatherDatas)
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

  onSubmit(): void {
    this.getWeatherDatas(this.initialCityName)
    this.initialCityName = '';
  }

  //Destroy component
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete()
  }

}
