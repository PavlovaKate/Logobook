import { CartLine } from "../../Cart/type/type";

export type Book = {
  id: number;
  title: string;
  description: string;
  pageCount: number;
  imageSmall: string;
  image: string;
  saleability: boolean;
  quantity: number;
  amount: number;
  authorId: number;
  author: string;
  category: string;
  publisher: string;
  categoryId: number;
  publisherId: number;
  Favourites: Fav[];
  RateLines: RateLine[];
  Reviews: Review[];
  ShopLines: ShopLine[];
  TagLines: TagLine[];
  CartLines: CartLine[]
};
export type BookId = Book['id'];

export type Fav = {
  id: number;
  userId: number;
  bookId: BookId;
};

export type RateLine = {
  id: number;
  usedId: number;
  bookId: BookId;
  rate: number;
  reteId: number;
  Rate: Rate;
};

export type Rate = {
  id: number;
  bookId: BookId;
  rateAvg: number;
};

export type Review = {
  Images: Image[];
  bookId: BookId;
  id: number;
  review: string;
  userId: number;
};

export type Image = {
  id: number;
  reviewId: number;
  image: string;
};

export type Shop = {
  adress: string;
  id: number;
  latitude: number;
  longitude: number;
  workTime: string;
};

export type ShopLine = {
  id: number;
  Shop: Shop;
  bookId: BookId;
  number: number;
  shopId: Shop['id'];
};

export type TagLine = {
  id: number;
  Tag: Tag;
  bookId: BookId;
  tagId: number;
};

export type Tag = {
  id: number;
  tagName: string;
};
