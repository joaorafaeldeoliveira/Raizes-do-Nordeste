'use client'

import { useState } from 'react'

import { useAuthStore } from '@/src/app/store/auth-store'

export function LoginForm() {
  const login =
    useAuthStore(
      state => state.login
    )

  const [email, setEmail] =useState('')

  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  function handleLogin() { 
    setError('')

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
        type="email"
        value={email}
        onChange={e =>
          setEmail(
            e.target.value
          )
        }
        className="h-12 w-full rounded-xl border border-zinc-300 px-4 outline-none transition focus:border-[#C96B3B]"
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
        className="h-12 w-full rounded-xl border border-zinc-300 px-4 outline-none transition focus:border-[#C96B3B]"
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

      <div className="rounded-2xl bg-zinc-100 p-4 text-sm">
        <strong>
          Login mockado
        </strong>

        <div className="mt-2 text-zinc-600">
          admin@raizes.com
          <br />
          123456
        </div>
      </div>

      <p className="text-center text-xs leading-5 text-zinc-500">
        Ao entrar, seus
        dados serão usados
        apenas para acesso
        da conta, pedidos e
        entrega, conforme
        nossa Política de
        Privacidade.
      </p>
    </div>
  )
}