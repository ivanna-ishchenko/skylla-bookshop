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

export interface IBook {
  id: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
}

export interface IBooksResponse {
  kind: string;
  totalItems: number;
  items: IBook[];
}

export interface ICartItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
}
