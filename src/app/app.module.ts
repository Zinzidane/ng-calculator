import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstOperandComponent } from './components/first-operand/first-operand.component';
import { OperatorComponent } from './components/operator/operator.component';
import { SecondOperandComponent } from './components/second-operand/second-operand.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstOperandComponent,
    OperatorComponent,
    SecondOperandComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
