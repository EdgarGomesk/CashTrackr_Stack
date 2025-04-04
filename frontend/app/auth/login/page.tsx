import LoginForm from "@/components/auth/LoginForm"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "CashTrackr - Iniciar sesion",
    description: "CashTrackr - Iniciar sesion",
    keywords: "Nextjs, Tailwindcss, finanzas, Costos"
}

export default function LoginPage() {


    return (
        <>
            <h1 className="font-black text-6xl text-purple-950">Inicia Sesión</h1>
            <p className="text-3xl font-bold">y controla tus <span className="text-amber-500">finanzas</span></p>

            <LoginForm />

            <nav className='mt-10 flex flex-col space-y-4'>
                <Link
                    href='/auth/register'
                    className='text-center text-grey-500'
                >
                    ¿No tienes una cuenta? Crea una
                </Link>

                <Link
                    href='/auth/forgot-password'
                    className='text-center text-grey-500'
                >
                    ¿Olvidaste tu contraseña? Reestablecela aquí
                </Link>
            </nav>
        </>
    )
}
