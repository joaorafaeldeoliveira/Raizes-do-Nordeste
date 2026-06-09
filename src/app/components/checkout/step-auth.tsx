'use client'

import { useEffect } from 'react'

import { useAuthStore } from '@/src/app/store/auth-store'

import { LoginForm } from '@/src/app/components/auth/login-form'
import { RegisterForm } from '@/src/app/components/auth/register-form'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/app/components/ui/tabs'

type Props = {
  setStep: (
    step: any
  ) => void
}

export function StepAuth({setStep,}: Props) {
  const isAuthenticated =
    useAuthStore(
      state =>
        state.isAuthenticated
    )

  useEffect(() => {
    if (
      isAuthenticated
    ) {
      setStep(
        'review'
      )
    }
  }, [
    isAuthenticated,
    setStep,
  ])

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#5C3B1E]">
          Faça login para
          continuar
        </h2>

        <p className="text-sm text-zinc-500">
          Entre ou crie sua conta para finalizar o pedido
        </p>
      </div>

      <Tabs defaultValue="login">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">
            Entrar
          </TabsTrigger>

          <TabsTrigger value="register">
            Criar conta
          </TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <LoginForm />
        </TabsContent>

        <TabsContent value="register">
          <RegisterForm />
        </TabsContent>
      </Tabs>
    </div>
  )
}