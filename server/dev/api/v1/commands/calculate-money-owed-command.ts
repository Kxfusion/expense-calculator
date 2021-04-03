import { ExpenseReports } from "../entities/expense-reports";
import { IndividualExpenseReport } from "../entities/individual-expense-report";
import { MoneyOwed } from "../entities/money-owed";

export class CalculateMoneyOwedCommand {
  public calculate(expenseReports: ExpenseReports): MoneyOwed[] {
    const largestExpenseReport = this.findLargestExpenseReport(expenseReports);
    const equalPortion = this.findAverageOfExpenses(expenseReports);

    const moneyOwed: MoneyOwed[] = [];
    expenseReports.expenseMap.forEach((expenses, name) => {
      if(name === largestExpenseReport.name) {
        return;
      }

      if (expenses < equalPortion) {
        moneyOwed.push(new MoneyOwed(name, {
          recipient: largestExpenseReport.name,
          amount: this.roundToNearestCent(equalPortion - expenses)
        }));
      }

      if (expenses > equalPortion) {
        moneyOwed.push(new MoneyOwed(largestExpenseReport.name, {
          recipient: name,
          amount: this.roundToNearestCent(expenses - equalPortion)
        }));
      }
    });

    return moneyOwed;
  }

  private findLargestExpenseReport(expenseReports: ExpenseReports): IndividualExpenseReport {
    const largestExpenseReport: IndividualExpenseReport = { name: "", expenses: 0 };

    expenseReports.expenseMap.forEach((expenses, name) => {
      if (largestExpenseReport.expenses < expenses) {
        largestExpenseReport.name = name;
        largestExpenseReport.expenses = expenses;
      }
    });

    return largestExpenseReport;
  }

  private findAverageOfExpenses(expenseReports: ExpenseReports): number {
    let totalExpenses: number = 0;
    for (const expenses of expenseReports.expenseMap.values()) {
      totalExpenses += expenses;
    }

    return this.roundToNearestCent(totalExpenses / expenseReports.expenseMap.size);
  }

  private roundToNearestCent(amount: number): number {
    return Math.round((amount + Number.EPSILON) * 100) / 100;
  }
}