import { create } from 'zustand'

import { Cart } from '@/src/types/cart'
import { Product } from '@/src/types/product'

type States = {
  cart: Cart[]
}

type Actions = {
  upsertCartItem: (
    product: Product,
    quantity: number
  ) => void

  removeCartItem: (
    productId: number
  ) => void

  clearCart: () => void
}

const initialState: States = {
  cart: [],
}

export const useCartStore =
  create<
    States & Actions
  >()(set => ({
    ...initialState,

    upsertCartItem: (
      product,
      quantity
    ) =>
      set(state => {
        const newCart = [
          ...state.cart,
        ]

        const productIndex =
          newCart.findIndex(
            item =>
              item.product.id ===
              product.id
          )

        if (
          productIndex < 0
        ) {
          newCart.push({
            product,
            quantity,
          })

          return {
            cart: newCart,
          }
        }
        newCart[
          productIndex
        ] = {
          ...newCart[
            productIndex
          ],
          quantity:
            newCart[
              productIndex
            ].quantity +
            quantity,
        }
        const filteredCart =
          newCart.filter(
            item =>
              item.quantity > 0
          )

        return {
          cart:
            filteredCart,
        }
      }),

    removeCartItem:
      productId =>
        set(state => ({
          cart:
            state.cart.filter(
              item =>
                item.product
                  .id !==
                productId
            ),
        })),

    clearCart: () =>
      set({
        cart: [],
      }),
  }))