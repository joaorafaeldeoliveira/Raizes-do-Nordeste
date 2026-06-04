import { mockOrders } from '@/src/data/mock-orders'

import { OrderCard } from '@/src/app/components/account/orders/order-card'

export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-[#F8F4ED]">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-[#5C3B1E]">
            Meus Pedidos
          </h1>

          <p className="text-zinc-500">
            Acompanhe seus pedidos
          </p>
        </div>

        <div className="">
          {mockOrders.map(
            order => (
              <OrderCard
                key={order.id}
                order={order}
              />
            )
          )}
        </div>
      </div>
    </main>
  )
}