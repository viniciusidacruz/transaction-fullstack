import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import { StyledComponentProvider } from "@/shared/providers";

import { Select } from "..";

const mockOnChange = jest.fn();
const mockOnClearState = jest.fn();

const makeSut = () => (
  <StyledComponentProvider>
    <Select
      defaultValue="Default value"
      onChangeValue={mockOnChange}
      onClearFilter={mockOnClearState}
      options={[
        {
          label: "example1",
          value: "example1",
        },
        {
          label: "example2",
          value: "example2",
        },
      ]}
    />
  </StyledComponentProvider>
);

describe("Select", () => {
  it("should render the select component", () => {
    render(makeSut());

    expect(screen.getByText("Default value")).toBeInTheDocument();
  });

  it("should display options when button is clicked", () => {
    render(makeSut());

    const button = screen.getByText("Default value");
    const selectMenu = screen.getByTestId("select_menu");

    expect(selectMenu).not.toBeVisible();

    fireEvent.click(button);

    expect(selectMenu).toBeVisible();

    expect(screen.getByText("example1")).toBeInTheDocument();
    expect(screen.getByText("example2")).toBeInTheDocument();
  });

  it("should call onClearFilter when clear filter button is clicked", () => {
    render(makeSut());

    const button = screen.getByText("Default value");
    fireEvent.click(button);

    const clearButton = screen.getByTitle("Limpar os filtros");
    fireEvent.click(clearButton);

    expect(mockOnClearState).toHaveBeenCalled();
  });

  it("should close the dropdown menu when clicking outside the component", () => {
    render(makeSut());

    const button = screen.getByText("Default value");
    fireEvent.click(button);

    expect(screen.getByText("example2")).toBeInTheDocument();

    fireEvent.mouseDown(document);

    expect(screen.queryByText("example2")).not.toBeVisible();
  });
});
