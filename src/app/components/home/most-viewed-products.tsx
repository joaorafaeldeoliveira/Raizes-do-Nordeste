import {ProductList} from "@/src/app/components/product-list"
import {products} from "@/src/data/products"
 
export const  SeasonalProducts = async() => { 

     const sazonais = products.filter(
        (product) => product.category == 'seasonal'
    )

    return ( 
        <div className="mt-10">
            <h2 className="text-2xl text-center md:text-left">Produtos Sazonais</h2>
            <p className="text-gray-500 text-center md:text-left">Descubra os produtos mais populares da estação.</p>
            <div className="mt-9">
                <ProductList list={sazonais} />
            </div>
        </div>
    )
}