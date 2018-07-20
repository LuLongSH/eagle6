import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router'
import { ConnectedEntitiesComponent } from '../connected-entities/connected-entities.component'
import { ChooseEntitiesComponent } from "../choose-entities/choose-entities.component";

const routes: Routes = [
  { path: '', component: ConnectedEntitiesComponent },
  { path: 'select', component: ChooseEntitiesComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
