import { ComponentProps } from "react";
import { Transaction } from "@prisma/client";

export interface DownloadCSVProps {
  label: string;
  transactions: Transaction[];
}
