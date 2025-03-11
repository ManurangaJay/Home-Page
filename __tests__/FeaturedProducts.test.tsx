import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import FeaturedProducts from "../app/homepage/FeaturedProducts";
import { useCategory } from "../context/CategoryContext";
import "@testing-library/jest-dom";

jest.mock("axios");
jest.mock("../context/CategoryContext");

const mockProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 1000,
    image: "https://via.placeholder.com/150",
    description: "Description for Product 1",
    rating: 4,
  },
  {
    id: 2,
    name: "Product 2",
    price: 2000,
    image: "https://via.placeholder.com/150",
    description: "Description for Product 2",
    rating: 5,
  },
];

const mockUseCategory = useCategory as jest.Mock;

describe("FeaturedProducts", () => {
  beforeEach(() => {
    mockUseCategory.mockReturnValue({ selectedCategoryId: null });
    (axios.get as jest.Mock).mockResolvedValue({ data: mockProducts });

    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  test("fetches and displays featured products on initial render", async () => {
    render(<FeaturedProducts />);

    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
    });

    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:3001/products?section=featured&page=0&limit=4"
    );
  });

  test("clears products and resets page when category changes", async () => {
    mockUseCategory.mockReturnValue({ selectedCategoryId: 5 });

    render(<FeaturedProducts />);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "http://localhost:3001/products?section=featured&page=0&limit=4&category=5"
      );
    });
  });

  test("loads more products when 'View More' button is clicked", async () => {
    render(<FeaturedProducts />);

    const viewMoreButton = screen.getByText("View More");
    fireEvent.click(viewMoreButton);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "http://localhost:3001/products?section=featured&page=1&limit=4"
      );
    });
  });

  test("handles API error gracefully", async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error("API Error"));

    render(<FeaturedProducts />);

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith(
        "Error fetching featured products:",
        expect.any(Error)
      );
    });
  });
});
