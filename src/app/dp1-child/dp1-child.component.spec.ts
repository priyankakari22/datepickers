import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dp1ChildComponent } from './dp1-child.component';

describe('Dp1ChildComponent', () => {
  let component: Dp1ChildComponent;
  let fixture: ComponentFixture<Dp1ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dp1ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dp1ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
