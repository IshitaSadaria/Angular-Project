import { Component } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-inv-result',
  templateUrl: './inv-result.component.html',
  styleUrl: './inv-result.component.css'
})
export class InvResultComponent {
  constructor(private investmentService: InvestmentService){
  }

  get results(){
    return this.investmentService.resultData;
  }
}
