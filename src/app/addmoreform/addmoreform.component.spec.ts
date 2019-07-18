import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmoreformComponent } from './addmoreform.component';

describe('AddmoreformComponent', () => {
  let component: AddmoreformComponent;
  let fixture: ComponentFixture<AddmoreformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmoreformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmoreformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
