import React from "react";
import ReactDOM from "react-dom/client";

const Delete = () => {
  return React.createElement("a", { className: "delete-button" }, 
  React.createElement("span", null, "X"))
}

const Actions = (extraClass="") => {
  extraClass = " " + extraClass
  return React.createElement("div", { className: `actions product-actions${extraClass}` }, [
    React.createElement("a", { className: "button add-to-cart" }, "Add to Cart"),
    React.createElement("a", { className: "button edit" }, "Edit"),
  ])
} 

const Product = ({ productName, price, quantity, extraClass}) => {
  return React.createElement("div", { className: "product" }, [
    React.createElement("div", { className: "product-details" }, [
      React.createElement("h3", null, productName),
      React.createElement("p", { className: "price" }, price),
      React.createElement("p", { className: "quantity" }, quantity),
      Actions(extraClass),
      Delete()
    ])
  ])
}

const h2 = React.createElement("h2", null, "Products")

const divProduct1 = Product({ 
  productName: "Amazon Kindle E-reader", 
  price: "$79.99", 
  quantity: "5 left in stock" 
}) 

const divProduct2 = Product({ 
  productName: "Apple 10.5-Inch iPad Pro", 
  price: "$649.99", 
  quantity: "2 left in stock" 
}) 

const divProduct3 = Product({ 
  productName: "Yamaha Portable Keyboard", 
  price: "$155.99", 
  quantity: "0 left in stock", 
  extraClass: "disabled"
})

const productListing = [h2, divProduct1, divProduct2, divProduct3] 

const App = () => {
  return React.createElement("main", null, 
    React.createElement("div", { className: "product-listing" }, productListing)
)};

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(App());