import { TransactionStatusEnum, TransactionTypeEnum } from "@prisma/client";
import { z } from "zod";

export const schemaTransaction = z.object({
  name: z.string().min(1, { message: "Campo obrigatório" }),
  amount: z.coerce.number(),
  status: z.enum([
    TransactionStatusEnum.CONFIRMED,
    TransactionStatusEnum.PENDING,
  ]),
  category: z.string().min(1, { message: "Campo obrigatório" }),
  type: z.enum([TransactionTypeEnum.DEPOSIT, TransactionTypeEnum.WITHDRAW]),
});
