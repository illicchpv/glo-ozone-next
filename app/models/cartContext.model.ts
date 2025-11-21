import { ICartItem } from "./cartItem.model";
import { IProduct } from "./product.model";

export interface ICartContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  cartItems: ICartItem[];
  addCartItem: (product: IProduct) => void;
  deleteCartItem: (product: IProduct) => void;
}
