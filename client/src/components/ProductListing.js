import Product from "./Product";

const ProductListing = ({ products, onUpdateProduct, onUpdateCart, onDeleteProduct }) => {
  return (
    <div class="product-listing">
      <h2>Products</h2>   
      {products.map((product) => {
        return <Product key={product._id} product={product} onUpdateProduct={onUpdateProduct} onUpdateCart={onUpdateCart} onDeleteProduct={onDeleteProduct}/>;
      })}
    </div>
  );
};

export default ProductListing;