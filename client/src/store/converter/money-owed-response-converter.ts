import { MoneyOwedEntry } from '../entities/money-owed-entry';

type MoneyOwedResponse = [{ name: string, owedMoney: { recipient: string, amount: number } }];

const checkResponse = (data: any): data is MoneyOwedResponse => {
  if (data.length === undefined || data.length === 0) {
    return false;
  }

  const isResponseValid = (data as MoneyOwedResponse).every((entry) => {
    if (
      entry.name === undefined ||
      entry.owedMoney?.amount === undefined ||
      entry.owedMoney?.recipient === undefined
    ) {
      return false;
    }

    return true;
  });

  return isResponseValid;
};

export const moneyOwedResponseConverter = (data: unknown): MoneyOwedEntry[] => {
  if (!checkResponse(data)) {
    return [];
  }

  return data.map((entry) => {
    return new MoneyOwedEntry(entry.name, entry.owedMoney);
  });
};


