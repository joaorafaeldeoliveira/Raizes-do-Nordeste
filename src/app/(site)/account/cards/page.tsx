'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

import { mockCards } from '@/src/data/mock-card'

import { PaymentCard } from '@/src/app/components/account/cards/payment-card'
import { CardDialog } from '@/src/app/components/account/cards/card-dialog'

export default function CardsPage() {
  const [
    openDialog,
    setOpenDialog,
  ] = useState(false)

  const [cards, setCards] =useState(mockCards)

  function handleAddCard(
    newCard: any
  ) {
    setCards(prev => [
      ...prev,
      newCard,
    ])
  }

  return (
    <main className="min-h-screen bg-[#F8F4ED]">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-black text-[#5C3B1E] md:text-4xl">Meus Cartões</h1>
            <p className="text-zinc-500">Gerencie seuscartões</p>
          </div>

          <button
            onClick={() =>
              setOpenDialog(
                true
              )
            }
            className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#C96B3B] px-5 font-semibold text-white transition hover:opacity-90"
          >
            <Plus size={18} />
            Novo cartão
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {cards.map(card => (
            <PaymentCard
              key={card.id}
              {...card}
              selected={
                card.default
              }
            />
          ))}
        </div>
      </div>

      <CardDialog
        open={openDialog}
        onOpenChange={
          setOpenDialog
        }
        onSave={
          handleAddCard
        }
      />
    </main>
  )
}