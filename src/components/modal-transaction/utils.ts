import { Transaction } from "@/shared/types";
import { Option } from "@/components/select/types";
import { TransactionStatusEnum, TransactionTypeEnum } from "@/shared/enums";

import { SchemaTransaction } from "./types";

export const initialState = (transaction?: Transaction): SchemaTransaction => {
  const statusPayload: Record<TransactionStatusEnum, string> = {
    [TransactionStatusEnum.CONFIRMED]: "Confirmado",
    [TransactionStatusEnum.PENDING]: "Pendente",
  };

  const typePayload: Record<TransactionTypeEnum, string> = {
    [TransactionTypeEnum.DEPOSIT]: "Deposito",
    [TransactionTypeEnum.WITHDRAW]: "Retirada",
  };

  return {
    amount: transaction?.amount || 0,
    category: transaction?.category || "",
    name: transaction?.name || "",
    status: transaction ? statusPayload[transaction.status] : "Confirmado",
    type: transaction ? typePayload[transaction.type] : "Deposito",
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
