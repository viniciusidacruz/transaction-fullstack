"use client";

import Link from "next/link";
import { Eye, Trash } from "lucide-react";
import { useTheme } from "styled-components";
import { Fragment, useEffect, useState } from "react";
import { TransactionStatusEnum, TransactionTypeEnum } from "@prisma/client";

import { deleteTransaction } from "@/app/actions";
import { useBalanceStore } from "@/shared/stores";
import { formatCurrency, formatDate } from "@/shared/utils";

import * as S from "./styles";
import { TableProps } from "./types";
import { HEADER_TABLE } from "./utils";
import { ModalRemove } from "./components/modal-remove";

/**
 * Componente de tabela para exibir transações financeiras.
 *
 * @param transactions - Um array de objetos de transação que serão exibidos na tabela.
 */
export function Table({ transactions }: TableProps) {
  const [transactionId, setTransactionId] = useState<string | null>(null);

  const { COLORS } = useTheme();
  const { updateTotal } = useBalanceStore();

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

  useEffect(() => {
    if (!transactions.length) {
      localStorage.removeItem("@balance_store");

      return;
    }

    updateTotal(transactions);
  }, [transactions]);

  const hasTransactions = !!transactions.length;

  return (
    <Fragment>
      <S.Table>
        <S.Header>
          {HEADER_TABLE.map((h) => (
            <span key={h}>{h}</span>
          ))}
        </S.Header>

        {hasTransactions ? (
          <S.List>
            {transactions.map((tb) => {
              const formattedBalance = formatCurrency(tb.amount);
              const formattedDate = formatDate(tb.createdAt);

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
