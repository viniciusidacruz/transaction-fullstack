import { create } from "zustand";
import { persist } from "zustand/middleware";

import { UseBalanceStore } from "./types";
import { TransactionStatusEnum, TransactionTypeEnum } from "@prisma/client";

/**
 * Hook de estado global para gerenciar o balanço, o pagamento total, e o total pago na aplicação.
 *
 * Utiliza o Zustand para criar a store e o middleware `persist` para persistir os dados no `localStorage`.
 *
 * @param balance - O valor atual do balanço.
 * @param totalPayment - O valor total dos pagamentos pendentes.
 * @param totalPaid - O valor total dos pagamentos confirmados.
 * @param resetAmount - Função para redefinir o balanço para um valor específico.
 * @param updateBalance - Função para atualizar o balanço somando um novo valor ao balanço atual.
 * @param updateTotal - Função para atualizar os valores de `totalPayment` e `totalPaid` com base nas transações fornecidas.
 */
export const useBalanceStore = create<UseBalanceStore>()(
  persist(
    (set) => ({
      balance: 0,
      totalPayment: 0,
      totalPaid: 0,
      resetAmount: (amount) => set({ balance: amount }),
      updateBalance: (newAmount) =>
        set((set) => ({ balance: newAmount + set.balance })),
      updateTotal: (transactions) => {
        const totalPriceTransactionsPending = transactions
          .filter(
            (t) =>
              t.status === TransactionStatusEnum.PENDING &&
              t.type === TransactionTypeEnum.WITHDRAW
          )
          .reduce((total, transaction) => {
            return total + transaction.amount;
          }, 0);

        const totalPriceTransactionsConfirmed = transactions
          .filter(
            (t) =>
              t.status === TransactionStatusEnum.CONFIRMED &&
              t.type === TransactionTypeEnum.WITHDRAW
          )
          .reduce((total, transaction) => {
            return total + transaction.amount;
          }, 0);

        set({
          totalPayment: totalPriceTransactionsPending,
          totalPaid: totalPriceTransactionsConfirmed,
        });
      },
    }),
    {
      name: "@balance_store",
      getStorage: () => localStorage,
    }
  )
);
