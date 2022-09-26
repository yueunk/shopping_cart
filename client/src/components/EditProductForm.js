import axios from "axios";
import { useState } from "react";

const EditProductForm = ({ product, onUpdateProduct, onToggle }) => {
  const [productTitle, setProductTitle] = useState(product.title);
  const [productPrice, setProductPrice] = useState(product.price);
  const [productQuantity, setProductQuantity] = useState(product.quantity);

  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    const updatedProduct = { ...product, title: productTitle, price: productPrice, quantity: productQuantity}
    
    onUpdateProduct(updatedProduct, onToggle)
  }

  return (
    <div class="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div class="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value={productTitle} onChange={e => setProductTitle(e.target.value)}/>
        </div>

        <div class="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value={productPrice} onChange={e => setProductPrice(e.target.value)}/>
        </div>

        <div class="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={productQuantity} onChange={e => setProductQuantity(e.target.value)}/>
        </div>

        <div class="actions form-actions">
          <a class="button" onClick={e => handleUpdateProduct(e, product._id)}>Update</a>
          <a class="button" onClick={onToggle}>Cancel</a> 
        </div>
      </form>
    </div>
  )
};

export default EditProductForm;