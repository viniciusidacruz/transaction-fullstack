import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import { StyledComponentProvider } from "@/shared/providers";

import { Modal } from "..";

const mockOnClose = jest.fn();

const makeSut = (isVisible: boolean) => (
  <StyledComponentProvider>
    <Modal isVisible={isVisible} onClose={mockOnClose}>
      <h1>Children</h1>
    </Modal>
  </StyledComponentProvider>
);

describe("Modal", () => {
  it("Should be rendered", () => {
    render(makeSut(true));

    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it("Should be close modal when close button is clicked", () => {
    render(makeSut(true));

    const closeButton = screen.getByTestId("close_modal");

    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalled();
  });

  it("Should not render when isVisible is false", () => {
    render(makeSut(false));

    expect(screen.queryByText("Children")).not.toBeInTheDocument();
  });
});
