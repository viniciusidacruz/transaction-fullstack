import { Transaction } from "@prisma/client";

export interface TableProps {
  transactions: Transaction[];
}
