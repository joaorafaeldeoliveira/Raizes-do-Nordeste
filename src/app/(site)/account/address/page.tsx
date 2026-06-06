'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

import { mockAddresses } from '@/src/data/mock-addresses'

import { AddressCard } from '@/src/app/components/account/address/address-card'
import { AddressDialog } from '@/src/app/components/account/address/address-dialog'

export default function AddressPage() {
  const [
    openDialog,
    setOpenDialog,
  ] = useState(false)

  const [addresses, setAddresses] =
    useState(mockAddresses)

  function handleAddAddress(
    newAddress: any
  ) {
    setAddresses(prev => [
      ...prev,
      newAddress,
    ])
  }

  return (
    <main className="min-h-screen bg-[#F8F4ED]">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-black text-[#5C3B1E] md:text-4xl">
              Meus Endereços
            </h1>

            <p className="text-zinc-500">
              Gerencie seus
              endereços
            </p>
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
            Novo endereço
          </button>
        </div>

        <div className="space-y-5">
          {addresses.map(
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

      <AddressDialog
        open={openDialog}
        onOpenChange={
          setOpenDialog
        }
        onSave={
          handleAddAddress
        }
      />
    </main>
  )
}