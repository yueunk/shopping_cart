import { useState, useEffect } from "react";
import ProductListing from "./ProductListing";
import AddForm from "./AddForm";
import data from "../../mockData/data";

const App = () => {
  const [products, setProducts] = useState(data);

  useEffect(() => {
    setProducts(data)
  }, []);

  return (
    <main>
      <ProductListing products={products}/>
      <AddForm />
    </main>
)};

export default App;
