import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UsersComponent } from "./users/users.component";
import { DUMMY_USERS } from './dummy-users';
import { InvestmentHeaderComponent } from "./investment-header/investment-header.component";
import { InvUserInputComponent } from "./inv-user-input/inv-user-input.component";

@Component({
    selector: 'app-root',
    // standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    // imports: [HeaderComponent, UsersComponent, InvestmentHeaderComponent, InvUserInputComponent]
})
export class AppComponent {
    users = DUMMY_USERS;
    resultsData?: {
        year: number,
        interest: number;
        valueEndOfYear: number,
        annualInvestment: number,
        totalInterest: number,
        totalAmountInvested: number
      }[];
}
