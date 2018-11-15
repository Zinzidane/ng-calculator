import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators,FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-second-operand',
  templateUrl: './second-operand.component.html',
  styleUrls: ['./second-operand.component.css']
})
export class SecondOperandComponent implements OnInit {
  secondOperandForm: FormGroup;
  @Output() formChanged = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.secondOperandForm = this.fb.group({
      operands: this.fb.array([
        this.getOperands()
     ])
    });
    this.getFormChanges();
  }

  getFormChanges() {
    this.secondOperandForm.controls['operands'].valueChanges.subscribe(operands => this.formChanged.emit(operands));
  }

  getOperands() {
    const numberPatern = '^[0-9.,]+$';
    return this.fb.group({
      operand: ['', [Validators.required,
                       Validators.pattern(numberPatern)]]
    });
  }

  addRow() {
    const control = <FormArray>this.secondOperandForm.controls['operands'];
    control.push(this.getOperands());
  }

  removeRow(i: number) {
    const control = <FormArray>this.secondOperandForm.controls['operands'];;
    control.removeAt(i);
  }
}
