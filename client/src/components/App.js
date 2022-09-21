import { useState, useEffect } from "react";
import axios from "axios";
import ProductListing from "./ProductListing";
import AddForm from "./AddForm";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/products"); 
      setProducts(response.data)
    }
    fetchProducts();
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
    <main>
      <ProductListing products={products}/>
      <AddForm onSubmit={handleSubmit}/>
    </main>
)};

export default App;
