import axios from "axios";
import { useState } from "react";

const handleUpdateProduct = async (e, id) => {
  e.preventDefault();
  try {
    const response = await axios.post(`/api/products/${id}`, {
      title: productTitle, // can't access these states here -- place this helper inside a component?
      price: productPrice,
      quantity: productQuantity
    });
  } catch (e) {
    console.error(e)
  }
  // reset & hide the edit form
}


const handleHide = e => {
  e.preventDefault();
  // hide the edit form
  return;
}

const EditForm = ({ id, title, price, quantity }) => {
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);

  return (
    <div class="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div class="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value={title} onChange={e => setProductTitle(e.target.value)}/>
        </div>

        <div class="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value={price} onChange={e => setProductPrice(e.target.value)}/>
        </div>

        <div class="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={quantity} onChange={e => setProductQuantity(e.target.value)}/>
        </div>

        <div class="actions form-actions">
          <a class="button" onClick={e => handleUpdateProduct(e, id)}>Update</a>
          <a class="button" onClick={handleHide}>Cancel</a> 
        </div>
      </form>
    </div>
  )
};

const Product = ({ id, title, quantity, price }) => {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = e => {
    setVisible(!visible)
  };

  return (
    <div class="product">
      <div class="product-details">
        <h3>{title}</h3>
        <p class="price">${price}</p>
        <p class="quantity">{quantity} left in stock</p>
        <div class="actions product-actions">
          <a class="button add-to-cart">Add to Cart</a>
          <a class="button edit" onClick={toggleVisibility}>Edit</a>
        </div>
        <a class="delete-button"><span>X</span></a>
      </div>
      {visible ? <EditForm id={id} title={title} quantity={quantity} price={price} /> : null}
      
    </div>
 )
}

export default Product;


/*
Toggle Edit Form visiblity:
- when clicking Edit
  - show the edit form

- when clicking Cancel
  - hide edit form
*/