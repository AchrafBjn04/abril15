import { Component } from '@angular/core';
import { ConventionalLoan } from '../modelo/ConventionalLoan';
import { Loan } from '../modelo/Loan';

@Component({
  selector: 'app-ejercicio01',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio01.component.html',
  styleUrl: './ejercicio01.component.css'
})
export class Ejercicio01Component {
  calculateInterestOnlyLoanPayment(loanTerms:Loan): string {
    let interest = loanTerms.interestRate / 1200;
    let payment;
    payment = loanTerms.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
  }

  calculateConventionalLoanPayment(conventionalLoan:ConventionalLoan): string {
    let interest = conventionalLoan.interestRate / 1200;
    let payment;
    payment = conventionalLoan.principal * interest / (1 - (Math.pow(1 / (1 + interest), conventionalLoan.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
  }

  constructor(){
    let interestOnlyPayment = this.calculateInterestOnlyLoanPayment({ principal: 30000, interestRate: 5 });
    let conventionalPayment = this.calculateConventionalLoanPayment({ principal: 30000, interestRate: 5, months: 180 });

    console.log(interestOnlyPayment);
    console.log(conventionalPayment); 
  }

}
