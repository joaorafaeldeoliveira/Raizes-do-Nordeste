'use client'

import {
  MapPin,
  Package,
  CreditCard,
  Lock,
  Ticket,
  Star,
  Trash2,
} from 'lucide-react'

import { AccountCard } from './account-card'

export function AccountMenu() {
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      <AccountCard
        title="Meus Pedidos"
        description="Acompanhe seus pedidos nordestinos"
        icon={Package}
        href="/account/orders"
      />

      <AccountCard
        title="Endereços"
        description="Gerencie onde receber suas delícias"
        icon={MapPin}
        href="/account/address"
      />
      <AccountCard
        title="Pontos do Sertão"
        description="Ganhe benefícios e recompensas"
        icon={Star}
        href="/account/points"
      />

      <AccountCard
        title="Meus Cartões"
        description="Métodos de pagamento salvos"
        icon={CreditCard}
        href="/account/cards"
      />

      <AccountCard
        title="Alterar Senha"
        description="Atualize sua segurança"
        icon={Lock}
        href="/account/password"
      />

      <AccountCard
        title="Excluir Conta"
        description="Excluir permanentemente sua conta"
        icon={Trash2}
        href="/account/delete"
        danger
      />
    </section>
  )
}