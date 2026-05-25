import { ProductsTab } from "@/src/app/components/products/tab";
import { TabsSkeleton } from "@/src/app/components/products/skeleton";
import { Suspense } from "react";

export default async function Page () {
    return (
        <div>
            <div className="mx-3">
                <Suspense fallback={<TabsSkeleton/>}>
                    <ProductsTab/>
                </Suspense>
            </div>
        </div>
    )
}