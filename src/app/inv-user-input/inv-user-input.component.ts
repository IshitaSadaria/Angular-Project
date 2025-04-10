import { Component, EventEmitter, Output, signal } from '@angular/core';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-inv-user-input',
  templateUrl: './inv-user-input.component.html',
  styleUrl: './inv-user-input.component.css'
})
export class InvUserInputComponent {

  constructor(private investmentService: InvestmentService) { }

  @Output() calculate = new EventEmitter<InvestmentInput>();

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment()
    });
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }

}
