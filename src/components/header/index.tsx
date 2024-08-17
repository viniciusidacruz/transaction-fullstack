import { formatCurrency } from "@/shared/utils";

import * as S from "./styles";
import { Redirect } from "./components/redirect";

export function Header() {
  const formattedBalance = formatCurrency(100);
  const formattedWithdraw = formatCurrency(10);

  return (
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

        <button type="button" title="Botão para fazer nova transaçao">
          <span>Nova Transação</span>
        </button>

        <Redirect
          label="Categorias"
          path="/categorias"
          title="Botão para listar categorias"
        />
      </S.Actions>
    </S.Wrapper>
  );
}
