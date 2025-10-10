import { Button } from "@/modules/Common/components/Button";
import { TextInput } from "@/modules/Common/components/Input/TextInput";
import Link from "next/link";

export function SignupView() {
  return (
    <section className='max-w-[90%] md:max-w-lg flex flex-col gap-8'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h1 className='text-5xl text-center font-bold text-gray-900'>
          Crea tu cuenta de <strong className='font-bold text-pink-500'>Magenta Store</strong>
        </h1>
        <p className='text-gray-600'>Empieza a administrar tu tienda con facilidad.</p>
      </div>
      <form className='flex flex-col gap-4'>
        <TextInput label='Nombre' placeholder='John' required />
        <TextInput label='Apellidos' placeholder='Doe' required />
        <TextInput label='Correo electrónico' placeholder='john.doe@example.com' required />
        <div className='flex flex-col md:flex-row gap-2 justify-between'>
          <TextInput className='grow' label='Contraseña' placeholder='Ingresa tu contraseña' type='password' required />
          <TextInput
            className='grow'
            label='Confirmar contraseña'
            placeholder='Ingresa tu contraseña'
            type='password'
            required
          />
        </div>

        <Button type='submit' className='w-full'>
          Regístrate
        </Button>
      </form>
      <p className='text-center text-sm text-gray-600'>
        ¿Ya tienes una cuenta?{" "}
        <Link href='/auth/login' className='font-bold hover:text-pink-500 transition-all'>
          Inicia sesión
        </Link>
      </p>
    </section>
  );
}
