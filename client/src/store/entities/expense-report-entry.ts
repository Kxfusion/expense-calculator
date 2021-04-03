export class ExpenseReportEntry {
  public name: string;
  public expenses: number;

  constructor(name: string, expenses: number) {
    if (typeof name !== 'string' && typeof expenses !== 'number') {
      throw Error('Invalid values for new person');
    }

    this.name = name;
    this.expenses = expenses;
  }
}
