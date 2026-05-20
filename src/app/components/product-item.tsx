'use client'

import { Product } from "@/src/types/product"
import Image from 'next/image'
import Link from 'next/link'

type Props = { 
    item: Product
}

export const ProductItem = ({ item }: Props) => { 
    const link = `/product/${item.id}`;

    return ( 
        <div className="bg-white border border-gray-200 rounded-sm p-6">
            <div className="flex justify-center">
                <Link href={link}>
                    <Image 
                        src={item.image}
                        alt={item.name}
                        height={200}
                        width={200}
                        className='max-w-full h-48'
                    />
                </Link>  
            </div>

            <div className="mt-9 text-lg font-bold">
                <Link href={link}>{item.name}</Link>
            </div>

            <div className="mt-3 text-2xl font-bold text-blue-600">
                <Link href={link}>
                    R$ {item.price.toFixed(2)}
                </Link>
            </div>

            <div className="mt-5 text-gray-400">
                Em até 12x no cartão
            </div>
        </div>
    )
}