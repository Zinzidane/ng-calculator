import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Validators,
  FormBuilder,
  FormGroup,
  FormArray} from '@angular/forms';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {
  operatorForm: FormGroup;
  @Output() formChanged = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.operatorForm = this.fb.group({
      operators: this.fb.array([
        this.getOperators()
     ])
    });

    this.getFormChanges();
  }

  getFormChanges() {
    this.operatorForm.controls['operators'].valueChanges.subscribe(operators => this.formChanged.emit(operators));
  }


  getOperators() {
    return this.fb.group({
      operator: ['']
    });
  }

  addOperator() {
    const control = <FormArray>this.operatorForm.controls['operators'];
    control.push(this.getOperators());
  }

  // remove row
  removeOperator(i: number) {
    const control = <FormArray>this.operatorForm.controls['operators'];;
    control.removeAt(i);
  }

}
