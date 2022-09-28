/**
 * @jest-environment jsdom
 */

 import "@testing-library/jest-dom";
 import { render, screen } from "@testing-library/react";
 import userEvent from "@testing-library/user-event";
 import Cart from "./Cart";


 const cartItems = [
  {
    _id: "1one",
    title: "Amazon Kindle E-reader",
    quantity: 1,
    price: 79.99
  },
  {
    _id: "2two",
    title: "Apple 10.5-Inch iPad Pro",
    quantity: 2,
    price: 649.99
  },
 ];
 /*
- "contains h2 heading"
- "total is calculated correctly"
- "calls onCheckout when checkout button is clicked"

 */

test("contains h2 heading", () => {
  render(<Cart items={cartItems} />) ;
  const heading = screen.getByRole("heading", {
    name: "Your Cart",
    level: 2,
  });
  expect(heading).toBeInTheDocument();
});

test("total is calculated correctly", () => {
  render(<Cart items={cartItems} />);
  const total = screen.getByRole("row", { name: "Total: $1379.97" });
  expect(total).toBeInTheDocument();
});

test("calls onCheckout when checkout button is clicked", async () => {
  const user = userEvent.setup();
  const onCheckout = jest.fn();
  render(<Cart items={cartItems} onCheckout={onCheckout}/>);
  const checkoutButton = screen.getByRole("link", { name: "Checkout" });

  await user.click(checkoutButton); // why doesn't it work?
  const total = screen.getByRole("row", { name: /Total/ });
  expect(total.textContent).toBe("Total: $0.00");
});