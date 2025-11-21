
'use client'

import { useCartContext } from "../providers/CartProvider";

export default function Cart() {
  const { isOpen, setIsOpen, cartItems, deleteCartItem } = useCartContext();

  const handleConfirmOrder = () => {
    console.log('handleConfirmOrder');
    setIsOpen(false)
  }

  return (
    <>
      <div className="cart" style={{ display: isOpen ? 'flex' : 'none' }}>
        <div className="cart-body">
          <div className="cart-title">Корзина</div>
          <div className="cart-total">Общая сумма: <span>{cartItems.reduce((acc, item) => acc + item.price * item.count, 0)}</span> руб</div>

          <div className="cart-wrapper">
            {cartItems.length === 0 && (
              <div id="cart-empty">
                Ваша корзина пока пуста
              </div>
            )}
            {cartItems.length > 0 && (cartItems.map(product =>
              <div key={product.id} className="card">
                {product.sale ? <div className="card-sale">🔥Hot Sale🔥</div> : ''}
                <div className="card-img-wrapper">
                  <span className="card-img-top"
                    style={{ backgroundImage: `url('${product.img}')` }}></span>
                </div>
                <div className="card-body justify-content-between">
                  <div className="card-price">{product.price} ₽ <span className="card-count">{product.count} штук</span></div>
                  <h5 className="card-title">{product.title}</h5>

                  <button className="btn btn-primary" onClick={() => deleteCartItem(product)}>удалить 1</button>
                </div>
              </div>
            ))}
          </div>
          {cartItems.length > 0 && <button className="btn btn-primary cart-confirm" onClick={handleConfirmOrder}>Оформить заказ</button>}
          <div className="cart-close" onClick={() => setIsOpen(false)}></div>
        </div>
      </div>
    </>
  )
}