import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material';

import { searchPipe } from './pipes/search.pipe';
import {sortPipe} from "./pipes/sort.pipe";



@NgModule({
  declarations: [
    searchPipe,
    sortPipe
  ],
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],

  exports: [
    CommonModule,

    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,

    searchPipe,
    sortPipe
  ]
})
export class AppSharedModule { }
