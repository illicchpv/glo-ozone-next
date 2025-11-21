'use client'

import { createContext, ReactNode, useContext, useState } from "react"
import { ICartContext } from "../models/cartContext.model"
import { ICartItem } from "../models/cartItem.model"
import { IProduct } from "../models/product.model"

const CartContext = createContext<ICartContext | undefined>(undefined)

export function useCartContext() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCartContext может использоваться только внутри CartProvider')
  }
  return context
}

export default function CartProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState<ICartItem[]>([])

  const addCartItem = (product: IProduct) => {
    setCartItems((prev) => {
      const findProduct = prev.find(item => item.id === product.id)
      if (findProduct) {
        return prev.map(p => p.id === product.id ? { ...p, count: p.count + 1 } : p)
      } else {
        return [...prev, { ...product, count: 1 }]
      }
      // return prev
      // return [...prev, { ...product, count: 1 }]
    })
  }

  const deleteCartItem = (product: IProduct) => {
    setCartItems((prev) => {
      const findProduct = prev.find(item => item.id === product.id)
      if (findProduct) {
        if(findProduct.count > 1) {
          return prev.map(p => p.id === product.id ? { ...p, count: p.count - 1 } : p)
        } else {
          return prev.filter(p => p.id !== product.id)
        }
      } else {
        return prev
      }

      // return prev.filter(p => p.id !== product.id)
    })
  }

  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, cartItems, addCartItem, deleteCartItem }}>
      {children}
    </CartContext.Provider>
  )
}