import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import DeleteProductButton from "../app/manage-products/DeleteProductButton";
import { jest } from "@jest/globals";

jest.mock("axios");

const mockOnDelete = jest.fn();

describe("DeleteProductButton", () => {
  const productId = 1;
  const productName = "Test Product";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders delete button", () => {
    render(
      <DeleteProductButton
        productId={productId}
        productName={productName}
        onDelete={mockOnDelete}
      />
    );

    const deleteButton = screen.getByTestId("main-delete-button");
    expect(deleteButton).toBeInTheDocument();
  });

  test("opens the delete confirmation modal when delete button is clicked", () => {
    render(
      <DeleteProductButton
        productId={productId}
        productName={productName}
        onDelete={mockOnDelete}
      />
    );

    const deleteButton = screen.getByTestId("main-delete-button");
    fireEvent.click(deleteButton);

    const modal = screen.getByText(/are you sure you want to delete/i);
    expect(modal).toBeInTheDocument();
  });

  test("calls handleDelete and onDelete when delete is confirmed", async () => {
    const deleteMock = jest.spyOn(axios, "delete").mockResolvedValueOnce({});

    render(
      <DeleteProductButton
        productId={productId}
        productName={productName}
        onDelete={mockOnDelete}
      />
    );

    fireEvent.click(screen.getByTestId("main-delete-button"));

    fireEvent.click(screen.getByTestId("modal-delete-button"));
    await waitFor(() =>
      expect(deleteMock).toHaveBeenCalledWith(
        `http://localhost:3001/products/${productId}`
      )
    );

    expect(mockOnDelete).toHaveBeenCalledWith(productId);
  });

  test("closes the modal when close button is clicked", () => {
    render(
      <DeleteProductButton
        productId={productId}
        productName={productName}
        onDelete={mockOnDelete}
      />
    );

    fireEvent.click(screen.getByTestId("main-delete-button"));

    fireEvent.click(screen.getByTestId("modal-cancel-button"));

    const modal = screen.queryByText(/are you sure you want to delete/i);
    expect(modal).not.toBeInTheDocument();
  });
});
