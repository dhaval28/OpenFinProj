import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.css']
})
export class EligibilityCalculatorComponent implements OnInit {

  isExistingLoan: boolean = false;
  existingEMI: string = '';
  repayTenure: string = '';
  monthlyInc: number = 100000;
  monthlyExp: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

}
