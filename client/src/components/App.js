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
      const response = await axios.get("/api/cart"); 
      setCartItems(response.data)
    }
    fetchCartItems();
  }, []);

  const handleSubmit = async (newProduct, callback) => {
    if (newProduct.quantity >= 0) {
      try {
        const response = await axios.post("/api/products", { ...newProduct });
        setProducts(products.concat(response.data))

        if (callback) {
          callback();
        }

      } catch (e) {
        console.error(e)
      }
    } else {
      alert("the quantity must be at least 0")
    }
  } 

  const handleUpdateProduct = async (updatedProduct, callback) => {
    if (updatedProduct.quantity >= 0) {
      try {
        await axios.put(`/api/products/${updatedProduct._id}`, { ...updatedProduct });
  
        setProducts(products.map(prod => prod._id === updatedProduct._id ? updatedProduct : prod))
  
        if (callback) {
          callback();
        }
      } catch (e) {
        console.error(e)
      }
    } else {
      alert("the quantity must be at least 0")
    }
  }
  
  const handleUpdateCart = async (addedItem, callback) => {
    try {
      const response = await axios.post("/api/add-to-cart", { productId: addedItem._id } );
      const currentItem = response.data.item;
    
      if (cartItems.find(item => item.productId === currentItem.productId)) {
        console.log("inside map block")
        setCartItems(cartItems.map(item => item.productId === currentItem.productId ? {...item, quantity: item.quantity + 1 } : item))
      } else {
        console.log("inside concat block")
        setCartItems(cartItems.concat({ ...currentItem, quantity: 1 }))
      }
    
      if (callback) {
        callback(); // triggers handleUpdateProduct
      }
    } catch (e) {
      console.error(e);
    }
  }
  
  const handleCheckout = async () => {
    try {
      await axios.post("/api/checkout", {});
      setCartItems([]);
    } catch (e) {
      console.error(e);
    }
  }

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
      console.log("after deleting product")
      setProducts(products.filter(product => product._id !== id ));
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <header>
        <h1>The Shop!</h1>
        <Cart items={cartItems} onCheckout={handleCheckout}/>
      </header>
      <main>
        <ProductListing products={products} onUpdateProduct={handleUpdateProduct} onUpdateCart={handleUpdateCart} onDeleteProduct={handleDeleteProduct}/>
        <AddProductForm onSubmit={handleSubmit}/>
      </main>
    </div>
)};

export default App;
