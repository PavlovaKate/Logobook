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
  RateLine: RateLine;
  Reviews: Review[];
  ShopLines: ShopLine[];
  TagLines: TagLine[];
};

export type BookId = Book['id'];

export type Fav = {
  id: number;
  usedId: number;
  bookId: number;
};

export type RateLine = {
  Rate: { rateAvg: number };
};

export type Review = {
  Images: { image: string }[];
  bookId: number;
  id: number;
  review: string;
  userId: number;
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
  bookId: number;
  number: number;
  shopId: Shop['id'];
};

export type TagLine = {
  id: number;
  Tag: Tag;
  bookId: number;
  tagId: number;
};

export type Tag = {
  id: number;
  tagname: string;
};
