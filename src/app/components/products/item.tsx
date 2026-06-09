"use client";

import { Product } from "@/src/types/product";
import { Button } from "@/src/app/components/ui/button";
import { useCartStore } from "@/src/app/store/cart-store";
import { toast } from "sonner";

type Props = {
  item: Product;
};

export const ProductItem = ({ item }: Props) => {
  const { upsertCartItem } = useCartStore((state) => state);

  const handleAddButton = () => {
    console.log(item);

    upsertCartItem(item, 1);

    toast.success("Adicionado ao carrinho!", {
      description: <span><strong>{item.name}</strong></span>,
      action: {
        label: "Fechar",
        onClick: () => {},
      },
    });
  };

  return (
    <div>
      <div className="rounded-md overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-32 object-cover"
        />
      </div>

      <div className="mt-3 flex flex-col gap-2">
        <p className="text-lg">{item.name}</p>

        <p className="text-sm opacity-50">
          R$ {item.price.toFixed(2)}
        </p>

        <Button
          variant="outline"
          onClick={handleAddButton}
        >
          Adicionar
        </Button>
      </div>
    </div>
  );
};