import { Product } from "@/src/types/product";
import { products } from "@/src/data/products";


export const getAllProducts =async():Promise<Product[]> => {
    
    return new Promise((resolve,reject)=> {
        return setTimeout(() => {
            resolve(products);
        },2000)
    });
    
}