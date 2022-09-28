const CartItem = ({ title, quantity, price }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>${price}</td>
    </tr>
  )
};


const Cart = ({ items, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  return (      
    <div className="cart">
      <h2>Your Cart</h2>
      <table className="cart-items">
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {items.map(item => {
          return (
            <CartItem key={item._id} title={item.title} quantity={item.quantity} price={item.price}/>
          )
        })}
        <tr>
          <td colSpan="3" className="total">Total: ${total.toFixed(2)}</td>
        </tr>
      </table>
      <a href="#" className="button checkout" onClick={onCheckout}>Checkout</a>
    </div>
  )
}

export default Cart;