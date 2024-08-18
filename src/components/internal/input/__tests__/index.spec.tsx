import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import { StyledComponentProvider } from "@/shared/providers";

import { Input } from "..";

const makeSut = ({
  label,
  helperText,
}: {
  label?: string;
  helperText?: string;
}) => (
  <StyledComponentProvider>
    <Input label={label} helperText={helperText} />
  </StyledComponentProvider>
);

describe("Input", () => {
  it("Should be rendered", () => {
    render(makeSut({}));

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("Should be change value when input is changed", () => {
    render(makeSut({}));

    const inputField = screen.getByRole("textbox");

    expect(inputField).toHaveValue("");

    fireEvent.change(inputField, { target: { value: "example" } });

    expect(inputField).toHaveValue("example");
  });

  it("Should be render label", () => {
    render(makeSut({ label: "Example label" }));

    expect(screen.getByText("Example label")).toBeInTheDocument();
  });

  it("Should be render helperText", () => {
    render(makeSut({ helperText: "Example helper text" }));

    expect(screen.getByText("Example helper text")).toBeInTheDocument();
  });

  it("Should be not render label and helperText", () => {
    render(makeSut({ label: "", helperText: "" }));

    expect(screen.queryByText("Example label")).not.toBeInTheDocument();
    expect(screen.queryByText("Example helper text")).not.toBeInTheDocument();
  });
});
