type MATURITY = "MATURE" | "NOT_MATURE";

interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}
interface IndustryIdentifier {
  type: string;
  identifier: string;
}

interface VolumeInfo {
  title: string;
  description: string;
  pageCount?: number;
  imageLinks?: ImageLinks;
  maturityRating: MATURITY;
  industryIdentifiers?: IndustryIdentifier[];
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
  openLibraryRevision?: number;
}

export interface ICartItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
}
