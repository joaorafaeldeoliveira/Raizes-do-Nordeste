'use client'

import { Check } from 'lucide-react'

type Props = {
  current:
    | 'received'
    | 'preparing'
    | 'ready'
    | 'finished'
}

export function OrderTimeline({
  current,
}: Props) {
  const steps = [
    {
      key: 'received',
      label: 'Recebido',
    },

    {
      key: 'preparing',
      label: 'Em preparo',
    },

    {
      key: 'ready',
      label:
        'Pronto para retirada',
    },

    {
      key: 'finished',
      label: 'Finalizado',
    },
  ]

  const currentIndex =
    steps.findIndex(
      step =>
        step.key === current
    )

  return (
    <div className="mt-6">
      <div className="flex justify-between gap-2">
        {steps.map(
          (step, index) => {
            const completed =
              index <=
              currentIndex

            return (
              <div
                key={step.key}
                className="flex flex-1 flex-col items-center"
              >
                <div
                  className={`
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  ${
                    completed
                      ? 'border-[#C96B3B] bg-[#C96B3B] text-white'
                      : 'border-zinc-300 text-zinc-400'
                  }
                `}
                >
                  {completed && (
                    <Check
                      size={18}
                    />
                  )}
                </div>

                <span className="mt-2 text-center text-xs text-zinc-500">
                  {step.label}
                </span>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}