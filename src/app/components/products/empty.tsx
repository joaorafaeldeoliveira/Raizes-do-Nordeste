'use client'

import { PackageX, MapPin } from 'lucide-react'
import { stores } from '@/src/data/stores'
import { useCityStore } from '@/src/app/store/city-store'

type Props = {
  category?: string
}

export function ProductEmpty({
  category,
}: Props) {
  const city = useCityStore(
    state => state.city
  )

  const selectedStore = stores.find(
    item => item.id === city
  )

  return (
    <div className="flex flex-col items-center justify-center rounded-[32px] border border-dashed border-[#D9C5B2] bg-[#FFF8F2] px-6 py-14 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F4E3D7]">
        <PackageX
          size={40}
          className="text-[#C96B3B]"
        />
      </div>

      <h3 className="mt-5 text-2xl font-bold text-[#5C3B1E]">
        Nenhum item disponível
      </h3>

      <p className="mt-2 max-w-md text-zinc-500">
        No momento não temos produtos
        dessa categoria disponíveis na
        unidade de{' '}
        <span className="font-semibold text-[#5C3B1E]">
          {selectedStore?.city}
        </span>.
      </p>

      <div className="mt-5 flex items-center gap-2 rounded-full bg-[#F4E3D7] px-4 py-2 text-sm font-medium text-[#5C3B1E]">
        <MapPin size={16} />
        Unidade: {selectedStore?.city}
      </div>

      <p className="mt-4 text-sm text-zinc-400">
        Tente selecionar outra unidade
        ou confira outras categorias
      </p>
    </div>
  )
}