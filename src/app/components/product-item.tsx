'use client'

import { Product } from "@/src/types/product"
import { Button } from "@/src/app/components/ui/button";
import Image from 'next/image'
import Link from 'next/link'
import { useToast } from "../hooks/use-toast";
import { ToastAction } from "@/src/app/components/ui/toast";
import { useCartStore } from "@/src/app/store/cart-store";


type Props = { 
    item: Product
}

export const ProductItem = ({ item }: Props) => { 
    const {toast} = useToast();
    const {upsertCartItem} = useCartStore(state=>state);
    const handleAddButton = () => { 
        console.log(item)
        upsertCartItem(item,1);
        toast({
            title:"Adicionado ao carrinho!",
            description: item.name,
            action:<ToastAction altText="fechar">Fechar</ToastAction>
        });
    }

    return ( 
        <div className="bg-white border border-gray-200 rounded-sm p-6">
            <div className="flex justify-center">
                <Link href={'/'}>
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
                <Link href={'/'}>{item.name}</Link>
            </div>

            <div className="mt-3 text-2xl font-bold text-[#A66E41]">
                <Link href={'/'}>
                    R$ {item.price.toFixed(2)}
                </Link>
            </div>
             <div className="mt-3 flex flex-col gap-2">
                <p className="text-lg">{item.name}</p>
                <p className="text-sm opacity-50">R$ {item.price.toFixed(2)}</p>
                <Button variant="outline"
                onClick={handleAddButton}
                >Adicionar</Button>

            </div>
        </div>
    )
}