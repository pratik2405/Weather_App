import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocationDetails } from '../Models/LocationDetails';
import { WeatherDetails } from '../Models/WeatherDetails';
import { temperatureData } from '../Models/TemperatureData';
import { TodayData } from '../Models/TodayData';
import { WeekData } from '../Models/WeekData';
import { TodaysHighlights } from '../Models/TodaysHighlights';
import { Observable } from 'rxjs';
import { EnvironmetalVariable } from '../Environment/EnvironmentVariable';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WetherService {

  //Variable  which will filled by API endpoints
  locationDetails?: LocationDetails;
  weatherDetails?: WeatherDetails;

  //Variable  that have the extracted data from API endpoints
  temperatureData?: temperatureData; //left-container data

  todayData?: TodayData[]=[]; //right-container data
  weekData?: WeekData[]=[];

  todaysHighLight?:TodaysHighlights;

  //Variable to be used to for API  calls
  cityName: string = 'pune';
  language: string = 'en-US';
  date: string = '20200622';
  units: string = 'm';

  currentTime: Date;

  //variable to control tab
  today: boolean = false;
  week: boolean = true;

  //variable to control temp value
  celsius: boolean = true;
  fahrenheit: boolean = false;

  constructor(private httpClient: HttpClient) {
    this.getData();
    // console.log(this.locationDetails);
    // console.log(this.weatherDetails);
  }

  getSummaryImg(summary: string): string {
    //base folder address containing images
    // var baseaddress = '';
    //image names:
    var cloudySunny = 'cloudy.png';
    var rainSunny = 'cloudy (1).png';
    var windy = 'windsum.png';
    var sunny = 'sun.png';
    var rainy = 'rainy-day-sum.png';
    var smoke='clouds.png';
  
    if (String(summary).includes("Partly Cloudy") || String(summary).includes("P Cloudy")||String(summary).includes("Clear")) return  cloudySunny;
    else if (String(summary).includes("Partly Rainy") || String(summary).includes("P Rainy")) return  rainSunny;
    else if (String(summary).includes("Wind")) return  windy;
    else if (String(summary).includes("Rain")) return  rainy;
    else if (String(summary).includes("Sun")) return  sunny;
    else if (String(summary).includes("Smoke")) return  smoke;

    return rainSunny;
  }

  //Method to create a data for left container
  fillTemperatureData() {
    //Setting left data model properties
    this.currentTime = new Date();
    this.temperatureData.day = this.weatherDetails['v3-wx-observations-current'].dayOfWeek;
    this.temperatureData.time= `${String(this.currentTime.getHours()).padStart(2, '0')}:${String(this.currentTime.getMinutes()).padStart(2, '0')}`;
    // '${String(this.currentTime.getHours()).padStart(2,'0')}:${String(this.currentTime.getMinutes()).padStart(2,'0')}';
    this.temperatureData.temperature = this.weatherDetails['v3-wx-observations-current'].temperature;
    this.temperatureData.location = `${this.locationDetails.location.city[0]},${this.locationDetails.location.country[0]}`;
    
    this.temperatureData.rainpercent = this.weatherDetails['v3-wx-observations-current'].precip24Hour;
    this.temperatureData.summary = this.weatherDetails['v3-wx-observations-current'].wxPhraseShort;
    this.temperatureData.summaryimage = this.getSummaryImg(this.temperatureData.summary);
  }

  //Method to create a data for right container using weekData
  fillWeekData() {
   var weekCount=0;
   while(weekCount<7){
   this.weekData.push(new WeekData());
   this.weekData[weekCount].day=this.weatherDetails['v3-wx-forecast-daily-15day'].dayOfWeek[weekCount].slice(0,3);
   this.weekData[weekCount].tempmax=this.weatherDetails['v3-wx-forecast-daily-15day'].calendarDayTemperatureMax[weekCount];
   this.weekData[weekCount].tempmin=this.weatherDetails['v3-wx-forecast-daily-15day'].calendarDayTemperatureMin[weekCount];
   this.weekData[weekCount].summaryimage=this.getSummaryImg(this.weatherDetails['v3-wx-forecast-daily-15day'].narrative[weekCount]);
   
   weekCount++;
   }
  }

  fillTodayData(){
    var todayCount=0;
    while(todayCount<7){
      this.todayData.push(new TodayData());
      this.todayData[todayCount].time=this.weatherDetails['v3-wx-forecast-hourly-10day'].validTimeLocal[todayCount].slice(11,16);
      this.todayData[todayCount].temperature=this.weatherDetails['v3-wx-forecast-hourly-10day'].temperature[todayCount];
      this.todayData[todayCount].summaryimage=this.getSummaryImg(this.weatherDetails['v3-wx-forecast-hourly-10day'].wxPhraseShort[todayCount]);
      todayCount++;
    }
  }

  //Method to extract time in 12:00 formate from string that show on todayHighLight
  getTimeFromString(localTime:string){
    return localTime.slice(11,16); 
  }

  fillTodaysHightlight(){

    this.todaysHighLight.airquality=this.weatherDetails['v3-wx-globalAirQuality'].globalairquality.airQualityIndex;
    this.todaysHighLight.humidity=this.weatherDetails['v3-wx-observations-current'].relativeHumidity;
    this.todaysHighLight.sunrise=this.getTimeFromString(this.weatherDetails['v3-wx-observations-current'].sunriseTimeLocal);
    this.todaysHighLight.sunset=this.getTimeFromString(this.weatherDetails['v3-wx-observations-current'].sunsetTimeLocal);
    this.todaysHighLight.uvindex=this.weatherDetails['v3-wx-observations-current'].uvIndex;
    this.todaysHighLight.visibility=this.weatherDetails['v3-wx-observations-current'].visibility;
    this.todaysHighLight.windstatus=this.weatherDetails['v3-wx-observations-current'].windSpeed;
  }

  //method to create useful data for UI using the data received from API.
  perparedData(): void {
    //Setting left data model properties
    this.fillTemperatureData();

    this.fillWeekData();

    this.fillTodayData();

    this.fillTodaysHightlight();

    // console.log(this.temperatureData);
    // console.log(this.weekData);
    // console.log(this.todayData);
    //console.log(this.weatherDetails);
    // console.log(this.todaysHighLight)

  }

  celsiusToFahrenheit(celsius:number){
    return ((celsius*1.8)+32).toFixed(1);
  }

  fahrenheitToCelsius(fahrenheit:number){
    return ((fahrenheit*32)/0.555).toFixed(1);
  }

  // Method to get location Details from API using the variable cityname a sper INPUT
  getLocationDetails(cityName: string, language: string): Observable<LocationDetails> {
    return this.httpClient.get<LocationDetails>(environment.weatherApiLocationURL, {
      headers: new HttpHeaders().set(environment.xRapidApiKeyName, environment.xRapidApiKeyValue)
        .set(environment.xRapidApiHostName, environment.xRapidApiHostValue),
      params: new HttpParams()
        .set('query', cityName)
        .set('language', language)
    })
  }

  getWeatherReport(date: string, latitude: number, longitude: number, language: string, units: string): Observable<WeatherDetails> {
    return this.httpClient.get<WeatherDetails>(environment.weatherApiForcastURL, {
      headers: new HttpHeaders()
        .set(environment.xRapidApiKeyName, environment.xRapidApiKeyValue)
        .set(environment.xRapidApiHostName, environment.xRapidApiHostValue),
      params: new HttpParams()
        .set('date', date)
        .set('latitude', latitude)
        .set('longitude', longitude)
        .set('language', language)
        .set('units', units)
    })
  }

  getData() {
    this.todayData=[];
    this.weekData=[];
    this.temperatureData= new temperatureData();
    this.todaysHighLight=new  TodaysHighlights();

    var latitude;
    var longitude;

    this.getLocationDetails(this.cityName, this.language).subscribe({
      next: (response) => {
        this.locationDetails = response;
        latitude = this.locationDetails?.location.latitude[0];
        longitude = this.locationDetails?.location.longitude[0];

        //once we get value of latitude and longitude ,we can  call for the getWeatherReport
        this.getWeatherReport(this.date, latitude, longitude, this.language, this.units).subscribe({
          next: (response) => {
            this.weatherDetails = response;
            this.perparedData();
          }
        });
      }
    });
  }
}
