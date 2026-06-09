'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type User = {
  name: string
  email: string
}

type AuthStore = {
  user: User | null

  isAuthenticated: boolean

  login: (
    email: string,
    password: string
  ) => boolean

  register: (
    name: string,
    email: string,
    password: string
  ) => boolean

  logout: () => void
}

const MOCK_USER = {
  name: 'João Rafael',
  email: 'admin@raizes.com',
  password: '123456',
}

export const useAuthStore =
  create<AuthStore>()(
    persist(
      (set, get) => ({
        user: null,

        isAuthenticated: false,

        login: (
          email,
          password
        ) => {
          if (
            email ===
              MOCK_USER.email &&
            password ===
              MOCK_USER.password
          ) {
            set({
              user: {
                name:
                  MOCK_USER.name,
                email:
                  MOCK_USER.email,
              },

              isAuthenticated: true,
            })

            return true
          }
          const storedUser =
            localStorage.getItem(
              'mock-user'
            )

          if (storedUser) {
            const parsedUser =
              JSON.parse(
                storedUser
              )

            if (
              email ===
                parsedUser.email &&
              password ===
                parsedUser.password
            ) {
              set({
                user: {
                  name:
                    parsedUser.name,
                  email:
                    parsedUser.email,
                },

                isAuthenticated: true,
              })

              return true
            }
          }

          return false
        },

        register: (
          name,
          email,
          password
        ) => {
          const newUser = {
            name,
            email,
          }

          localStorage.setItem(
            'mock-user',
            JSON.stringify({
              name,
              email,
              password,
            })
          )

          set({
            user: newUser,

            isAuthenticated: true,
          })

          return true
        },

        logout: () =>
          set({
            user: null,

            isAuthenticated: false,
          }),
      }),
      {
        name: 'raizes-auth',
      }
    )
  )