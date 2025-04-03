import ConfirmAccoundForm from "@/components/auth/ConfirmAccoundForm";


export default function ConfirmAccountPage() {
  return (
    <>
      <h1 className="font-black text-6xl text-purple-950">Confirma tu Cuenta</h1>
      <p className="text-3xl font-bold">Ingresando el codigo que recibiste  <span className="text-amber-500">por correo</span></p>

      <ConfirmAccoundForm />
    </>
  )
}
