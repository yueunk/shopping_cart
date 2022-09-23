import { useState } from "react";

const AddProductForm = ({ onSubmit }) => {
  const [visible, setVisible] = useState(false);
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  

  const formClass = visible ? "add-form visible" : "add-form"; 

  const toggleVisibility = (e) => {
    setVisible(!visible);
    if (!visible) {
      resetInputs();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { title: product, price, quantity };
    onSubmit(newProduct, resetInputs)
  };

  const resetInputs = () => {
    setProduct("");
    setPrice(0);
    setQuantity(0);
  };

  return (
    <div class={formClass}>
      <p>
        <a class="button add-product-button" onClick={toggleVisibility}>
          Add A Product
        </a>
      </p>

      <h3>Add Product</h3>
      <form action="" >
        <div class="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value={product} onChange={e => setProduct(e.target.value)}/>
        </div>

        <div class="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value={price} onChange={e => setPrice(e.target.value)}/>
        </div>

        <div class="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={quantity} onChange={e => setQuantity(e.target.value)}/>
        </div>

        <div class="actions form-actions">
          <a class="button" onClick={handleSubmit}>Add</a>
          <a class="button" onClick={toggleVisibility}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm;