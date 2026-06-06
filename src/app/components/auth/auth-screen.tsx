'use client'

import { useState } from 'react'
import { LoginForm } from './login-form'
import { RegisterForm } from './register-form'

export function AuthScreen() {
  const [mode, setMode] =
    useState<'login' | 'register'>(
      'login'
    )

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F4ED] px-4">
      <div className="w-full max-w-md rounded-[32px] bg-white p-8">
        <div className="mb-8 text-center">
          <h1 className="mt-4 text-3xl font-bold text-[#5C3B1E]">
            Raízes do Nordeste
          </h1>

          <p className="text-zinc-500">
            {mode === 'login'
              ? 'Entre na sua conta'
              : 'Crie sua conta'}
          </p>
        </div>

        {mode === 'login' ? (
          <LoginForm />
        ) : (
          <RegisterForm />
        )}

        <button
          onClick={() =>
            setMode(
              mode === 'login'
                ? 'register'
                : 'login'
            )
          }
          className="mt-5 w-full text-sm text-[#C96B3B]"
        >
          {mode === 'login'
            ? 'Criar conta'
            : 'Já tenho conta'}
        </button>
      </div>
    </div>
  )
}