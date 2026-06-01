import Image from 'next/image'
import { Gift } from 'lucide-react'

type Props = {
  title: string
  points: number
  image?: string
}

export function RewardCard({title,points,image,}: Props) {

  return (

    <div className="rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 ">
      <div className="flex gap-4">
        <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[#F4E3D7]">
          {image ? (
            <Image
              src={image}
              alt={title}
              width={80}
              height={80}
              className="rounded-xl object-cover"
            />
          ) : (
            <Gift
              size={40}
              className="text-[#C96B3B]"
            />
          )}
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-[#5C3B1E]">{title}</h3>

            <p className="mt-1 font-semibold text-[#C96B3B]">{points} pontos</p>
          </div>

          <button className="w-fit rounded-xl bg-[#C96B3B] px-5 py-2 font-semibold text-white transition hover:opacity-90">
            Resgatar
          </button>
        </div>
      </div>
    </div>
  )
}