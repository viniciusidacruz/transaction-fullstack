"use client";

import { Fragment, useState } from "react";
import { useTheme } from "styled-components";

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

  const { COLORS } = useTheme();
  const { balance, totalPayment, totalPaid, resetAmount } = useBalanceStore();

  const formattedBalance = formatCurrency(balance);
  const formattedTotalPayment = formatCurrency(totalPayment);
  const formattedTotalPaid = formatCurrency(totalPaid);

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

        <S.DepositWrapper>
          <S.DepositContainer backgroundColor={COLORS.error}>
            😱 Total a pagar: {formattedTotalPayment}
          </S.DepositContainer>

          <S.DepositContainer backgroundColor={COLORS.success}>
            😅 Total pago: {formattedTotalPaid}
          </S.DepositContainer>
        </S.DepositWrapper>

        <S.LogoLabel href="/">TFS</S.LogoLabel>

        <S.Actions>
          <button
            type="button"
            title="Botão para fazer salvar seu saldo"
            onClick={handleVisibilityModalBalance}
          >
            Novo Saldo
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
            Nova Transação
          </button>
        </S.Actions>
      </S.Wrapper>

      <ModalTransaction
        isVisible={isVisibleModalTransaction}
        onClose={handleVisibilityModalTransaction}
      />

      <ModalBalance
        onConfirm={resetAmount}
        isVisible={isVisibleModalBalance}
        onClose={handleVisibilityModalBalance}
      />
    </Fragment>
  );
}
