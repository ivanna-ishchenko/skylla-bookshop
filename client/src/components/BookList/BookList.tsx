import { IBook } from "../../../../shared/types";
import BookItem from "./BookItem/BookItem";
import "./BookList.scss";

interface IProps {
  books: IBook[];
}

const BookList: React.FC<IProps> = ({ books }) => {
  return (
    <div className="list-wrapper">
      {books.map((item, index) => (
        <BookItem key={item.id} book={item} />
      ))}
    </div>
  );
};

export default BookList;
