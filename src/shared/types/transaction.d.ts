import { TransactionStatusEnum, TransactionTypeEnum } from "../enums";

export interface Transaction {
  uid: string;
  date: string;
  amount: number;
  type: TransactionTypeEnum;
  status: TransactionStatusEnum;
  name: string;
  category: string;
}
