"use client";

import { Fragment, useState } from "react";
import { TransactionStatusEnum, TransactionTypeEnum } from "@prisma/client";

import { formatCurrency, formatDate } from "@/shared/utils";
import { Button, ModalTransaction } from "@/components";

import * as S from "./styles";
import { DetailsProps } from "./types";

/**
 * Componente para exibir os detalhes de uma transação financeira.
 *
 * @param transaction - O objeto de transação cujos detalhes serão exibidos.
 */
export function Details({ transaction }: DetailsProps) {
  const [isVisibleModalEdit, setIsVisibleModalEdit] = useState(false);

  if (!transaction) return;

  const handleVisibilityModalEdit = () =>
    setIsVisibleModalEdit((prevState) => !prevState);

  const formattedBalance = formatCurrency(transaction.amount);
  const formattedDate = formatDate(transaction.createdAt);

  const valueStatus: Record<TransactionStatusEnum, string> = {
    [TransactionStatusEnum.CONFIRMED]: "Confirmado",
    [TransactionStatusEnum.PENDING]: "Pendente",
  };

  const valueType: Record<TransactionTypeEnum, string> = {
    [TransactionTypeEnum.DEPOSIT]: "Deposito",
    [TransactionTypeEnum.WITHDRAW]: "Retirada",
  };

  return (
    <Fragment>
      <S.Wrapper>
        <S.Group>
          <strong>Nome:</strong>

          <span>{transaction.name}</span>
        </S.Group>

        <S.Group>
          <strong>Categoria:</strong>

          <span>{transaction.category}</span>
        </S.Group>

        <S.Group>
          <strong>Valor:</strong>

          <span className="text-green-500">{formattedBalance}</span>
        </S.Group>

        <S.Group>
          <strong>Data cadastrada:</strong>

          <span>{formattedDate}</span>
        </S.Group>

        <S.Group>
          <strong>Tipo de Transação:</strong>

          <span>{valueType[transaction.type]}</span>
        </S.Group>

        <S.Group>
          <strong>Status da Transação:</strong>

          <span>{valueStatus[transaction.status]}</span>
        </S.Group>

        <Button
          className="sm:ml-auto text-lg !text-white !border-white"
          variant="outline"
          onClick={handleVisibilityModalEdit}
        >
          Editar
        </Button>
      </S.Wrapper>

      <ModalTransaction
        isVisible={isVisibleModalEdit}
        transaction={transaction}
        onClose={handleVisibilityModalEdit}
      />
    </Fragment>
  );
}
