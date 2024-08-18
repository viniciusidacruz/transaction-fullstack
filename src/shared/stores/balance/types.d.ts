type States = {
  balance: number;
  totalPayment: number;
};

type Actions = {
  updateBalance: (newAmount: number) => void;
  updateTotalPayment: (newAmount: number) => void;
};

export type UseBalanceStore = States & Actions;
