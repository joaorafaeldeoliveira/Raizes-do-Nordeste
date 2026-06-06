'use client'

import { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/src/app/components/ui/dialog'

import { Button } from '@/src/app/components/ui/button'

type Props = {
  open: boolean
  onOpenChange: (
    open: boolean
  ) => void

  onSave: (
    address: any
  ) => void
}

export function AddressDialog({open,onOpenChange,onSave,}: Props) {

  const [title, setTitle] = useState('')

  const [street, setStreet] = useState('')

  const [number, setNumber] = useState('')

  const [district, setDistrict] = useState('')

  const [city, setCity] = useState('')

  const [state, setState] = useState('')

  const [zipCode, setZipCode] = useState('')

  function handleSave() {
    const newAddress = {
      id: crypto.randomUUID(),
      title,
      street,
      number,
      district,
      city,
      state,
      zipCode,
      default: false,
    }

    onSave(newAddress)

    onOpenChange(false)

    setTitle('')
    setStreet('')
    setNumber('')
    setDistrict('')
    setCity('')
    setState('')
    setZipCode('')
  }

  return (
    <Dialog
      open={open}
      onOpenChange={
        onOpenChange
      }
    >
      <DialogContent className="max-w-lg rounded-[32px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#5C3B1E]">
            Novo Endereço
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <input
            placeholder="Nome do endereço (Casa, Trabalho)"
            value={title}
            onChange={e =>
              setTitle(
                e.target.value
              )
            }
            className="h-12 w-full rounded-xl border px-4"
          />

          <input
            placeholder="Rua"
            value={street}
            onChange={e =>
              setStreet(
                e.target.value
              )
            }
            className="h-12 w-full rounded-xl border px-4"
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              placeholder="Número"
              value={number}
              onChange={e =>
                setNumber(
                  e.target.value
                )
              }
              className="h-12 rounded-xl border px-4"
            />

            <input
              placeholder="Bairro"
              value={district}
              onChange={e =>
                setDistrict(
                  e.target.value
                )
              }
              className="h-12 rounded-xl border px-4"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <input
              placeholder="Cidade"
              value={city}
              onChange={e =>
                setCity(
                  e.target.value
                )
              }
              className="h-12 rounded-xl border px-4"
            />

            <input
              placeholder="Estado"
              value={state}
              onChange={e =>
                setState(
                  e.target.value
                )
              }
              className="h-12 rounded-xl border px-4"
            />
          </div>

          <input
            placeholder="CEP"
            value={zipCode}
            onChange={e =>
              setZipCode(
                e.target.value
              )
            }
            className="h-12 w-full rounded-xl border px-4"
          />

          <Button
            onClick={
              handleSave
            }
            className="h-12 w-full rounded-2xl bg-[#C96B3B]"
          >
            Salvar endereço
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}