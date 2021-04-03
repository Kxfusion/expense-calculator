import { Component, OnInit } from '@angular/core';
import { observable, computed } from 'mobx-angular';
import { ExpenseReportEntry } from 'src/store/entities/expense-report-entry';
import { expenseReports } from 'src/store/modules/expense-reports';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  @observable expenseReport = new ExpenseReportEntry('', 0);

  @computed get isInputInvalid(): boolean {
    return this.expenseReport.name.length === 0 || this.expenseReport.expenses < 0;
  }

  ngOnInit(): void {
  }

  submitNewExpenseReport(): void {
    expenseReports.addExpenseReport(this.expenseReport);
    this.expenseReport = new ExpenseReportEntry('', 0);
  }
}
