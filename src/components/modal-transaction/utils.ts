import { Option } from "@/components/select/types";

import { SchemaTransaction } from "./types";
import {
  Transaction,
  TransactionStatusEnum,
  TransactionTypeEnum,
} from "@prisma/client";

export const initialState = (transaction?: Transaction): SchemaTransaction => {
  return {
    amount: transaction?.amount || 0,
    category: transaction?.category || "",
    name: transaction?.name || "",
    status: transaction ? transaction.status : TransactionStatusEnum.CONFIRMED,
    type: transaction ? transaction.type : TransactionTypeEnum.DEPOSIT,
  };
};

export const OPTIONS_STATUS: Option[] = [
  {
    label: "Pendente",
    value: TransactionStatusEnum.PENDING,
  },
  {
    label: "Confirmado",
    value: TransactionStatusEnum.CONFIRMED,
  },
];

export const OPTIONS_TYPE: Option[] = [
  {
    label: "Deposito",
    value: TransactionTypeEnum.DEPOSIT,
  },
  {
    label: "Retirada",
    value: TransactionTypeEnum.WITHDRAW,
  },
];
