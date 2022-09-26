import axios from "axios";
import { useState } from "react";
import EditProductForm from "./EditProductForm";

const Product = ({ product, onUpdateProduct, onUpdateCart, onDeleteProduct }) => {
  const [visible, setVisible] = useState(false);

  const addToCartClass = Number(product.quantity) === 0 ? "button add-to-cart disabled" : "button add-to-cart";
  
  const handleToggle = () => {
    setVisible(!visible);
  };

  const reduceQuantity = () => {
    const updatedProduct = { ...product, quantity: product.quantity - 1 };
    
    onUpdateProduct(updatedProduct);
  }
  
  const handleAddToCart = (e, product) => {
    e.preventDefault();

    if (product.quantity === 0 ) {
      alert("Out of Stock");
    } else {
      onUpdateCart(product, reduceQuantity);
    }
  }

  const handleDeleteProduct = (e, id) => {
    e.preventDefault();

    onDeleteProduct(id);
  }

  return (
    <div class="product">
      <div class="product-details">
        <h3>{product.title}</h3>
        <p class="price">${product.price}</p>
        <p class="quantity">{product.quantity} left in stock</p>
        {visible ? <EditProductForm product={product} onUpdateProduct={onUpdateProduct} onToggle={handleToggle}/> : null}
        <div class="actions product-actions">
          <a class={addToCartClass} onClick={e => handleAddToCart(e, product)}>Add to Cart</a>
          <a class="button edit" onClick={handleToggle}>Edit</a>
        </div>
        <a class="delete-button" onClick={e => handleDeleteProduct(e, product._id)}><span>X</span></a>
      </div>
    </div>
  );
}

export default Product;
