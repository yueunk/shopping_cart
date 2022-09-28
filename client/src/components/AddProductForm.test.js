/**
 * @jest-environment jsdom
 */

 import "@testing-library/jest-dom";
 import { render, screen } from "@testing-library/react";
 import userEvent from "@testing-library/user-event";
 import AddProductForm from "./AddProductForm";

 /*
- "contains h3 heading"

- "changes the input state when product name is changed"

- "changes the input state when product price is changed"

- "changes the input state when product quantity is changed"

- "calls onClick when form is submitted"

- "calls onClick and passed the new product in"

- "hides the form when cancel button is clicked"
 */

test("contains h3 heading", () => {
  render(<AddProductForm />);
  const heading = screen.getByRole("heading", {
    name: "Add Product",
    level: 3,
  });
  expect(heading).toBeInTheDocument();
});

test("changes the input state when product name is changed", async () => {
  const user = userEvent.setup();
  const handleSubmit = jest.fn();
  render(<AddProductForm onClick={handleSubmit} />);
  const inputProductName = screen.getByRole("textbox", { name: "Product Name" });
  await user.type(inputProductName, "Laptop");
  expect(inputProductName).toHaveValue("Laptop");
});

test("changes the input state when product price is changed", async () => {
  const user = userEvent.setup();
  const onSubmit = jest.fn();
  render(<AddProductForm onSubmit={onSubmit} />);
  const inputProductPrice = screen.getByRole("textbox", { name: "Price" });
  await user.type(inputProductPrice, "1000");
  expect(inputProductPrice).toHaveValue("1000");
});

test("changes the input state when product quantity is changed", async () => {
  const user = userEvent.setup();
  const onSubmit = jest.fn();
  render(<AddProductForm onSubmit={onSubmit} />);
  const inputQuantity = screen.getByRole("textbox", { name: "Quantity" });
  await user.type(inputQuantity, "2");
  expect(inputQuantity).toHaveValue("2");
});

test("calls onSubmit when form is submitted", async () => {
  const user = userEvent.setup();
  const onSubmit = jest.fn();
  render(<AddProductForm onSubmit={onSubmit} />);
  const addButton = screen.getByRole("link", { name: "Add" }); 
  await user.click(addButton);
  expect(onSubmit.mock.calls.length).toBe(1);
});

test("calls onClick and passed the new product in", async () => {
  const user = userEvent.setup();
  const onSubmit = jest.fn();
  render(<AddProductForm onSubmit={onSubmit} />);
  const addButton = screen.getByRole("link", { name: "Add" });

  const inputProductName = screen.getByRole("textbox", { name: "Product Name" });
  const inputProductPrice = screen.getByRole("textbox", { name: "Price" });
  const inputProductQuantity = screen.getByRole("textbox", { name: "Quantity" });

  await user.type(inputProductName, "Pencil");
  await user.type(inputProductPrice, "1");
  await user.type(inputProductQuantity, "10");

  const newProduct = { title: inputProductName.value, price: Number(inputProductPrice.value), quantity: Number(inputProductQuantity.value) };

  await user.click(addButton);

  expect(onSubmit.mock.calls[0][0]).toEqual(newProduct);
});

test("hides the form when cancel button is clicked", async () => {
  const user = userEvent.setup();
  render(<AddProductForm />)
  const cancelButton = screen.getByRole("link", { name: "Cancel" });
  await user.click(cancelButton);
  const hidden = screen.getByRole("link", { name: "Cancel", hidden: true });
  expect(hidden).toBeInTheDocument();
});