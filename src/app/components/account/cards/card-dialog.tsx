'use client'

import { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/src/app/components/ui/dialog'

import { Button } from '@/src/app/components/ui/button'

type Props = {
  open: boolean
  onOpenChange: (
    open: boolean
  ) => void

  onSave: (
    card: any
  ) => void
}

export function CardDialog({
  open,
  onOpenChange,
  onSave,
}: Props) {
  const [holderName, setHolderName] =
    useState('')

  const [cardNumber, setCardNumber] =
    useState('')

  const [expiration, setExpiration] =
    useState('')

  const [brand, setBrand] =
    useState('Visa')

  function formatCardNumber(
    value: string
  ) {
    return value
      .replace(/\D/g, '')
      .replace(
        /(\d{4})(?=\d)/g,
        '$1 '
      )
      .slice(0, 19)
  }

  function maskCard(
    number: string
  ) {
    const clean =
      number.replace(
        /\s/g,
        ''
      )

    const last4 =
      clean.slice(-4)

    return `**** **** **** ${last4}`
  }

  function handleSave() {
    const newCard = {
      id: crypto.randomUUID(),

      holderName,

      number:
        maskCard(
          cardNumber
        ),

      expiration,
      brand,

      default: false,
    }

    onSave(newCard)

    onOpenChange(false)

    setHolderName('')
    setCardNumber('')
    setExpiration('')
    setBrand('Visa')
  }

  return (
    <Dialog
      open={open}
      onOpenChange={
        onOpenChange
      }
    >
      <DialogContent className="max-w-lg rounded-[32px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#5C3B1E]">
            Novo Cartão
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <input
            placeholder="Nome impresso no cartão"
            value={
              holderName
            }
            onChange={e =>
              setHolderName(
                e.target.value
              )
            }
            className="h-12 w-full rounded-xl border px-4"
          />

          <input
            placeholder="Número do cartão"
            value={
              cardNumber
            }
            onChange={e =>
              setCardNumber(
                formatCardNumber(
                  e.target
                    .value
                )
              )
            }
            className="h-12 w-full rounded-xl border px-4"
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              placeholder="MM/AA"
              value={
                expiration
              }
              onChange={e =>
                setExpiration(
                  e.target
                    .value
                )
              }
              className="h-12 rounded-xl border px-4"
            />

            <select
              value={brand}
              onChange={e =>
                setBrand(
                  e.target
                    .value
                )
              }
              className="h-12 rounded-xl border px-4"
            >
              <option>
                Visa
              </option>

              <option>
                Mastercard
              </option>

              <option>
                Elo
              </option>
            </select>
          </div>

          <div className="rounded-2xl bg-[#FFF8F2] p-4 text-sm text-zinc-600">
            Seus dados são
            utilizados apenas
            para simulação do
            pagamento e não
            armazenamos o
            número completo do
            cartão.
          </div>

          <Button
            onClick={
              handleSave
            }
            className="h-12 w-full rounded-2xl bg-[#C96B3B]"
          >
            Salvar cartão
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}