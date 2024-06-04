import { UserId } from "../../Auth/type/type";

export type Cart = {
  id: number;
  userId: UserId;
  cartStatus: boolean;
  totalAmount: number;
  orderStatus: string;
  CartLines: CartLine[];
}

export type CartLine = {
  id: number;
  bookId: number;
  cartId: number
  count: number
}