import { useEffect, useState } from "react";
import axios from "axios";
import { IBook } from "../../shared/types";
import Header from "./components/Header/Header";
import BookList from "./components/BookList/BookList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import "./App.scss";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";

function App() {
  const [books, setBooks] = useState<IBook[]>([]);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get<IBook[]>("/api/books");
        setBooks(response.data);
        setLoading(false);
        setError(null);
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
        setError("Failed to fetch books. Please try again later.");
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <Header cartItemCount={cartItems.length} />
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <div className="wrapper">
          <BookList books={books} />
          {cartItems.length > 0 && <ShoppingCart />}
        </div>
      )}
    </div>
  );
}

export default App;
