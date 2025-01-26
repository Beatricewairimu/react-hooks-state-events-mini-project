import "@testing-library/jest-dom"; // Import jest-dom matchers
import { render, screen } from "@testing-library/react";
import Task from "../components/Task";

test("displays the task text and category", () => {
  render(<Task text="Example Task" category="Example Category" />);

  // Check if task text is rendered
  expect(screen.getByText("Example Task")).toBeInTheDocument();

  // Check if task category is rendered
  expect(screen.getByText("Example Category")).toBeInTheDocument();
});
