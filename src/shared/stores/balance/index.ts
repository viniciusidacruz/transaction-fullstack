import { create } from "zustand";
import { persist } from "zustand/middleware";

import { UseBalanceStore } from "./types";

/**
 * Hook de estado global para gerenciar o balanço e o pagamento total da aplicação.
 *
 * Utiliza o Zustand para criar a store e o middleware `persist` para persistir os dados no `localStorage`.
 *
 * @param balance - O valor atual do balanço.
 * @param totalPayment - O valor total dos pagamentos.
 * @param updateBalance - Função para atualizar o balanço com um novo valor.
 * @param updateTotalPayment - Função para atualizar o total de pagamentos com um novo valor.
 */
export const useBalanceStore = create<UseBalanceStore>()(
  persist(
    (set) => ({
      balance: 0,
      totalPayment: 0,
      updateBalance: (newAmount) => set({ balance: newAmount }),
      updateTotalPayment: (newAmount) => set({ totalPayment: newAmount }),
    }),
    {
      name: "@balance_store",
      getStorage: () => localStorage,
    }
  )
);
