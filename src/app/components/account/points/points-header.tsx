import { Gift } from 'lucide-react'

type Props = {
  name: string
  points: number
}

export function PointsHeader({name,points,}: Props) {
    
  const nextReward = 1000
  const progress = (points / nextReward) * 100

  return (
    <section className="overflow-hidden rounded-[32px] bg-[#C96B3B] p-6 text-white shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-sm uppercase tracking-wider text-orange-100">
            Programa de Fidelidade
          </span>

          <h1 className="mt-2 text-3xl font-bold">
            Pontos do Sertão 
          </h1>

          <p className="mt-2 text-orange-100">
            Olá, {name}
          </p>
        </div>

        <div className="hidden md:flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
          <Gift size={40} />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-6xl font-black leading-none">
          {points}
        </h2>

        <span className="text-2xl font-bold">
          pontos
        </span>

        <p className="mt-3 text-orange-100">
          Faltam {nextReward - points} pontos
          para desbloquear seu próximo prêmio
        </p>

        <div className="mt-4 h-4 overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-white"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
    </section>
  )
}