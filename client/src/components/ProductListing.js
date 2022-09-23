import Product from "./Product";

const ProductListing = ({ products, onUpdate, onUpdateCart, onDeleteProduct }) => {
  return (
    <div class="product-listing">
      <h2>Products</h2>   
      {products.map((product) => {
        return <Product key={product._id} product={product} onUpdate={onUpdate} onUpdateCart={onUpdateCart} onDeleteProduct={onDeleteProduct}/>;
      })}
    </div>
  );
};

export default ProductListing;