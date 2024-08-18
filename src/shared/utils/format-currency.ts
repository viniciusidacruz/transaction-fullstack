/**
 * Formata um valor numérico para o formato de moeda brasileira (BRL).
 *
 * @param amount - O valor numérico a ser formatado. Pode ser `number`, `null` ou `undefined`.
 * @returns Uma string formatada como moeda BRL se o valor for válido, ou `undefined` se o valor for `null` ou `undefined`.
 */
export function formatCurrency(amount: number | null | undefined) {
  if (amount === null || amount === undefined) return;

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount);
}
