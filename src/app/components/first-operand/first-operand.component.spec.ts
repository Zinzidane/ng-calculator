import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstOperandComponent } from './first-operand.component';

describe('FirstOperandComponent', () => {
  let component: FirstOperandComponent;
  let fixture: ComponentFixture<FirstOperandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstOperandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstOperandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
