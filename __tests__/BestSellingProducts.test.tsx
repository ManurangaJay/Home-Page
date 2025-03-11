import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import BestSellingProducts from "../app/homepage/BestSellingProducts";
import { useCategory } from "../context/CategoryContext";
import "@testing-library/jest-dom";

jest.mock("axios");
jest.mock("../context/CategoryContext");

const mockProducts = [
  {
    id: 1,
    name: "Best Seller 1",
    price: 1500,
    image: "https://via.placeholder.com/150",
    description: "Description for Best Seller 1",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Best Seller 2",
    price: 2500,
    image: "https://via.placeholder.com/150",
    description: "Description for Best Seller 2",
    rating: 5,
  },
];

const mockUseCategory = useCategory as jest.Mock;

describe("BestSellingProducts", () => {
  beforeEach(() => {
    mockUseCategory.mockReturnValue({ selectedCategoryId: null });
    (axios.get as jest.Mock).mockResolvedValue({ data: mockProducts });

    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  test("fetches and displays best-selling products on initial render", async () => {
    render(<BestSellingProducts />);

    await waitFor(() => {
      expect(screen.getByText("Best Seller 1")).toBeInTheDocument();
      expect(screen.getByText("Best Seller 2")).toBeInTheDocument();
    });

    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:3001/products?section=best-selling&page=0&limit=4"
    );
  });

  test("clears products and resets page when category changes", async () => {
    mockUseCategory.mockReturnValue({ selectedCategoryId: 10 });

    render(<BestSellingProducts />);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "http://localhost:3001/products?section=best-selling&page=0&limit=4&category=10"
      );
    });
  });

  test("loads more products when 'View More' button is clicked", async () => {
    render(<BestSellingProducts />);

    await waitFor(() => {
      expect(screen.getByText("Best Seller 1")).toBeInTheDocument();
      expect(screen.getByText("Best Seller 2")).toBeInTheDocument();
    });

    const viewMoreButton = screen.getByText("View More");
    fireEvent.click(viewMoreButton);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "http://localhost:3001/products?section=best-selling&page=1&limit=4"
      );
    });
  });

  test("handles API error gracefully", async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error("API Error"));

    render(<BestSellingProducts />);

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith(
        "Error fetching best-selling products:",
        expect.any(Error)
      );
    });
  });
});
