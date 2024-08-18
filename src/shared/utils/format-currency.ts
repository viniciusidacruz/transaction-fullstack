export function formatCurrency(amount: number | null | undefined) {
  if (amount === null || amount === undefined) return;

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount);
}
