import { Component, OnInit } from '@angular/core';
import { computed, observable } from 'mobx-angular';
import { expenseReports } from 'src/store/modules/expense-reports';
import { moneyOwed } from 'src/store/modules/money-owed';

@Component({
  selector: 'app-calculate-money-owed',
  templateUrl: './calculate-money-owed.component.html',
  styleUrls: ['./calculate-money-owed.component.css']
})
export class CalculateMoneyOwedComponent implements OnInit {
  @observable owedMoneyEntries = moneyOwed.moneyOwedEntries;

  @computed get isTwoOrMoreExpenseReports(): boolean {
    return expenseReports.expenseReportEntries.length >= 2;
  }

  async calculateMoneyOwed(): Promise<void> {
    await moneyOwed.getCalculation(expenseReports.expenseReportEntries);
    this.owedMoneyEntries = moneyOwed.moneyOwedEntries;
  }

  ngOnInit(): void {
  }

}
