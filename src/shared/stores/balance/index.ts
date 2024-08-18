import { create } from "zustand";
import { persist } from "zustand/middleware";

import { UseBalanceStore } from "./types";

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
