import { CalculateExpensesRequest } from "../controllers/requests/calculate-money-owed-request";

export class ExpenseReports {
  public expenseMap: Map<string, number>;

  constructor (rawRequest: CalculateExpensesRequest) {
    this.expenseMap = new Map();
    rawRequest.body.forEach((report) => {
      if (report.name.length === undefined || report.name.length === 0) {
        throw Error(`No name on one or more expense report(s)`);
      }

      const expenses = Number.parseFloat(report.expenses);
      if (Number.isNaN(expenses) || expenses < 0) {
        throw Error(`Invalid expense report for ${report.name}`);
      }

      if(this.expenseMap.has(report.name)) {
        console.log(`dropping duplicate expense report for ${report.name}`)
        return;
      }

      this.expenseMap.set(report.name, expenses);
    });
  }
}
