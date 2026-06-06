'use client'

import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { Clock3 } from 'lucide-react'

import { Button } from '@/src/app/components/ui/button'

type Props = {
  city: string
  state: string
  address: string
  phone: string
  openHours: string
  image: string

  onSelect: () => void
}

export function LocationCard({city,state,address,phone,openHours,image,onSelect,}: Props) {
  return (
    <div className="overflow-hidden rounded-[32px] bg-white shadow-md">
      <div className="relative h-52 w-full">
        <Image
          src={image}
          alt={city}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h2 className="text-2xl font-black text-[#5C3B1E]">
            {city} - {state}
          </h2>

          <p className="text-zinc-500">
            Unidade Raízes do
            Nordeste
          </p>
        </div>

        <div className="space-y-3 text-sm text-zinc-600">
          <div className="flex gap-2">
            <MapPin
              size={18}
            />
            {address}
          </div>

          <div className="flex gap-2">
            <Clock3
              size={18}
            />
            {openHours}
          </div>
        </div>

        <Button
          onClick={
            onSelect
          }
          className="h-12 w-full rounded-2xl bg-[#C96B3B]"
        >
          Selecionar unidade
        </Button>
      </div>
    </div>
  )
}