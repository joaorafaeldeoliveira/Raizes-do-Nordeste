import { ProductsTab } from "@/src/app/components/products/tab";
import { TabsSkeleton } from "@/src/app/components/products/skeleton";
import { StoreSelector } from '@/src/app/components/store-selector'
import { Suspense } from "react";

export default async function Page() {
  return (
    <div className="">
      <StoreSelector />

      <Suspense
        fallback={<TabsSkeleton />}
      >
        <ProductsTab />
      </Suspense>
    </div>
  )
}