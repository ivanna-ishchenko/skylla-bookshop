import { Request, Response } from "express";
import axios from "axios";
import { IBook } from "../../shared/types";

export const getBooks = async (req: Request, res: Response) => {
  try {
    let apiUrl =
      "https://www.googleapis.com/books/v1/volumes?filter=paid-ebooks&q=nosql";

    console.log({ apiUrl });
    const response = await axios.get(apiUrl);

    const books: IBook[] = response.data.items;

    const filteredBooks: IBook[] = books.filter(
      (book: IBook) => book.volumeInfo.maturityRating !== "MATURE"
    );

    const isbns: string[] = filteredBooks
      .map((book: IBook) =>
        book.volumeInfo.industryIdentifiers
          ? book.volumeInfo.industryIdentifiers[0].identifier
          : null
      )
      .filter((isbn: string | null): isbn is string => isbn !== null);

    const fetchRevisionNumbers = async (
      isbns: string[]
    ): Promise<{ [isbn: string]: number }> => {
      try {
        const response = await axios.get(
          `https://openlibrary.org/api/books?bibkeys=${isbns
            .map((isbn) => `ISBN:${isbn}`)
            .join(",")}&jscmd=details&format=json`
        );
        const revisionNumbers: { [isbn: string]: number } = {};
        for (const isbn of isbns) {
          const data = response.data[`ISBN:${isbn}`];
          if (data && data.details) {
            revisionNumbers[isbn] = data.details.revision;
          }
        }
        return revisionNumbers;
      } catch (error) {
        console.error("Error fetching revision numbers:", error);
        return {};
      }
    };

    const revisionNumbers = await fetchRevisionNumbers(isbns);

    const booksWithRevisions: IBook[] = filteredBooks.map((book: IBook) => {
      const isbn = book.volumeInfo.industryIdentifiers
        ? book.volumeInfo.industryIdentifiers[0].identifier
        : null;
      if (isbn && revisionNumbers[isbn] && revisionNumbers[isbn] > 1) {
        return { ...book, openLibraryRevision: revisionNumbers[isbn] };
      }
      return book;
    });

    res.json(booksWithRevisions);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
