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
import { StepAuth } from './step-auth'

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
    'auth'
  )

  let progressPct = 0

  switch (step) {
    case 'auth':
      progressPct = 20
      break
    case 'review':
      progressPct = 40
      break

    case 'address':
      progressPct = 65
      break

    case 'payment':
      progressPct = 85
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
            {step === 'auth' &&
              'Entrar'}
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
            'auth' && (
            <StepAuth
              setStep={
                setStep
              }
            />
          )}
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