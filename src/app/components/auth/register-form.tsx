'use client'

import Link from 'next/link'
import { useState } from 'react'

import { useAuthStore } from '@/src/app/store/auth-store'

export function RegisterForm() {
  const register =
    useAuthStore(
      state => state.register
    )

  const [name, setName] =useState('')
  const [email, setEmail] =useState('')
  const [password, setPassword] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [marketingConsent, setMarketingConsent] =useState(false)
  const [error, setError] = useState('')

  function handleRegister() {
    setError('')

    if (
      !name ||
      !email ||
      !password
    ) {
      setError(
        'Preencha todos os campos.'
      )

      return
    }

    if (!acceptTerms) {
      setError(
        'Você precisa aceitar a Política de Privacidade.'
      )

      return
    }

    register(
      name,
      email,
      password
    )

    console.log({
      lgpdConsent: true,
      marketingConsent,
    })
  }

  return (
    <div className="space-y-4">
      <input
        placeholder="Nome completo"
        value={name}
        onChange={e =>
          setName(
            e.target.value
          )
        }
        className="h-12 w-full rounded-xl border px-4 outline-none transition focus:border-[#C96B3B]"
      />

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

      <div className="rounded-2xl bg-[#FFF8F2] p-4">
        <label className="flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            checked={
              acceptTerms
            }
            onChange={e =>
              setAcceptTerms(
                e.target
                  .checked
              )
            }
            className="mt-1"
          />

          <span className="text-zinc-600">
            Li e concordo com os{' '}
            <Link href="/legal/terms" className="font-semibold text-[#C96B3B]" >
              Termos de Uso
            </Link>
            {' '}
            e com a{' '}
            <Link href="/legal/privacy" className="font-semibold text-[#C96B3B]">
              Política de Privacidade
            </Link>
            . Autorizo o uso
            dos meus dados
            para criação da
            conta e
            processamento
            dos pedidos.
          </span>
        </label>
        <label className="mt-4 flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            checked={
              marketingConsent
            }
            onChange={e =>
              setMarketingConsent(
                e.target
                  .checked
              )
            }
            className="mt-1"
          />

          <span className="text-zinc-600">
            Desejo receber
            promoções,
            novidades e
            cupons do
            Raízes do
            Nordeste.
          </span>
        </label>
      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

      <button
        onClick={
          handleRegister
        }
        className="h-12 w-full rounded-xl bg-[#C96B3B] font-semibold text-white transition hover:opacity-90"
      >
        Criar conta
      </button>

      <p className="text-center text-xs leading-5 text-zinc-500">
        Seus dados serão
        utilizados somente
        para autenticação,
        pedidos e entrega,
        conforme a LGPD.
      </p>
    </div>
  )
}