"use client"

import { register } from "@/actions/create-account-action"
import { error } from "console"
import { useFormState } from "react-dom"
import ErrorMessage from "../ui/ErrorMessage"
import SuccessMesage from "../ui/SuccessMesage"
import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"



export default function RegisterForm() {
    const router = useRouter()
    const ref = useRef<HTMLFormElement>(null)
    const [state, dispatch] = useFormState(register, {
        errors: [],
        success: ''
    })

    useEffect(() => {
        if(state.success) {
            toast.success(state.success)
            ref.current?.reset()
            router.push('/auth/confirm-account')
        }
    }, [state])

    return (
        <form
            ref={ref}
            className="mt-14 space-y-5"
            noValidate
            action={dispatch}
        >
            
            {state.errors.map(error => <ErrorMessage>{error}</ErrorMessage>)}

            
            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                    htmlFor="email"
                >Correo</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email de Registro"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="email"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                >Nombre</label>
                <input
                    type="name"
                    placeholder="Nombre de Registro"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="name"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                >Contraseña</label>
                <input
                    type="password"
                    placeholder="Password de Registro"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="password"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                >Repetir Contraseña</label>
                <input
                    id="password_confirmation"
                    type="password"
                    placeholder="Repite Password de Registro"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="password_confirmation"
                />
            </div>

            <input
                type="submit"
                value='Registrarme'
                className="bg-purple-950 hover:bg-purple-800 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer block"
            />
        </form>
    )
}
