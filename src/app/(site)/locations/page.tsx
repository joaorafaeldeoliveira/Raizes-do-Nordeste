'use client'

import { useRouter } from 'next/navigation'

import { locations } from '@/src/data/locations'

import { useCityStore } from '@/src/app/store/city-store'

import { LocationCard } from '@/src/app/components/location/location-card'

export default function LocationsPage() {
  const router =
    useRouter()

  const setCity =
    useCityStore(
      state =>
        state.setCity
    )

  function handleSelect(
    city: string
  ) {
    setCity(
      city.toLowerCase()
    )

    router.push(
      '/cardapio'
    )
  }

  return (
    <main className="min-h-screen bg-[#F8F4ED]">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-[#5C3B1E] md:text-5xl">
            Escolha sua unidade
          </h1>

          <p className="mt-3 text-zinc-500">
            Selecione a unidade
            mais próxima de você
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {locations.map(
            location => (
              <LocationCard
                key={
                  location.id
                }
                {...location}
                onSelect={() =>
                  handleSelect(
                    location.city
                  )
                }
              />
            )
          )}
        </div>
      </div>
    </main>
  )
}