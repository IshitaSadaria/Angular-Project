import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { InvestmentHeaderComponent } from './investment-header/investment-header.component';
import { InvUserInputComponent } from './inv-user-input/inv-user-input.component';
import { FormsModule } from '@angular/forms';
import { InvResultComponent } from './inv-result/inv-result.component';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    UsersComponent, 
    InvestmentHeaderComponent, 
    InvUserInputComponent,
    InvResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, CurrencyPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }