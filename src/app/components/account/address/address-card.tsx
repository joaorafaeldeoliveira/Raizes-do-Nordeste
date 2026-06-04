'use client'

import {
  Check,
  MapPin,
} from 'lucide-react'

type Props = {
  title: string
  street: string
  number: string
  district: string
  city: string
  state: string
  zipCode: string
  selected?: boolean
}

export function AddressCard({title,street, number, district,city,state,zipCode, selected,}: Props) {
    
  return (
    <div className={`rounded-md mb-5 border p-5 transition ${selected ? 'border-[#C96B3B] bg-white' : 'border-zinc-200 bg-white'}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4E3D7]">
            <MapPin className="text-[#C96B3B]" />
          </div>

          <div>
            <h3 className="font-bold text-[#5C3B1E]">
              {title}
            </h3>

            <p className="text-sm text-zinc-500">
              {street}, {number}
            </p>

            <p className="text-sm text-zinc-500">
              {district}
            </p>

            <p className="text-sm text-zinc-500">
              {city} - {state}
            </p>

            <p className="text-sm text-zinc-400">
              CEP {zipCode}
            </p>
          </div>
        </div>

        {selected && (
          <div className="rounded-full bg-[#C96B3B] p-2 text-white">
            <Check size={16} />
          </div>
        )}
      </div>
    </div>
  )
}