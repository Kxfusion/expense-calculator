import { ExpenseReportEntry } from '../entities/expense-report-entry';

class ExpenseReports {
  private entries: ExpenseReportEntry[] = [];

  public get expenseReportEntries(): ExpenseReportEntry[] {
    return this.entries;
  }

  public addExpenseReport(report: ExpenseReportEntry): void {
    this.entries.push(report);
  }
}

export const expenseReports = new ExpenseReports();
