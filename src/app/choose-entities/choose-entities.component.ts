import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { entities } from '../shared/store/entities';

@Component({
  selector: 'app-choose-entities',
  templateUrl: './choose-entities.component.html',
  styleUrls: ['./choose-entities.component.scss']
})
export class ChooseEntitiesComponent implements OnInit {

  entities: any;
  searchStr: string = '';
  filterReverse: boolean = false;

  constructor(private router: Router, ) {
    this.entities = entities;
  }

  ngOnInit() {
  }

  optionClickHandler(entity) {
    for (let i = 0; i< entities.length; i++) {
      if (entities[i].name === entity.name) {
        this.entities[i].chosen = !this.entities[i].chosen;
      }
    }
  }

  btnClickHandler(e) {
    this.router.navigateByUrl("/");
  }

  sortBtnClickHandler() {
    this.filterReverse = !this.filterReverse;
  }

}
