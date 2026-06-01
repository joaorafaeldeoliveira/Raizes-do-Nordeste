'use client'

import { useState } from 'react'
import { useAuthStore } from '@/src/app/store/auth-store'

export function RegisterForm() {
  const register =
    useAuthStore(
      state => state.register
    )

  const [name, setName] =
    useState('')

  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
    useState('')

  function handleRegister() {
    register(
      name,
      email,
      password
    )
  }

  return (
    <div className="space-y-4">
      <input
        placeholder="Nome"
        value={name}
        onChange={e =>
          setName(e.target.value)
        }
        className="h-12 w-full rounded-xl border px-4"
      />

      <input
        placeholder="Email"
        value={email}
        onChange={e =>
          setEmail(e.target.value)
        }
        className="h-12 w-full rounded-xl border px-4"
      />

      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={e =>
          setPassword(
            e.target.value
          )
        }
        className="h-12 w-full rounded-xl border px-4"
      />

      <button
        onClick={handleRegister}
        className="h-12 w-full rounded-xl bg-[#C96B3B] font-semibold text-white"
      >
        Criar conta
      </button>
    </div>
  )
}