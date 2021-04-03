interface OwedMoney {
  recipient: string;
  amount: number;
}

export class MoneyOwedEntry {
  constructor(
    public name: string,
    public owedMoney: OwedMoney
  ) {}
}
