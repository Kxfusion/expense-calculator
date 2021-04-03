interface RawExpenseReport {
  name: string;
  expenses: string;
}

export interface CalculateExpensesRequest {
  body: RawExpenseReport[];
}