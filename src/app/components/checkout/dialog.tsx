"use client"

import { Dialog } from "@/src/app/components/ui/dialog"
import { DialogContent, DialogHeader, DialogTitle } from "@/src/app/components/ui/dialog"
import { Progress } from "@/src/app/components/ui/progress"
import { useState } from "react"
import { CheckoutSteps } from "@/src/types/checkout-steps"


type Props = {
    open:boolean;
    onOpenChange:(open:boolean) => void
}


export const CheckoutDialog = ({open,onOpenChange}:Props) => {

    const [step,setStep] = useState<CheckoutSteps>('user')

    let progressPct = 0;
    switch(step) {
        case 'user':
            progressPct = 30;
            break
        case "address":
            progressPct = 70;
            break
        case "finished":
            progressPct = 100;
            break

    }
    return(
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {step==="user" && "Dados Pessoais"}
                        {step==="address" && "Endereço de Entrega"}
                        {step ==="finished" && "Envio para o Whatsapp"}
                    </DialogTitle>
                </DialogHeader>

                <Progress value={progressPct} />

                {/* <div className="flex flex-col gap-3">
                    {step === "user" && <StepUser setStep={setStep}/>}
                    {step === "address" && <StepAddress setStep={setStep}/>}
                    {step === "finished" && <StepFinish />}
                </div> */}

            </DialogContent>
        </Dialog>

    )
}