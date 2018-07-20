import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedEntitiesComponent } from './connected-entities.component';

describe('ConnectedEntitiesComponent', () => {
  let component: ConnectedEntitiesComponent;
  let fixture: ComponentFixture<ConnectedEntitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectedEntitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
