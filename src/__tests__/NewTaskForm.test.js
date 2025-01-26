import { render, screen, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";

test("calls the onTaskFormSubmit callback prop when the form is submitted", () => {
  const mockSubmit = jest.fn();
  render(
    <NewTaskForm
      categories={["Code", "Food", "Money", "Misc"]}
      onTaskFormSubmit={mockSubmit}
    />
  );

  // Simulate entering task details
  fireEvent.change(screen.getByLabelText(/Details/), {
    target: { value: "Pass the tests" },
  });

  // Simulate selecting a category
  fireEvent.change(screen.getByLabelText(/Category/), {
    target: { value: "Code" },
  });

  // Simulate form submission
  fireEvent.click(screen.getByText(/Add task/));

  // Assert that the callback was called with the correct data
  expect(mockSubmit).toHaveBeenCalledWith({
    text: "Pass the tests",
    category: "Code",
  });
});

test("adds a new item to the list when the form is submitted", () => {
  const mockSubmit = jest.fn();
  render(
    <NewTaskForm
      categories={["Code", "Food", "Money", "Misc"]}
      onTaskFormSubmit={mockSubmit}
    />
  );

  // Simulate entering task details
  fireEvent.change(screen.getByLabelText(/Details/), {
    target: { value: "Pass the tests" },
  });

  // Simulate selecting a category
  fireEvent.change(screen.getByLabelText(/Category/), {
    target: { value: "Code" },
  });

  // Submit the form
  fireEvent.click(screen.getByText(/Add task/));

  // Check that the form fields are cleared after submission
  expect(screen.getByLabelText(/Details/).value).toBe("");
  expect(screen.getByLabelText(/Category/).value).toBe("Code");

  // Ensure the callback was called
  expect(mockSubmit).toHaveBeenCalledTimes(1);
});
