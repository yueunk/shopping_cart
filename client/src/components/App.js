import { useState, useEffect } from "react";
import axios from "axios";
import ProductListing from "./ProductListing";
import AddProductForm from "./AddProductForm";
import Cart from "./Cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/products"); 
      setProducts(response.data)
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCartItems = async () => {
      const response = await axios.get("/api/cartitems"); 
      setCartItems(response.data)
    }
    fetchCartItems();
  }, []);

  const handleSubmit = async (newProduct, callback) => {
    try {
      const response = await axios.post("/api/products", { ...newProduct });
      setProducts(products.concat(response.data))

      if (callback) {
        callback();
      }

    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <header>
        <h1>The Shop!</h1>
        <Cart items={cartItems}/>
      </header>
      <main>
        <ProductListing products={products}/>
        <AddProductForm onSubmit={handleSubmit}/>
      </main>
    </div>
)};

export default App;
