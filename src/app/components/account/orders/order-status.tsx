'use client'

type Props = {
  status:
    | 'received'
    | 'preparing'
    | 'ready'
    | 'finished'
}

export function OrderStatus({
  status,
}: Props) {
  const map = {
    received: {
      label: 'Recebido',
      className:
        'bg-yellow-100 text-yellow-700',
    },

    preparing: {
      label: 'Em preparo',
      className:
        'bg-orange-100 text-orange-700',
    },

    ready: {
      label: 'Pronto para retirada',
      className:
        'bg-blue-100 text-blue-700',
    },

    finished: {
      label: 'Finalizado',
      className:
        'bg-green-100 text-green-700',
    },
  }

  return (
    <span
      className={`
      rounded-full
      px-4
      py-2
      text-sm
      font-semibold
      ${map[status].className}
    `}
    >
      {map[status].label}
    </span>
  )
}