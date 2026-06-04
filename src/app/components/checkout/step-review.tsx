'use client'

import Image from 'next/image'

import { Button } from '@/src/app/components/ui/button'
import { Separator } from '@/src/app/components/ui/separator'

import { useCartStore } from '@/src/app/store/cart-store'

type Props = {
  setStep: (
    step: any
  ) => void
}

export function StepReview({setStep,}: Props) {
  const cart = useCartStore(
    state => state.cart
  )

  const subtotal =
    cart.reduce(
      (acc, item) =>
        acc +
        item.product.price *
          item.quantity,
      0
    )

  const total = subtotal

  const totalItems =
    cart.reduce(
      (acc, item) =>
        acc + item.quantity,
      0
    )

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <h3 className="text-2xl font-bold text-[#5C3B1E]">
          Seu carrinho está vazio
        </h3>

        <p className="mt-2 text-zinc-500">
          Adicione alguns pratos do
          Raízes do Nordeste 🌵
        </p>
      </div>
    )
  }

  return (
    <div className="">
      <div className="rounded-md bg-[#FFF8F2] p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-black text-[#5C3B1E]">
              Seu Pedido
            </h3>

            <p className="text-sm text-zinc-500">
              {totalItems} item
              {totalItems > 1
                ? 's'
                : ''}{' '}
              no carrinho
            </p>
          </div>
        </div>

        <div className="gap-6 mb-5">
          {cart.map(item => (
            <div
              key={
                item.product.id
              }
              className="flex items-center justify-between rounded-2xl bg-white p-4 mb-4"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-2xl">
                  <Image
                    src={
                      item.product
                        .image
                    }
                    alt={
                      item.product
                        .name
                    }
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-bold text-[#5C3B1E]">
                    {
                      item.product
                        .name
                    }
                  </h4>

                  <p className="text-sm text-zinc-500">
                    Quantidade:{' '}
                    {
                      item.quantity
                    }
                  </p>

                  <p className="text-sm text-zinc-400">
                    R${' '}
                    {item.product.price.toFixed(
                      2
                    )}{' '}
                    cada
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold text-[#5C3B1E]">
                  R${' '}
                  {(
                    item.product
                      .price *
                    item.quantity
                  ).toFixed(
                    2
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-6" />

        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-zinc-500">
              Subtotal
            </span>

            <span className="font-medium">
              R${' '}
              {subtotal.toFixed(
                2
              )}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-zinc-500">
              Entrega
            </span>

            <span className="font-medium text-green-600">
              Grátis
            </span>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex justify-between text-xl font-black text-[#5C3B1E]">
          <span>Total</span>

          <span>
            R${' '}
            {total.toFixed(
              2
            )}
          </span>
        </div>
      </div>

      <Button
        className="h-14 w-full rounded-2xl bg-[#C96B3B] text-base font-bold"
        onClick={() =>
          setStep(
            'address'
          )
        }
      >
        Continuar compra
      </Button>
    </div>
  )
}