import { Transaction } from "@prisma/client";

type States = {
  balance: number;
  totalPaid: number;
  totalPayment: number;
};

type Actions = {
  resetAmount: (amount: number) => void;
  updateBalance: (newAmount: number) => void;
  updateTotal: (transactions: Transaction[]) => void;
};

export type UseBalanceStore = States & Actions;
