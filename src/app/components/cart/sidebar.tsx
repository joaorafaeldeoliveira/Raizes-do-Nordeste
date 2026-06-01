import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/src/app/components/ui/sheet"
import { Button } from "@/src/app/components/ui/button"
import { ShoppingCartIcon } from "lucide-react"
import { Separator } from "@/src/app/components/ui/separator"
import { useCartStore } from "@/src/app/store/cart-store"
import { CartItem } from "@/src/app/components/cart/item"
import { useState } from "react"
import { CheckoutDialog } from "@/src/app/components/checkout/dialog"

export const CartSidebar = () => {

    const [checkoutOpen,setCheckoutOpen]= useState(false)

    const{cart} = useCartStore(state=>state);

    let subtotal = 0;
    for(let item of cart) { 
        subtotal += item.quantity * item.product.price
    }
    return ( 
        <div>   
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="relative  h-12 w-15 text-center items-center">
                        <ShoppingCartIcon className="items-center"/>
                        {cart.length > 0 &&
                        <div className="absolute -right-1 -top-1 h-6 w-6 bg-red-600 rounded-full"></div>}
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Carrinho</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col gap-5 my-3">
                        {cart.map(item=>(
                            <CartItem key={item.product.id} item={item}/>
                        ))}
                    </div>
                    <Separator className="my-4"/>
                    <div className="flex justify-between items-center text-xs ml-4">
                        <div>Subtotal</div>
                        <div>R${subtotal.toFixed(2)}</div>
                    </div>
                    <Separator className="my-4"/>
                    <div className="text-center">
                        <Button 
                            onClick={()=> setCheckoutOpen(true)}
                            disabled={cart.length === 0}>Finalizar Compra</Button>
                    </div>
                    <CheckoutDialog
                        open={checkoutOpen}
                        onOpenChange={setCheckoutOpen}/>
                </SheetContent>
            </Sheet>
        </div>
    )
}