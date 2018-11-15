import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondOperandComponent } from './second-operand.component';

describe('SecondOperandComponent', () => {
  let component: SecondOperandComponent;
  let fixture: ComponentFixture<SecondOperandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondOperandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondOperandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
