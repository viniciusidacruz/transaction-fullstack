import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import { StyledComponentProvider } from "@/shared/providers";

import { FieldSearch } from "..";

const mockOnChange = jest.fn();

const makeSut = () => (
  <StyledComponentProvider>
    <FieldSearch defaultValue="example" onSearch={mockOnChange} />
  </StyledComponentProvider>
);

describe("FieldSearch", () => {
  it("should be change value when search is changed", () => {
    render(makeSut());

    const inputField = screen.getByRole("textbox");

    expect(inputField).toHaveValue("example");

    fireEvent.change(inputField, { target: { value: "new_example" } });

    expect(inputField).toHaveValue("new_example");
  });

  it("should be submit when search is changed", () => {
    render(makeSut());

    const submitSearchValue = screen.getByTestId("submit_search");

    fireEvent.click(submitSearchValue);

    expect(mockOnChange).toHaveBeenCalledWith("example");
  });
});
