import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import axios from "axios";
import AddProductModal from "../app/manage-products/AddProductModal";
import { jest } from "@jest/globals";
import fetchMock from "jest-fetch-mock";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockCategories = [
  { id: 3, name: "Electronics & Gadgets" },
  { id: 4, name: "Home Appliances" },
  { id: 5, name: "Fashion & Accessories" },
];

const mockOnSave = jest.fn();
const mockOnClose = jest.fn();

describe("AddProductModal", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    fetchMock.resetMocks();
  });

  test("renders modal when isOpen is true", () => {
    render(
      <AddProductModal
        isOpen={true}
        onSave={mockOnSave}
        onClose={mockOnClose}
      />
    );
    expect(screen.getByText("Add New Product")).toBeInTheDocument();
  });

  test("fetches and displays categories in dropdown", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockCategories));

    render(
      <AddProductModal
        isOpen={true}
        onSave={mockOnSave}
        onClose={mockOnClose}
      />
    );

    const categorySelect = screen.getByLabelText(/category/i);

    await waitFor(() => {
      expect(screen.getByText("Electronics & Gadgets")).toBeInTheDocument();
      expect(screen.getByText("Home Appliances")).toBeInTheDocument();
      expect(screen.getByText("Fashion & Accessories")).toBeInTheDocument();
    });

    fireEvent.change(categorySelect, { target: { value: "3" } });
    expect(categorySelect).toHaveValue("3");
  });

  test("handles fetch error when fetching categories", async () => {
    fetchMock.mockRejectOnce(new Error("Failed to fetch categories"));

    render(
      <AddProductModal
        isOpen={true}
        onSave={mockOnSave}
        onClose={mockOnClose}
      />
    );

    await waitFor(() => {
      expect(screen.getByText("No Category")).toBeInTheDocument();
    });
  });
});
