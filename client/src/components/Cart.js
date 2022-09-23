const CartItem = ({ title, quantity, price }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>${price}</td>
    </tr>
  )
};


const Cart = ({ items }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  return (      
    <div class="cart">
      <h2>Your Cart</h2>
      <table class="cart-items">
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
          <td colspan="3" class="total">Total: ${total}</td>
        </tr>
      </table>
      <a class="button checkout">Checkout</a>
    </div>
  )
}

export default Cart;