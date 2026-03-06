function Cart({ cart, removeFromCart }) {

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>🧾 Order Summary</h2>

      {cart.length === 0 ? (
        <p className="empty">No books selected</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <span>
                  {item.name} – ₹{item.price}
                </span>

                <button
                  className="remove"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
