import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './services/index';

import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { BMSComponent } from './bms/bms.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'map', component: MapComponent },
  { path: 'bms', component: BMSComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}