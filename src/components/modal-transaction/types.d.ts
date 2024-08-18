import { z } from "zod";
import { schemaTransaction } from "./schema";
import { Transaction } from "@prisma/client";

export interface ModalTransactionProps {
  isVisible: boolean;
  onClose: () => void;
  transaction?: Transaction;
}

export type SchemaTransaction = z.infer<typeof schemaTransaction>;
