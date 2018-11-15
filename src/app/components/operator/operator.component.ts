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
    // const operatorFormValueChanges$ = this.operatorForm.controls['operators'].valueChanges;
    // // subscribe to the stream so listen to changes on operators
    // operatorFormValueChanges$.subscribe(operators => console.log(operators));
  }

  getFormChanges() {
    this.operatorForm.controls['operators'].valueChanges.subscribe(operators => this.formChanged.emit(operators));
  }


  private getOperators() {
    return this.fb.group({
      operator: ['']
    });
  }


  private addOperator() {
    const control = <FormArray>this.operatorForm.controls['operators'];
    control.push(this.getOperators());
  }

  // remove row
  private removeOperator(i: number) {
    const control = <FormArray>this.operatorForm.controls['operators'];;
    control.removeAt(i);
  }

}
