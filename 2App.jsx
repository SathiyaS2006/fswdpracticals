import { useState } from "react";
import BookCard from "./assets/2OnlineBookStoreApplication/BookStore.jsx";
import Cart from "./assets/2OnlineBookStoreApplication/Cart.jsx";
import "./App.css";

function App() {
  const books = [
    { id: 1, name: "Java Programming", price: 650 },
    { id: 2, name: "Python Basics", price: 550 },
    { id: 3, name: "Web Development Guide", price: 700 }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="container">
      <h1>📚 Online Book Store</h1>

      <div className="layout">
        <div>
          <h2>Available Books</h2>
          <div className="product-list">
            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>

        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default App;
