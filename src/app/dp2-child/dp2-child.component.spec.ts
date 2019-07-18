import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dp2ChildComponent } from './dp2-child.component';

describe('Dp2ChildComponent', () => {
  let component: Dp2ChildComponent;
  let fixture: ComponentFixture<Dp2ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dp2ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dp2ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
