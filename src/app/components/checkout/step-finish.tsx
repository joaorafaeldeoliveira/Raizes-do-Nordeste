'use client'

import { useRouter } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'
import { useCartStore } from '@/src/app/store/cart-store'
import { Button } from '@/src/app/components/ui/button'

type Props = {
  onFinish: () => void
}

export function StepFinish({onFinish}: Props) {

  const router =useRouter()

  const clearCart =
  useCartStore(
    state =>
      state.clearCart
  )

  const handleNavigate =
    () => {
      clearCart()

      onFinish()

      setTimeout(() => {
        router.push(
          '/account/orders'
        )
      }, 150)
    }

  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 sm:h-24 sm:w-24">
        <CheckCircle2
          size={48}
          className="text-green-600 sm:h-15 sm:w-15"
        />
      </div>

      <h2 className="mt-5 text-2xl font-black text-[#5C3B1E] sm:mt-6 sm:text-3xl">
        Pedido Confirmado!
      </h2>

      <p className="mt-3 max-w-sm px-4 text-sm leading-6 text-zinc-500 sm:text-base">
        Seu pedido foi enviado
        para a unidade de
        Maringá.
      </p>

      <div className="mt-5 w-full rounded-[24px] bg-[#FFF6EF] px-5 py-4 sm:mt-6">
        <p className="text-sm font-semibold text-[#5C3B1E] sm:text-base">
          Tempo estimado:
          25 minutos
        </p>
      </div>

      <Button
        onClick={
          handleNavigate
        }
        className="
          mt-6
          h-12
          w-full
          rounded-2xl
          bg-[#C96B3B]
          text-sm
          font-bold
          sm:h-14
          sm:text-base
        "
      >
        Ver meus pedidos
      </Button>
    </div>
  )
}