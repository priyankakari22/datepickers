import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDatepickerComponent } from './child-datepicker.component';

describe('ChildDatepickerComponent', () => {
  let component: ChildDatepickerComponent;
  let fixture: ComponentFixture<ChildDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
