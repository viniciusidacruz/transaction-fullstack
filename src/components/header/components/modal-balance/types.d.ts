import { z } from "zod";

import { schemaBalance } from "./schema";

export interface ModalBalanceProps {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: (amount: number) => void;
}

export type SchemaBalance = z.infer<typeof schemaBalance>;
