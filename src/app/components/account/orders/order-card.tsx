'use client'

import { Clock3 } from 'lucide-react'

import { OrderStatus } from './order-status'
import { OrderTimeline } from './order-timeline'

type Props = {
    order: any
}

export function OrderCard({order}: Props) {

  return (
    <div className="rounded-md mb-5 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-[#5C3B1E]">
            Pedido {order.id}
          </h3>

          <p className="text-sm text-zinc-500">
            {order.date}
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            Unidade:{' '}
            {order.unit}
          </p>
        </div>

        <OrderStatus
          status={order.status}
        />
      </div>

      <div className="">
        {order.items.map(
          (item: any) => (
            <div
              key={item.name}
              className="flex justify-between text-sm"
            >
              <span>
                {
                  item.quantity
                }
                x {item.name}
              </span>

              <span>
                R$ {item.price}
              </span>
            </div>
          )
        )}
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-zinc-500">
        <Clock3 size={16} />

        {order.estimatedTime}
      </div>

      <OrderTimeline
        current={
          order.status
        }
      />

      <div className="mt-6 border-t pt-5">
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>
            R$ {order.total}
          </span>
        </div>
      </div>
    </div>
  )
}