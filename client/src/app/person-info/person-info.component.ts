import { Component, Input, OnInit } from '@angular/core';
import { ExpenseReportEntry } from 'src/store/entities/expense-report-entry';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {
  @Input() expenseReport = new ExpenseReportEntry('', 0);

  ngOnInit(): void {
  }

}
