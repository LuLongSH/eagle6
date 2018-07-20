import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseEntitiesComponent } from './choose-entities.component';

describe('ChooseEntitiesComponent', () => {
  let component: ChooseEntitiesComponent;
  let fixture: ComponentFixture<ChooseEntitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseEntitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
