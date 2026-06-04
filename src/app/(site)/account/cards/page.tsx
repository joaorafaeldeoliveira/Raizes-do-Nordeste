import { Plus } from 'lucide-react'

import { mockCards } from '@/src/data/mock-card'
import { PaymentCard } from '@/src/app/components/account/cards/payment-card'

export default function CardsPage() {
    
  return (
    <main className="min-h-screen bg-[#F8F4ED]">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black text-[#5C3B1E]">
              Meus Cartões
            </h1>
          </div>

          <button className="flex items-center gap-2 rounded-2xl bg-[#C96B3B] px-5 py-3 text-white">
            <Plus size={18} />
            Novo cartão
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {mockCards.map(card => (
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
    </main>
  )
}