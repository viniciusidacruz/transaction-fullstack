"use client";

import Link from "next/link";
import { format } from "date-fns";
import { Eye, Trash } from "lucide-react";
import { Fragment, useState } from "react";
import { useTheme } from "styled-components";
import { TransactionStatusEnum, TransactionTypeEnum } from "@prisma/client";

import { formatCurrency } from "@/shared/utils";

import * as S from "./styles";
import { TableProps } from "./types";
import { ModalRemove } from "./components/modal-remove";
import { deleteTransaction } from "@/app/actions";

export function Table({ transactions }: TableProps) {
  const [transactionId, setTransactionId] = useState<string | null>(null);

  const { COLORS } = useTheme();

  const handleOpenModalRemove = (uid: string) => setTransactionId(uid);

  const handleRemoveTransaction = async () => {
    if (!transactionId) return;

    try {
      await deleteTransaction(transactionId);

      setTransactionId(null);
    } catch (err) {
      throw err;
    }
  };

  const hasTransactions = !!transactions.length;

  return (
    <Fragment>
      <S.Table>
        <S.Header>
          <span>Nome</span>
          <span>Valor</span>
          <span>Data</span>
          <span>Status</span>
          <span>Categoria</span>
          <span>Tipo</span>
          <span>Ação</span>
        </S.Header>

        {hasTransactions ? (
          <S.List>
            {transactions.map((tb) => {
              const formattedBalance = formatCurrency(tb.amount);
              const formattedDate = format(
                new Date(tb.createdAt),
                "dd/MM/yyyy"
              );

              const bgStatus: Record<TransactionStatusEnum, string> = {
                [TransactionStatusEnum.PENDING]: COLORS.warning,
                [TransactionStatusEnum.CONFIRMED]: COLORS.success,
              };

              const titleStatus: Record<TransactionStatusEnum, string> = {
                [TransactionStatusEnum.PENDING]: "Pendente",
                [TransactionStatusEnum.CONFIRMED]: "Confirmado",
              };

              const titleType: Record<TransactionTypeEnum, string> = {
                [TransactionTypeEnum.DEPOSIT]: "Deposito",
                [TransactionTypeEnum.WITHDRAW]: "Retirada",
              };

              return (
                <S.Row key={tb.uid}>
                  <S.Group>
                    <span>Nome</span>
                    <span className="hover:text-[#6EDA2A]">
                      <Link href={`/transacao/${tb.uid}`}>{tb.name}</Link>
                    </span>
                  </S.Group>

                  <S.Group>
                    <span>Valor</span>
                    <span>{formattedBalance}</span>
                  </S.Group>

                  <S.Group>
                    <span>Data</span>
                    <span>{formattedDate}</span>
                  </S.Group>

                  <S.Group>
                    <span>Status</span>

                    <S.Status bgStatus={bgStatus[tb.status]}>
                      {titleStatus[tb.status]}
                    </S.Status>
                  </S.Group>

                  <S.Group>
                    <span>Categoria</span>
                    <span>{tb.category || "-"}</span>
                  </S.Group>

                  <S.Group>
                    <span>Tipo</span>
                    <span>{titleType[tb.type]}</span>
                  </S.Group>

                  <S.Group>
                    <Link
                      href={`/transacao/${tb.uid}`}
                      title="Botão para ver detalhes da transação"
                    >
                      <Eye color={COLORS.warning} />
                    </Link>

                    <button
                      type="button"
                      title="Botão para remover transação"
                      onClick={() => handleOpenModalRemove(tb.uid)}
                    >
                      <Trash color={COLORS.error} />
                    </button>
                  </S.Group>
                </S.Row>
              );
            })}
          </S.List>
        ) : (
          <S.EmptyState>Não existe transações</S.EmptyState>
        )}
      </S.Table>

      <ModalRemove
        isVisible={!!transactionId}
        onConfirm={handleRemoveTransaction}
        onClose={() => setTransactionId(null)}
      />
    </Fragment>
  );
}
