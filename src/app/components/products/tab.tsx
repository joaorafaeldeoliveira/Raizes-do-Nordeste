'use client'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/app/components/ui/tabs";

import { products } from "@/src/data/products";
import { Product } from "@/src/types/product";
import { ProductEmpty } from "./empty";
import { ProductItem } from "./item";
import { useCityStore } from "@/src/app/store/city-store";

type Tab = {
  title: string;
  value: string;
  products: Product[];
};

export const ProductsTab = () => {
  const city = useCityStore(
    state => state.city
  );

  const tabs: Tab[] = [
    {
      title: "Café da manhã",
      value: "breakfast",
      products: products.filter(
        item =>
          item.category === "breakfast" &&
          item.cityAvailability?.includes(city)
      ),
    },
    {
      title: "Regional",
      value: "regional",
      products: products.filter(
        item =>
          item.category === "regional" &&
          item.cityAvailability?.includes(city)
      ),
    },
    {
      title: "Rápidos",
      value: "fast",
      products: products.filter(
        item =>
          item.category === "fast" &&
          item.cityAvailability?.includes(city)
      ),
    },
    {
      title: "Bebidas",
      value: "drinks",
      products: products.filter(
        item =>
          item.category === "drinks" &&
          item.cityAvailability?.includes(city)
      ),
    },
    {
      title: "Sazonal",
      value: "seasonal",
      products: products.filter(
        item =>
          item.category === "seasonal" &&
          item.cityAvailability?.includes(city)
      ),
    },
  ];

  return (
    <Tabs defaultValue={tabs[0].value} className="w-full">
      <div className="w-full mb-8 p-3 md:p-0 md:mb-0">
        <TabsList className="grid grid-cols-2 gap-2 bg-transparent sm:grid-cols-3 md:flex md:flex-wrap md:justify-center lg:justify-start">
          {tabs.map(item => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className="p-3 bg-neutral-50 data-[state=active]:bg-neutral-200 text-xs sm:text-sm text-center rounded-md border border-neutral-200 shadow-sm md:flex-1 lg:flex-none lg:px-6"
            >
              {item.title}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {tabs.map(item => (
        <TabsContent
          key={item.value}
          value={item.value}
          className="mt-0 md:mt-0"
        >
          {item.products.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 mt-10 sm:grid-cols-3 md:grid-cols-4 md:mt-0 lg:grid-cols-5 xl:grid-cols-6">
              {item.products.map(product => (
                <ProductItem
                  key={product.id}
                  item={product}
                />
              ))}
            </div>
          ) : (
            <div className="mt-10 md:mt-1">
              <ProductEmpty category={item.title} />
            </div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
};