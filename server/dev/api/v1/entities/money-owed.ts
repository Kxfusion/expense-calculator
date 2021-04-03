interface OwedMoney {
  recipient: string;
  amount: number;
}

export class MoneyOwed {
  constructor(
    public name: string,
    public owedMoney: OwedMoney
  ) {}
}