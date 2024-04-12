import React from "react";
import { IBook } from "../../../../../shared/types";
import "./BookItem.scss";
import { addItem } from "../../../store/cartSlice";
import { useDispatch } from "react-redux";

interface BookItemProps {
  book: IBook;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  const dispatch = useDispatch();
  const { volumeInfo, saleInfo, openLibraryRevision } = book;

  const handleAddToCart = () => {
    dispatch(addItem(book));
  };

  return (
    <div className="book-item">
      <img src={volumeInfo?.imageLinks?.thumbnail} alt={volumeInfo.title} />
      <div className="info-wrapper">
        <h2>{volumeInfo.title}</h2>
        <p className="description">{volumeInfo.description}</p>
        <div className="details-wrapper">
          {openLibraryRevision && (
            <p>
              <b>Revisions:</b> {openLibraryRevision}
            </p>
          )}
          <p>
            <b>Pages:</b> {volumeInfo.pageCount}
          </p>

          <p>
            <b>Price:</b> {saleInfo?.listPrice?.amount}{" "}
            {saleInfo?.listPrice?.currencyCode}
          </p>

          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
