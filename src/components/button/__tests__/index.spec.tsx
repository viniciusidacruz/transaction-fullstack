import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Button } from "..";
import { StyledComponentProvider } from "@/shared/providers";

const makeSut = (isLoading?: boolean) => (
  <StyledComponentProvider>
    <Button isLoading={isLoading}>Click me</Button>
  </StyledComponentProvider>
);

describe("Button", () => {
  it("should be renders a text", () => {
    render(makeSut());

    const titleButton = screen.getByText("Click me");
    const titleLoadingButton = screen.queryByText("Carregando...");

    expect(titleButton).toBeInTheDocument();
    expect(titleLoadingButton).not.toBeInTheDocument();
  });

  it("should be render state of loading", () => {
    render(makeSut(true));

    const titleButton = screen.queryByText("Click me");
    const titleLoadingButton = screen.getByText("Carregando...");

    expect(titleLoadingButton).toBeInTheDocument();
    expect(titleButton).not.toBeInTheDocument();
    expect(titleLoadingButton).toBeDisabled();
  });
});
