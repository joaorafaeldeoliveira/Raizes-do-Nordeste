// src/app/(site)/account/points/page.tsx

import { PointsHeader } from '@/src/app/components/account/points/points-header'
import { RewardCard } from '@/src/app/components/account/points/reward-card'

export default function PointsPage() {
  const rewards = [
    {
        title:"Crepioca",
        points:150,
    },
    {
      title: 'Cuscuz Nordestino',
      points: 300,
    },
    {
      title: 'Baião de dois',
      points: 550,
    },
    {
      title: 'Carne de sol',
      points: 700,
    },
    {
      title: 'Combo Sertão',
      points: 1000,
    },
  ]

  return (
    <main className="min-h-screen bg-[#F8F4ED]">
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <PointsHeader
          name="João Rafael"
          points={952}
        />

        <section>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#5C3B1E]">
              Recompensas disponíveis
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {rewards.map(item => (
              <RewardCard
                key={item.title}
                title={item.title}
                points={item.points}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}