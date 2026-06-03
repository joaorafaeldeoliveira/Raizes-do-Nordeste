'use client'

import {MapPin,ChevronDown,} from 'lucide-react'

import { stores } from '@/src/data/stores'
import { useCityStore } from '@/src/app/store/city-store'

export function StoreSelector() {

  const city =useCityStore(state => state.city)

  const setCity = useCityStore(state => state.setCity)

  return (
    <div className="mb-6 rounded-[28px] bg-white p-4 shadow-sm">
      <span className="mb-2 block text-sm font-medium text-zinc-500">
        Unidade selecionada
      </span>

      <div className="relative">
        <MapPin
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C96B3B]"
          size={20}
        />

        <select
          value={city}
          onChange={e =>
            setCity(
              e.target.value
            )
          }
          className="h-14 w-full appearance-none rounded-2xl border border-zinc-200 bg-[#F8F4ED] pl-12 pr-12 text-[#5C3B1E] outline-none"
        >
          {stores.map(store => (
            <option
              key={store.id}
              value={store.id}
            >
              {store.city} -{' '}
              {store.state}
            </option>
          ))}
        </select>

        <ChevronDown
          className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
          size={18}
        />
      </div>
    </div>
  )
}