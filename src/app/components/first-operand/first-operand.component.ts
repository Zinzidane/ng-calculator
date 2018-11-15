import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Validators,
  FormBuilder,
  FormGroup,
  FormArray} from '@angular/forms';

@Component({
  selector: 'app-first-operand',
  templateUrl: './first-operand.component.html',
  styleUrls: ['./first-operand.component.css']
})
export class FirstOperandComponent implements OnInit {
  firstOperandForm: FormGroup;
  @Output() formChanged = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.firstOperandForm = this.fb.group({
      operands: this.fb.array([
        this.getOperands()
     ])
    });

    this.getFormChanges();
  }

  getFormChanges() {
    this.firstOperandForm.controls['operands'].valueChanges.subscribe(operands => this.formChanged.emit(operands));
  }

  private getOperands() {
    const numberPatern = '^[0-9.,]+$';
    return this.fb.group({
      operand: ['', [Validators.required,
                       Validators.pattern(numberPatern)]]
    });
  }

    // add new row
    private addRow() {
      const control = <FormArray>this.firstOperandForm.controls['operands'];
      control.push(this.getOperands());
    }

    // remove row
    private removeRow(i: number) {
      const control = <FormArray>this.firstOperandForm.controls['operands'];;
      control.removeAt(i);
    }
}
