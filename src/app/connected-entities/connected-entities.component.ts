import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {entities} from '../shared/store/entities';


@Component({
  selector: 'app-connected-entities',
  templateUrl: './connected-entities.component.html',
  styleUrls: ['./connected-entities.component.scss']
})
export class ConnectedEntitiesComponent implements OnInit {

  entities: any;
  entitiesConnected: number = 0;

  constructor(private router: Router) {
    this.entities = entities;
  }

  ngOnInit() {
    for (let i = 0; i< entities.length; i++) {
      if (entities[i].chosen) this.entitiesConnected++;
    }
  }

  btnClickHandler(e) {
    e.stopPropagation();
    this.router.navigateByUrl("/select");
  }

}
