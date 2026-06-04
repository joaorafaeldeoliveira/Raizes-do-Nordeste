'use client'

import { useState } from 'react'
import { Button } from '@/src/app/components/ui/button'
import { mockAddresses } from '@/src/data/mock-addresses'
import { AddressCard } from '../account/address/address-card'

type Props = {
  setStep: (
    step: any
  ) => void
}

export function StepAddress({
  setStep,
}: Props) {
  const [selectedAddress, setSelectedAddress] =
    useState('1')

  return (
    <div className="space-y-5">
      {mockAddresses.map(
        address => (
          <button
            key={address.id}
            onClick={() =>
              setSelectedAddress(
                address.id
              )
            }
            className="w-full text-left"
          >
            <AddressCard
              {...address}
              selected={
                selectedAddress ===
                address.id
              }
            />
          </button>
        )
      )}

      <Button
        className="h-12 w-full rounded-2xl"
        onClick={() =>
          setStep(
            'payment'
          )
        }
      >
        Continuar
      </Button>
    </div>
  )
}