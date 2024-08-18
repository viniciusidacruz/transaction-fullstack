import { Transaction } from "@prisma/client";

export interface DetailsProps {
  transaction?: Transaction | null;
}
