import { Plus } from 'lucide-react'

import { mockAddresses } from '@/src/data/mock-addresses'
import { AddressCard } from '@/src/app/components/account/address/address-card'

export default function AddressPage() {
  return (
    <main className="min-h-screen bg-[#F8F4ED]">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black text-[#5C3B1E]">
              Meus Endereços
            </h1>

            <p className="text-zinc-500">
              Gerencie seus endereços
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-2xl bg-[#C96B3B] px-5 py-3 font-semibold text-white">
            <Plus size={18} />
            Novo endereço
          </button>
        </div>

        <div className="">
          {mockAddresses.map(
            address => (
              <AddressCard
                key={address.id}
                {...address}
                selected={
                  address.default
                }
              />
            )
          )}
        </div>
      </div>
    </main>
  )
}