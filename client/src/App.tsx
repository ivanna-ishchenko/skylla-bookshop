import { useEffect, useState } from "react";
import axios from "axios";
import { IBook, IBooksResponse } from "./types";
import Header from "./components/Header/Header";
import BookList from "./components/BookList/BookList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import "./App.scss";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const [books, setBooks] = useState<IBook[]>([]);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get<IBooksResponse>(
          "https://www.googleapis.com/books/v1/volumes?q=nosql"
        );
        setBooks(response.data.items);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <Header cartItemCount={cartItems.length} />
      <div className="wrapper">
        <BookList books={books} />
        {cartItems.length > 0 && <ShoppingCart />}
      </div>
    </div>
  );
}

export default App;
