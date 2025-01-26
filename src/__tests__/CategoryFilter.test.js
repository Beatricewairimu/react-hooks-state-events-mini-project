import "@testing-library/jest-dom"; // Import this for jest-dom matchers
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter"; // Adjust path as needed

describe("CategoryFilter", () => {
  test("displays a button for each category", () => {
    const categories = ["All", "Code", "Food"];
    const onSelectCategory = jest.fn();

    render(
      <CategoryFilter
        categories={categories}
        selectedCategory="All"
        onSelectCategory={onSelectCategory}
      />
    );

    // Check if buttons for all categories are rendered
    categories.forEach((category) => {
      const button = screen.getByText(category);
      expect(button).toBeInTheDocument(); // This checks if the button is in the DOM
    });
  });

  test("highlights the selected category", () => {
    const categories = ["All", "Code", "Food"];
    const onSelectCategory = jest.fn();

    render(
      <CategoryFilter
        categories={categories}
        selectedCategory="Code"
        onSelectCategory={onSelectCategory}
      />
    );

    // Check if the selected button has the class "selected"
    const selectedButton = screen.getByText("Code");
    expect(selectedButton).toHaveClass("selected"); // This checks if the class "selected" is applied
  });

  test("calls the onSelectCategory callback when a button is clicked", () => {
    const categories = ["All", "Code", "Food"];
    const onSelectCategory = jest.fn();

    render(
      <CategoryFilter
        categories={categories}
        selectedCategory="All"
        onSelectCategory={onSelectCategory}
      />
    );

    // Simulate a click on the "Food" button
    const foodButton = screen.getByText("Food");
    fireEvent.click(foodButton);

    // Check if the callback was called with the correct argument
    expect(onSelectCategory).toHaveBeenCalledWith("Food");
  });
});
