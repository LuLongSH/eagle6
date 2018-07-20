import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppSharedModule } from './shared/shared.module';

import { ChooseEntitiesComponent } from './choose-entities/choose-entities.component'
import { ConnectedEntitiesComponent } from './connected-entities/connected-entities.component';



@NgModule({
  declarations: [
    AppComponent,
    ConnectedEntitiesComponent,
    ChooseEntitiesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppSharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
