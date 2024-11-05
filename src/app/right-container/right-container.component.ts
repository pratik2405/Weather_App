import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { WetherService } from '../Service/wether.service';



@Component({
  selector: 'app-right-container',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './right-container.component.html',
  styleUrl: './right-container.component.css'
})
export class RightContainerComponent {

  constructor(public weatherService:WetherService){

  };

  //fa icon for thumbs up & down , smile&frown
  faThumbsUp:any=faThumbsUp;
  faThumbsDown:any=faThumbsDown;
  faSmile:any=faSmile;
  faFaceFrown:any=faFaceFrown

  //functions to control tab value
  onToday() {
    this.weatherService.week=false;
    this.weatherService.today=true;
  }
  onWeek() {
    this.weatherService.week = true;
    this.weatherService.today = false;
  }

  //function to control temp values
  onCelsius() {
    this.weatherService.celsius = true;
    this.weatherService.fahrenheit = false
  }
  onFahrenheit() {
    this.weatherService.fahrenheit = true;
    this.weatherService.celsius = false;
  }
}
