import {ProductList} from "@/src/app/components/product-list"
import {products} from "@/src/data/products"
 
export const  MostSoldProducts = async() => { 

      const bestSellers = products.filter(
        (product) => product.bestSeller
    )
    return ( 
        <div className="mt-10">
            <h2 className="text-2xl text-center md:text-left">Produtos mais Vendidos</h2>
            <p className="text-gray-500 text-center md:text-left">Campeões de vendas da nossa loja.</p>
            <div className="mt-9">
                <ProductList list={bestSellers} />
            </div>
        </div>
    )
}