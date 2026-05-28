import { Banners} from '@/src/app/components/home/banners';
import {products} from "@/src/data/products";
import Image from "next/image";
import {ProductListSkeleton} from "@/src/app/components/home/product-list-skeleton"
import {Suspense} from "react"
import { SeasonalProducts} from "@/src/app/components/home/most-viewed-products"
import { MostSoldProducts} from "@/src/app/components/home/most-sold-products"
import {banners} from "@/src/data/banners"

export default function Page () { 
    return ( 
        <div className="pb-20">
           <Banners list={banners}/>
           <div className="flex flex-col md:flex-row  gap-4 md:gap-8 mt-6 md:mt-12">

                <div className="flex flex-1 py-6 border border-gray-200 rounded-sm">
                    <div className="w-32 text-4xl flex justify-center items-center">
                        🌵
                    </div>
                    <div className="flex-1 p">
                        <div className="font-bold text-xl">Sabor do Nordeste</div>
                        <div className="text-gray-500">Receitas típicas e ingredientes selecionados.</div>
                    </div>
                </div>

                <div className="flex flex-1 py-6 border border-gray-200 rounded-sm">
                    <div className="w-32 text-4xl flex justify-center items-center">
                       🚚
                    </div>
                    <div className="flex-1 p">
                        <div className="font-bold text-xl">Entrega Rápida</div>
                        <div className="text-gray-500">Seu pedido fresquinho direto na sua casa.</div>
                    </div>
                </div>

                <div className="flex flex-1 py-6 border border-gray-200 rounded-sm">
                    <div className="w-32 text-4xl flex justify-center items-center">
                      🔥
                    </div>
                    <div className="flex-1 p">
                        <div className="font-bold text-xl">Feito com Tradição</div>
                        <div className="text-gray-500">Temperos e receitas com gosto de comida caseira.</div>
                    </div>
                </div>
           </div>
            <Suspense fallback={<ProductListSkeleton />}>
                <MostSoldProducts/>
            </Suspense>
            <Suspense fallback={<ProductListSkeleton />}>
                <SeasonalProducts/>
            </Suspense>
            
        </div>
    )
};

