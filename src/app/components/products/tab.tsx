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
    <Tabs defaultValue={tabs[0].value}>
      <TabsList className="flex">
        {tabs.map(item => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            className="flex-1"
          >
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map(item => (
        <TabsContent
          key={item.value}
          value={item.value}
          className="mt-6"
        >
          {item.products.length > 0 ? (
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
              {item.products.map(product => (
                <ProductItem
                  key={product.id}
                  item={product}
                />
              ))}
            </div>
          ) : (
            <ProductEmpty />
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
};