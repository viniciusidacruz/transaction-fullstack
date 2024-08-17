"use client";

import { Fragment, useState } from "react";

import { formatCurrency } from "@/shared/utils";
import { ModalTransaction } from "@/components";

import * as S from "./styles";
import { Redirect } from "./components/redirect";

export function Header() {
  const [isVisibleModalTransaction, setIsVisibleModalTransaction] =
    useState(false);

  const formattedBalance = formatCurrency(100);
  const formattedWithdraw = formatCurrency(10);

  const handleVisibilityModalTransaction = () =>
    setIsVisibleModalTransaction((prevState) => !prevState);

  return (
    <Fragment>
      <S.Wrapper>
        <S.HighlightText>SALDO ATUAL</S.HighlightText>

        <S.Balance>{formattedBalance}</S.Balance>

        <S.DepositLastContainer>
          😱 Total a pagar: {formattedWithdraw}
        </S.DepositLastContainer>

        <S.LogoLabel href="/">TFS</S.LogoLabel>

        <S.Actions>
          <Redirect
            label="Histórico"
            path="/historico"
            title="Botão para listar o histórico de transações"
          />

          <Redirect
            label="Início"
            path="/"
            title="Voltar para página principal"
          />

          <button
            type="button"
            title="Botão para fazer nova transaçao"
            onClick={handleVisibilityModalTransaction}
          >
            <span>Nova Transação</span>
          </button>
        </S.Actions>
      </S.Wrapper>

      <ModalTransaction
        isVisible={isVisibleModalTransaction}
        onClose={handleVisibilityModalTransaction}
      />
    </Fragment>
  );
}
