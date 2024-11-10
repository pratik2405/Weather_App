import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { WetherService } from '../Service/wether.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-left-container',
  standalone: true,
  imports: [FontAwesomeModule,FormsModule],
  templateUrl: './left-container.component.html',
  styleUrl: './left-container.component.css'
})
export class LeftContainerComponent {

  //Variables for temp summary
  faCloud:any=faCloud;
  faCloudRain:any=faCloudRain;
  location: string = '';

  constructor(public weatherService:WetherService){}

  onSearch(slocation:string){
    slocation=this.location;
     this.weatherService.cityName=slocation;
     this.weatherService.getData();
  }

}
