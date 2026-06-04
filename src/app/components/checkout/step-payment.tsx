'use client'

import { useState } from 'react'

import { Button } from '@/src/app/components/ui/button'

import { mockCards } from '@/src/data/mock-card'

import { PaymentCard } from '../account/cards/payment-card'

type Props = {
  setStep: (
    step: any
  ) => void
}

export function StepPayment({
  setStep,
}: Props) {
  const [selectedCard, setSelectedCard] =
    useState('1')

  const [paymentMethod, setPaymentMethod] =
    useState<
      'card' | 'pix'
    >('card')

  return (
    <div className="space-y-5">
      <div className="flex gap-3">
        <button
          onClick={() =>
            setPaymentMethod(
              'card'
            )
          }
          className={`
            flex-1 rounded-2xl border p-4 font-semibold
            ${
              paymentMethod ===
              'card'
                ? 'border-[#C96B3B] bg-[#FFF6EF]'
                : 'border-zinc-200'
            }
          `}
        >
          Cartão
        </button>

        <button
          onClick={() =>
            setPaymentMethod(
              'pix'
            )
          }
          className={`
            flex-1 rounded-2xl border p-4 font-semibold
            ${
              paymentMethod ===
              'pix'
                ? 'border-[#C96B3B] bg-[#FFF6EF]'
                : 'border-zinc-200'
            }
          `}
        >
          PIX
        </button>
      </div>

      {paymentMethod ===
        'card' && (
        <div className="space-y-4">
          {mockCards.map(
            card => (
              <button
                key={card.id}
                className="w-full text-left"
                onClick={() =>
                  setSelectedCard(
                    card.id
                  )
                }
              >
                <PaymentCard
                  {...card}
                  selected={
                    selectedCard ===
                    card.id
                  }
                />
              </button>
            )
          )}
        </div>
      )}

      {paymentMethod ===
        'pix' && (
        <div className="rounded-[28px] bg-zinc-50 p-6 text-center">
          <h3 className="font-bold">
            Pagamento via PIX
          </h3>

          <p className="mt-2 text-sm text-zinc-500">
            O QR Code será
            enviado após
            confirmar o pedido.
          </p>
        </div>
      )}

      <Button
        className="h-12 w-full rounded-2xl bg-[#C96B3B]"
        onClick={() =>
          setStep(
            'finished'
          )
        }
      >
        Finalizar Pedido
      </Button>
    </div>
  )
}