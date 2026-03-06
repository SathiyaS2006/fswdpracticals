function BookCard({ book, addToCart }) {
  return (
    <div className="product-card">
      <h3>{book.name}</h3>
      <p className="price">₹{book.price}</p>

      <button onClick={() => addToCart(book)}>
        Add to Cart
      </button>
    </div>
  );
}

export default BookCard;