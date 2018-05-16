import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  zoom: number = 8;
  lat: number = 13.7563;
  lng: number = 100.5018;
  constructor( private router: Router) {
   
  }

   pointer () {
      this.router.navigate(['bms']);
   }
  // backgroundColor: string = "#000";
  // maxZoom: number: 12;
}
