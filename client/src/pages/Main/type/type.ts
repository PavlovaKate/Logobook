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
  categoryId: number;
  publisherId: number;
};

export type BookId = Book['id'];