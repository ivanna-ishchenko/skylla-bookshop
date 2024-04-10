import { useEffect, useState } from "react";
import axios from "axios";
import { Book, BooksResponse } from "./types";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get<BooksResponse>(
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
      <h1>Books</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <h2>{book.volumeInfo.title}</h2>
            <img
              src={book.volumeInfo?.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
            />
            <p>{book.volumeInfo.pageCount} pages</p>
            <p>
              {book.saleInfo?.listPrice?.amount}
              {book.saleInfo?.listPrice?.currencyCode}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
