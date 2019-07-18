import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpParentComponent } from './dp-parent.component';

describe('DpParentComponent', () => {
  let component: DpParentComponent;
  let fixture: ComponentFixture<DpParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
