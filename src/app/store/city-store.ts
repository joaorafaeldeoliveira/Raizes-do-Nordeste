'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CityStore = {
  city: string

  setCity: (
    city: string
  ) => void
}

export const useCityStore =
  create<CityStore>()(
    persist(
      set => ({
        city: 'cascavel',

        setCity: city =>
          set({
            city,
          }),
      }),
      {
        name: 'raizes-city',
      }
    )
  )