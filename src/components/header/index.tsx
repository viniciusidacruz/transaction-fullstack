"use client";

import { Fragment, useState } from "react";

import { formatCurrency } from "@/shared/utils";
import { ModalTransaction } from "@/components";
import { useBalanceStore } from "@/shared/stores";

import * as S from "./styles";
import { Redirect } from "./components/redirect";
import { ModalBalance } from "./components/modal-balance";

export function Header() {
  const [isVisibleModalBalance, setIsVisibleModalBalance] = useState(false);
  const [isVisibleModalTransaction, setIsVisibleModalTransaction] =
    useState(false);

  const { balance, totalPayment, updateBalance } = useBalanceStore();

  const formattedBalance = formatCurrency(balance);
  const formattedTotalPayment = formatCurrency(totalPayment);

  const isDanger = balance <= totalPayment;

  const handleVisibilityModalTransaction = () =>
    setIsVisibleModalTransaction((prevState) => !prevState);

  const handleVisibilityModalBalance = () =>
    setIsVisibleModalBalance((prevState) => !prevState);

  return (
    <Fragment>
      <S.Wrapper isDanger={isDanger}>
        <S.HighlightText>SALDO ATUAL</S.HighlightText>

        <S.Balance>{formattedBalance}</S.Balance>

        <S.DepositLastContainer>
          😱 Total a pagar: {formattedTotalPayment}
        </S.DepositLastContainer>

        <S.LogoLabel href="/">TFS</S.LogoLabel>

        <S.Actions>
          <button
            type="button"
            title="Botão para fazer salvar seu saldo"
            onClick={handleVisibilityModalBalance}
          >
            <span>Novo Saldo</span>
          </button>

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

      <ModalBalance
        onConfirm={updateBalance}
        isVisible={isVisibleModalBalance}
        onClose={handleVisibilityModalBalance}
      />
    </Fragment>
  );
}
