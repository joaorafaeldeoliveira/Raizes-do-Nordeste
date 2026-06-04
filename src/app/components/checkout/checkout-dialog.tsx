'use client'

import { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/src/app/components/ui/dialog'

import { Progress } from '@/src/app/components/ui/progress'

import { CheckoutSteps } from '@/src/types/checkout-steps'

import { StepReview } from './step-review'
import { StepAddress } from './step-address'
import { StepPayment } from './step-payment'
import { StepFinish } from './step-finish'

type Props = {
  open: boolean
  onOpenChange: (
    open: boolean
  ) => void
}

export const CheckoutDialog = ({
  open,
  onOpenChange,
}: Props) => {
  const [step, setStep] =
    useState<CheckoutSteps>(
      'review'
    )

  let progressPct = 0

  switch (step) {
    case 'review':
      progressPct = 25
      break

    case 'address':
      progressPct = 50
      break

    case 'payment':
      progressPct = 75
      break

    case 'finished':
      progressPct = 100
      break
  }

  return (
    <Dialog
      open={open}
      onOpenChange={
        onOpenChange
      }
    >
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {step ===
              'review' &&
              'Revisar Pedido'}

            {step ===
              'address' &&
              'Escolha o endereço'}

            {step ===
              'payment' &&
              'Pagamento'}

            {step ===
              'finished' &&
              'Pedido enviado'}
          </DialogTitle>
        </DialogHeader>

        <Progress
          value={progressPct}
        />

        <div className="mt-6">
          {step ===
            'review' && (
            <StepReview
              setStep={
                setStep
              }
            />
          )}

          {step ===
            'address' && (
            <StepAddress
              setStep={
                setStep
              }
            />
          )}

          {step ===
            'payment' && (
            <StepPayment
              setStep={
                setStep
              }
            />
          )}

          {step ===
            'finished' && (
            <StepFinish
            onFinish={() =>
              onOpenChange(false)
            }
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}