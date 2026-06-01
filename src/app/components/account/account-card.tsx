'use client'

import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
  title: string
  description?: string
  icon: LucideIcon
  href: string
  danger?: boolean
}

export function AccountCard({title,description,icon: Icon,href,danger = false,}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative overflow-hidden rounded-2xl border bg-white p-5 transition-all duration-300 hover:-translate-y-0.5',
        danger
          ? 'border-red-200 hover:border-red-400'
          : 'border-zinc-200 hover:border-[#C96B3B]'
      )}
    >
      <div
        className={cn(
          'absolute top-0 left-0 h-1 w-full',
          danger ? 'bg-red-500' : 'bg-[#C96B3B]'
        )}
      />

      <div className="flex items-start gap-4">
        <div
          className={cn(
            'flex h-14 w-14 items-center justify-center rounded-xl transition-colors',
            danger
              ? 'bg-red-100 text-red-600'
              : 'bg-[#F4E3D7] text-[#C96B3B]'
          )}
        >
          <Icon size={28} />
        </div>

        <div className="flex-1">
          <h3
            className={cn(
              'font-semibold text-lg transition-colors',
              danger
                ? 'text-red-600'
                : 'text-[#5C3B1E] group-hover:text-[#C96B3B]'
            )}
          >
            {title}
          </h3>

          {description && (
            <p className="mt-1 text-sm text-zinc-500">
              {description}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}