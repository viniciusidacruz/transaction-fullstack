import { formatCurrency } from "@/shared/utils";
import * as S from "./styles";
import Link from "next/link";

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

      <S.Actions>
        <Link href="/historico" title="Botão para listar histórico">
          <span>Histórico</span>
        </Link>

        <button type="button" title="Botão para fazer nova transaçao">
          <span>Nova Transação</span>
        </button>

        <Link href="/categorias" title="Botão para listar categorias">
          Categorias
        </Link>
      </S.Actions>
    </S.Wrapper>
  );
}
