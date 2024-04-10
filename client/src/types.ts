interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

interface VolumeInfo {
  title: string;
  description: string;
  pageCount?: number;
  imageLinks?: ImageLinks;
}

interface ListPrice {
  amount: number;
  currencyCode: string;
}

interface SaleInfo {
  listPrice: ListPrice;
}

export interface Book {
  id: string;
  volumeInfo: VolumeInfo;
  saleInfo?: SaleInfo;
}

export interface BooksResponse {
  kind: string;
  totalItems: number;
  items: Book[];
}
