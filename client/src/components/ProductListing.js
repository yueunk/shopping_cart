import Product from "./Product";

const ProductListing = ({ products }) => {
  return (
    <div class="product-listing">
      <h2>Products</h2>   
      {products.map(({ id, title, quantity, price }) => {
        return <Product key={id} title={title} quantity={quantity} price={price}/>;
      })}
    </div>
  );
};

export default ProductListing;