'use client'

import {CreditCard,Check,} from 'lucide-react'

type Props = {
  brand: string
  lastDigits: string
  holder: string
  expiry: string
  selected?: boolean
}

export function PaymentCard({brand,lastDigits, holder,expiry,selected,}: Props) {
  return (
    <div
      className={`rounded-md borderp-5${selected ? 'border-[#C96B3B] bg-white':'border-zinc-200 bg-white'}`}
    >
      <div className="flex justify-between ml-4 p-4">
        <div>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4E3D7]">
            <CreditCard className="text-[#C96B3B]" />
          </div>

          <h3 className="font-bold">
            {brand}
          </h3>

          <p>
            **** {lastDigits}
          </p>

          <p className="text-sm text-zinc-500">
            {holder}
          </p>

          <p className="text-sm text-zinc-500">
            Validade {expiry}
          </p>
        </div>

        {selected && (
          <div className="rounded-full bg-[#C96B3B] p-2 text-white h-5">
            <Check size={16} />
          </div>
        )}
      </div>
    </div>
  )
}