import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import axios from "axios";
import TodaysDeals from "../app/homepage/TodaysDeals";
import { useCategory } from "../context/CategoryContext";
import "@testing-library/jest-dom";

jest.mock("axios");
jest.mock("../context/CategoryContext");

const mockDeals = [
  {
    id: 1,
    name: "Deal Product 1",
    price: 500,
    image: "https://via.placeholder.com/150",
    description: "Description for Deal Product 1",
    rating: 4,
  },
  {
    id: 2,
    name: "Deal Product 2",
    price: 800,
    image: "https://via.placeholder.com/150",
    description: "Description for Deal Product 2",
    rating: 5,
  },
];

const mockUseCategory = useCategory as jest.Mock;

beforeAll(() => {
  window.HTMLElement.prototype.scrollTo = jest.fn(); // Mocking scrollTo
});

describe("TodaysDeals", () => {
  beforeEach(() => {
    mockUseCategory.mockReturnValue({ selectedCategoryId: null });
    (axios.get as jest.Mock).mockResolvedValue({ data: mockDeals });

    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  test("fetches and displays today's deals on initial render", async () => {
    render(<TodaysDeals />);

    await waitFor(() => {
      expect(screen.getByText("Deal Product 1")).toBeInTheDocument();
      expect(screen.getByText("Deal Product 2")).toBeInTheDocument();
    });

    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:3001/products?section=deals&page=0&limit=20"
    );
  });

  test("handles API error gracefully", async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error("API Error"));

    render(<TodaysDeals />);

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith(
        "Error fetching today's deals:",
        expect.any(Error)
      );
    });
  });
});
