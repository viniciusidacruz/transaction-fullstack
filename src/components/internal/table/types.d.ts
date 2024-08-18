import { Transaction } from "@prisma/client";

export interface TableProps {
  transactions: Transaction[];
}

type Modal = "remove" | "edit";
export interface VisibilityModals {
  type: Modal;
  transactionUid: string;
}
