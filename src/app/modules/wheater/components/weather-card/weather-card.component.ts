import { Component, Input } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { Weather } from 'src/app/models/interfaces/weather.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html'
})
export class WeatherCardComponent {
  @Input() weatherDatasInput!: Weather // Recebe os dados responsavel da api que vem do component pai

  //Importando icones que irei usar no HTML component
  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
}
