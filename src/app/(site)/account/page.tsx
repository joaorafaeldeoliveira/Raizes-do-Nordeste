// src/app/(site)/account/page.tsx

'use client'

import { AuthScreen } from '@/src/app/components/auth/auth-screen'
import { AccountMenu } from '@/src/app/components/account/account-menu'
import { ProfileHeader } from '@/src/app/components/account/profile-header'
import { useAuthStore } from '@/src/app/store/auth-store'

export default function AccountPage() {
  const user =
    useAuthStore(
      state => state.user
    )

  if (!user) {
    return <AuthScreen />
  }

  return (
    <main className="min-h-screen bg-[#F8F4ED]">
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <ProfileHeader
          name={user.name}
          email={user.email}
        />

        <AccountMenu />
      </div>
    </main>
  )
}