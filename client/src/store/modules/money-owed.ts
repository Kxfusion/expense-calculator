import { moneyOwedResponseConverter } from '../converter/money-owed-response-converter';
import { ExpenseReportEntry } from '../entities/expense-report-entry';
import { MoneyOwedEntry } from '../entities/money-owed-entry';

class MoneyOwed {
  private entries: MoneyOwedEntry[] = [];

  public get moneyOwedEntries(): MoneyOwedEntry[] {
    return this.entries;
  }

  public async getCalculation(expenseReports: ExpenseReportEntry[]): Promise<void> {
    const response = await fetch('http://localhost:4040/calculate/money-owed', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(expenseReports)
    });

    this.entries = await response.json().then((data) => {
      return moneyOwedResponseConverter(data);
    });
  }
}

export const moneyOwed = new MoneyOwed();
