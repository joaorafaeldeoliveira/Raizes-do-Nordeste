// src/components/account/profile-header.tsx

'use client'

import { UserRound, LogOut } from 'lucide-react'
import { useAuthStore } from '@/src/app/store/auth-store'

type Props = {
  name: string
  email: string
}

export function ProfileHeader({
  name,
  email,
}: Props) {
  const logout = useAuthStore(
    state => state.logout
  )

  function handleLogout() {
    logout()
  }

  return (
    <section className="relative overflow-hidden rounded-[30px] bg-[#5C3B1E] p-6 text-white shadow-xl">
      <button
        onClick={handleLogout}
        className="absolute right-5 top-5 z-20 flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm transition hover:bg-white/20"
      >
        <LogOut size={18} />
        Sair
      </button>

      <div className="relative z-10 flex items-center gap-5">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#D9A441] bg-[#F4E3D7] text-[#5C3B1E] shadow-lg">
          <UserRound size={42} />
        </div>

        <div>
          <span className="text-sm text-[#E7D2B8]">
            Seja bem-vindo ao
          </span>

          <h1 className="text-3xl font-bold">
            Raízes do Nordeste 🌵
          </h1>

          <h2 className="mt-3 text-xl font-semibold">
            Olá, {name}
          </h2>

          <p className="text-[#F4E3D7]">
            {email}
          </p>
        </div>
      </div>
    </section>
  )
}