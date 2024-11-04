import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { WetherService } from '../Service/wether.service';

@Component({
  selector: 'app-left-container',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './left-container.component.html',
  styleUrl: './left-container.component.css'
})
export class LeftContainerComponent {

  //Variables for temp summary
  faCloud:any=faCloud;
  faCloudRain:any=faCloudRain;

  constructor(public weatherService:WetherService){}

  onSearch(location:string){
     this.weatherService.cityName=location;
     this.weatherService.getData();
  }

}
