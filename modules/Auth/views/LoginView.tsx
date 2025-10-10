import { Button } from "@/components/common/Button";
import { TextInput } from "@/components/common/Input/TextInput";
import Link from "next/link";

export function LoginView() {
  return (
    <section className='max-w-[90%] md:max-w-lg flex flex-col gap-8'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h1 className='text-5xl text-center font-bold text-gray-900'>
          Bienvenido a <strong className='font-bold text-pink-500'>Magenta Store</strong>
        </h1>
        <p className='text-gray-600'>Administra tu tienda con facilidad.</p>
      </div>
      <form className='flex flex-col gap-4'>
        <TextInput label='Correo electrónico' placeholder='john.doe@example.com' required />
        <TextInput label='Contraseña' placeholder='Ingresa tu contraseña' type='password' required />

        <Button type='submit' className='w-full'>
          Iniciar sesión
        </Button>
      </form>
      <p className='text-center text-sm text-gray-600'>
        ¿No tienes una cuenta?{" "}
        <Link href='/auth/signup' className='font-bold hover:text-pink-500 transition-all'>
          Regístrate
        </Link>
      </p>
    </section>
  );
}
