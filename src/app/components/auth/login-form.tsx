'use client'

import { useState } from 'react'
import { useAuthStore } from '@/src/app/store/auth-store'

export function LoginForm() {
  const login =
    useAuthStore(
      state => state.login
    )

  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
    useState('')

  const [error, setError] =
    useState('')

  function handleLogin() {
    const success = login(
      email,
      password
    )

    if (!success) {
      setError(
        'Email ou senha inválidos'
      )
    }
  }

  return (
    <div className="space-y-4">
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

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

      <button
        onClick={handleLogin}
        className="h-12 w-full rounded-xl bg-[#C96B3B] font-semibold text-white"
      >
        Entrar
      </button>

      <div className="rounded-xl bg-zinc-100 p-3 text-sm">
        <strong>Login mockado</strong>
        <br />
        admin@raizes.com
        <br />
        123456
      </div>
    </div>
  )
}