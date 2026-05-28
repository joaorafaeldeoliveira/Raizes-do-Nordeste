'use client';

import {Banner} from "@/src/types/banner";
import Link from "next/link";
import Image from "next/image";
import {useState,useEffect} from "react"


type Props = { 
    list: Banner[];
}
let bannerTimer: NodeJS.Timeout;

export const Banners = ({list}:Props) => { 

    const [currentImage,setCurrentImage] = useState(0);

    const nextImage = () => { 
        setCurrentImage(currentImage => {
            if(currentImage + 1 >= list.length) { 
                return 0
            } else { 
                return currentImage + 1;
            }
        });
    }
    const handleBannerClick=(index:number)=>{
        setCurrentImage(index);
        clearInterval(bannerTimer);
        bannerTimer = setInterval(nextImage,3000);

    }
    useEffect(() => {
        bannerTimer = setInterval(nextImage,3000);
        return () => clearInterval(bannerTimer);
    },[]);

    return ( 
        <div>
            <div className="relative aspect-3/1">
                {list.map((banner,index) => (
                    <Link
                        key={index}
                        href={banner.link}
                        className="transition-all absolute inset-0"
                        style ={{opacity: currentImage === index ? 1: 0}}
                    >
                        <Image
                            src={banner.img}
                            alt=""
                            width={1200}
                            height={300}
                            className="rounded-sm h-50 object-center md:h-90"
                        />

                    </Link>
                ))}
            </div>
            <div className="mt-25 flex justify-center gap-4 md:mt-4">
                 {list.map((banner,index)=> (
                    <div
                        key={index}
                        className="w-4 h-4 bg-[#A66E41] rounded-full cursor-pointer"
                        style ={{opacity: currentImage === index ? 1: 0.3}}
                        onClick={() => handleBannerClick(index)}
                    ></div>
                 ))}
            </div>
        </div>
    )
}