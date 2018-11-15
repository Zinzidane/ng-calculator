import { Component, OnInit } from '@angular/core';
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  firstOperands = [];
  secondOperands = [];
  operators = [];
  results = [];

   constructor() {
   }

   ngOnInit() {
    this.calculatePrice();
  }

   onFirstOperandsChanged(operands) {
    this.firstOperands = operands;
    this.calculatePrice();
  }

   onOperatorsChanged(operators) {
    this.operators = operators;
    this.calculatePrice();
  }

   onSecondOperandsChanged(operands) {
    this.secondOperands = operands;
    this.calculatePrice();
  }

   calculatePrice() {
    const minLength = Math.min(this.firstOperands.length, this.secondOperands.length, this.operators.length);
    this.results = [];
    let expression;
    let condition;
    if(minLength) {
      for(let i = 0; i < minLength; i++) {
        condition = (this.firstOperands[i].operand) && (this.secondOperands[i].operand) && (this.operators[i].operator);
        if(condition) {
          // If operator is minus and the second operand is less than 0 then we must change expression for correct eval() result;
          if(this.operators[i].operator === "-" && this.secondOperands[i].operand < 0) {
            expression = this.firstOperands[i].operand + '+' + this.secondOperands[i].operand * -1;
          } else {
            expression = this.firstOperands[i].operand + this.operators[i].operator + this.secondOperands[i].operand;\
          }
          this.results.push(eval(expression));
        }
      }
    }
  }
}
