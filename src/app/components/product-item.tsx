'use client'

import { Product } from "@/src/types/product";
import { Button } from "@/src/app/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { useCartStore } from "@/src/app/store/cart-store";

type Props = {
  item: Product;
};

export const ProductItem = ({ item }: Props) => {
  const { upsertCartItem } = useCartStore(
    state => state
  );

  const handleAddButton = () => {
    upsertCartItem(item, 1);

    toast.success("Adicionado ao carrinho! ", {
      description: (
        <span className="text-white">
          <strong className="font-bold">
            {item.name}
          </strong>{" "}
          foi adicionado ao carrinho
        </span>
      ),

      action: {
        label: "Fechar",
        onClick: () => {},
      },
    });
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
      <div className="flex justify-center overflow-hidden rounded-lg">
        <Link href="/">
          <Image
            src={item.image}
            alt={item.name}
            height={200}
            width={200}
            className="h-48 w-full object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </div>

      <div className="mt-5">
        <Link
          href="/"
          className="line-clamp-2 text-lg font-semibold text-gray-900"
        >
          {item.name}
        </Link>

        <p className="mt-2 text-2xl font-bold text-[#A66E41]">
          R$ {item.price.toFixed(2)}
        </p>
      </div>

      <Button
        variant="outline"
        onClick={handleAddButton}
        className="mt-5 w-full"
      >
        Adicionar
      </Button>
    </div>
  );
};