"use client";

import { format } from "date-fns";
import { Edit, Trash } from "lucide-react";
import { Fragment, useState } from "react";
import { useTheme } from "styled-components";
import { TransactionStatusEnum, TransactionTypeEnum } from "@prisma/client";

import { ModalTransaction } from "@/components";
import { formatCurrency } from "@/shared/utils";

import * as S from "./styles";
import { TableProps } from "./types";
import { ModalRemove } from "./components/modal-remove";

export function Table({ transactions }: TableProps) {
  const [transactionId, setTransactionId] = useState("");
  const [isVisibleModalRemove, setIsVisibleModalRemove] = useState(false);

  const { COLORS } = useTheme();

  const handleVisibilityModalRemove = () =>
    setIsVisibleModalRemove((prevState) => !prevState);

  const handleVisibilityModalEdit = (transactionIdParam: string) =>
    setTransactionId(transactionIdParam);

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

        <S.List>
          {transactions.map((tb) => {
            const formattedBalance = formatCurrency(tb.amount);
            const formattedDate = format(new Date(tb.createdAt), "dd/MM/yyyy");

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
                  <span>{tb.name}</span>
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
                  <button
                    type="button"
                    title="Botão para editar transação"
                    onClick={() => handleVisibilityModalEdit(tb.uid)}
                  >
                    <Edit color={COLORS.warning} />
                  </button>

                  <button
                    type="button"
                    title="Botão para remover transação"
                    onClick={handleVisibilityModalRemove}
                  >
                    <Trash color={COLORS.error} />
                  </button>
                </S.Group>
              </S.Row>
            );
          })}
        </S.List>
      </S.Table>

      <ModalRemove
        onConfirm={() => {}}
        isVisible={isVisibleModalRemove}
        onClose={handleVisibilityModalRemove}
      />

      <ModalTransaction
        isVisible={!!transactionId}
        transactionId={transactionId}
        onClose={() => setTransactionId("")}
      />
    </Fragment>
  );
}
