import { useState } from "react";

const AddProductForm = ({ onSubmit }) => {
  const [visible, setVisible] = useState(false);
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  

  const formClass = visible ? "add-form visible" : "add-form"; 

  const handleToggle = () => {
    setVisible(!visible);
    if (!visible) {
      resetInputs();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { title: product, price, quantity };
    handleToggle();
    onSubmit(newProduct, resetInputs);
  };

  const resetInputs = () => {
    setProduct("");
    setPrice(0);
    setQuantity(0);
  };

  return (
    <div className={formClass}>
      <p>
        <a className="button add-product-button" onClick={handleToggle}>
          Add A Product
        </a>
      </p>

      <h3>Add Product</h3>
      <form action="" >
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" value={product} onChange={e => setProduct(e.target.value)}/>
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input type="text" id="product-price" value={price} onChange={e => setPrice(+e.target.value)}/>
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={quantity} onChange={e => setQuantity(+e.target.value)}/>
        </div>

        <div className="actions form-actions">
          <a href="#" className="button" onClick={handleSubmit}>Add</a>
          <a href="#" className="button" onClick={handleToggle}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm;