import { z } from "zod";
import { schemaTransaction } from "./schema";

export interface ModalTransactionProps {
  isVisible: boolean;
  onClose: () => void;
  transactionId?: string;
}

export type SchemaTransaction = z.infer<typeof schemaTransaction>;
