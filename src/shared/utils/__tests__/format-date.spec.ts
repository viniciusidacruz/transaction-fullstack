import { formatDate } from "../format-date";

describe("Format date", () => {
  it("Should be return date formatted", () => {
    const formattedDate = formatDate("2024-01-01");

    expect(formattedDate).toBe("01/01/2024");
  });

  it("Should be not return date formatted", () => {
    const formattedDate = formatDate(null);

    expect(formattedDate).toBe("");
  });
});
