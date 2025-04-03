
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "CashTrackr - olvidé mi contraseña",
    description: "CashTrackr - Iniciar sesion",
    keywords: "Nextjs, Tailwindcss, finanzas, Costos"
}

export default function ForgotPasswordPage() {

    
    return (
        <>
            <h1 className="font-black text-6xl text-purple-950">¿Olvidaste tu contraseña?</h1>
            <p className="text-3xl font-bold">aqui puedes <span className="text-amber-500">reestablecerla</span></p>

            <ForgotPasswordForm />

            <nav className='mt-10 flex flex-col space-y-4'>
                <Link
                    href='/auth/login'
                    className='text-center text-grey-500'
                >
                    ¿Ya tienes cuenta? Iniciar Sesión
                </Link>
                <Link
                    href='/auth/register'
                    className='text-center text-grey-500'
                >
                    ¿No tienes una cuenta? Crea una
                </Link>
            </nav>
        </>
    )
}
