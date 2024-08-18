"use client";

import { format } from "date-fns";
import { Download } from "lucide-react";
import { TransactionStatusEnum, TransactionTypeEnum } from "@prisma/client";

import { formatCurrency } from "@/shared/utils";

import { Wrapper } from "./styles";
import { DownloadCSVProps } from "./types";

/**
 * Componente para download de transações em formato CSV.
 *
 * @param label - O rótulo a ser exibido no botão de download. Se não for fornecido, será exibido "Desconhecido".
 * @param transactions - Uma lista de transações a ser exportada como CSV. Cada transação contém informações como UID, nome, status, valor, data, tipo e categoria.
 */
export function DownloadCSV({ label, transactions }: DownloadCSVProps) {
  const hasLabel = !!label.length;

  const headerCSV = [
    { label: "ID transação", key: "uid" },
    { label: "Nome da transação", key: "name" },
    { label: "Status", key: "status" },
    { label: "Valor", key: "amount" },
    { label: "Data da transação", key: "createdAt" },
    { label: "Tipo", key: "type" },
    { label: "Categoria", key: "category" },
  ];

  const titleStatus: Record<TransactionStatusEnum, string> = {
    [TransactionStatusEnum.PENDING]: "Pendente",
    [TransactionStatusEnum.CONFIRMED]: "Confirmado",
  };

  const titleType: Record<TransactionTypeEnum, string> = {
    [TransactionTypeEnum.DEPOSIT]: "Deposito",
    [TransactionTypeEnum.WITHDRAW]: "Retirada",
  };

  const dataCSV = transactions.map((transaction) => ({
    uid: transaction.uid,
    name: transaction.name,
    status: titleStatus[transaction.status],
    amount: formatCurrency(transaction.amount),
    createdAt: format(new Date(transaction.createdAt), "dd/MM/yyyy"),
    type: titleType[transaction.type],
    category: transaction.category,
  }));

  return (
    <Wrapper
      data={dataCSV}
      headers={headerCSV}
      filename="transactions.csv"
      target="_blank"
      enclosingCharacter={`'`}
    >
      {hasLabel ? label : "Desonhecido"}

      <Download size={16} />
    </Wrapper>
  );
}
