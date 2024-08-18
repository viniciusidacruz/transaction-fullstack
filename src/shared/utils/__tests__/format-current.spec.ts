import { formatCurrency } from "../format-currency";

describe("Format currency", () => {
  it("should format currency correctly", () => {
    const formattedAmount = formatCurrency(1000);

    const expectedFormattedAmount = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(1000);

    expect(formattedAmount).toBe(expectedFormattedAmount);
  });

  it("should handle null or undefined values", () => {
    const formattedAmount = formatCurrency(null);
    expect(formattedAmount).toBeUndefined();

    const formattedAmount2 = formatCurrency(undefined);
    expect(formattedAmount2).toBeUndefined();
  });
});
