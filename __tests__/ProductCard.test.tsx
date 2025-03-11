import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "../app/components/ProductCard";
import "@testing-library/jest-dom";

jest.spyOn(window, "alert").mockImplementation(() => {});

const mockProduct = {
  image: "https://via.placeholder.com/320x192",
  name: "Test Product",
  price: 1000,
  discountedPrice: 800,
  description: "This is a test product description.",
  rating: 4,
  reviewsCount: 150,
  isDeal: true,
};

describe("ProductCard", () => {
  test("renders product card correctly", () => {
    render(<ProductCard {...mockProduct} />);

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();

    const prices = screen.getAllByText(/LKR/);

    expect(prices.length).toBe(2);

    expect(prices[0].parentElement).toHaveTextContent("1000");

    expect(prices[1].parentElement).toHaveTextContent("800");

    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();

    const productImage = screen.getByAltText(mockProduct.name);
    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute(
      "src",
      expect.stringContaining(encodeURIComponent(mockProduct.image))
    );
  });

  test("displays discounted price when there is a deal", () => {
    render(<ProductCard {...mockProduct} />);

    const discountedPrice = screen.getByText(
      mockProduct.discountedPrice.toString(),
      { exact: false }
    );

    expect(discountedPrice).toBeInTheDocument();

    const originalPrice = screen.getByText(mockProduct.price.toString(), {
      exact: false,
    });
    expect(originalPrice).toHaveClass("line-through");
  });

  test("does not show discounted price when there is no deal", () => {
    render(<ProductCard {...{ ...mockProduct, isDeal: false }} />);

    const discountedPrice = screen.queryByText(
      mockProduct.discountedPrice.toString(),
      { exact: false }
    );
    expect(discountedPrice).not.toBeInTheDocument();

    const originalPrice = screen.getByText(mockProduct.price.toString(), {
      exact: false,
    });
    expect(originalPrice).not.toHaveClass("line-through");
  });

  test("renders correct number of stars based on rating", () => {
    render(<ProductCard {...mockProduct} />);
    const stars = screen.getAllByText("★");

    expect(stars.length).toBe(5);
    expect(
      stars.filter((star) => star.classList.contains("text-green-800"))
    ).toHaveLength(mockProduct.rating);
  });

  test("clicking the favorite button toggles the favorite status", async () => {
    render(<ProductCard {...mockProduct} />);

    const buttons = screen.getAllByRole("button");
    const favoriteButton = buttons[0];

    const svgIcon = favoriteButton.querySelector("svg");

    expect(svgIcon).toHaveClass("text-black");

    userEvent.click(favoriteButton);

    await waitFor(() => {
      expect(svgIcon).toHaveClass("text-red-600");
    });

    userEvent.click(favoriteButton);

    await waitFor(() => {
      expect(svgIcon).toHaveClass("text-black");
    });
  });

  test("renders product description correctly", () => {
    render(<ProductCard {...mockProduct} />);
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
  });
});
