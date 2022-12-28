import { Component } from '@angular/core';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather';
  searchKey: string = ''
  base:string=''
  kel:any
  degree:any
  celcius:string='°C'
  type:any
  icon:any

  constructor(private api:ServicesService){ }

  search(event: any) {
    console.log(event.target.value);
    this.searchKey = event.target.value
    
    this.api.places(this.searchKey).subscribe((data:any)=>{
      console.log(data);
      this.kel = data.main.temp
      this.degree=`${Math.floor(this.kel - 273.15 )}${this.celcius}`
      this.type=data.weather[0].main
      this.icon=data.weather[0].icon
    })
  }
}
