'use client'

import { IProduct } from "../models/product.model"
import { useCartContext } from "../providers/CartProvider";

export default function AddToCartButton({product}: {product: IProduct}) {
  const {addCartItem} = useCartContext();


  return (
    <button className="btn btn-primary" onClick={() => addCartItem(product)}>В корзину</button>
  )
}