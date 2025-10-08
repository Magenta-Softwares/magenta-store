import { Button } from "@/components/common/Button";
import { TextInput } from "@/components/common/Input/TextInput";

export function LoginView() {
  return (
    <section className='max-w-[90%] md:max-w-md flex flex-col gap-8'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h1 className='text-4xl text-center font-bold text-gray-900'>
          Bienvenido a <strong className='font-bold text-pink-500'>Magenta Store</strong>
        </h1>
        <p className='text-gray-600'>Administra tu tienda con facilidad.</p>
      </div>
      <form className='flex flex-col gap-4'>
        <TextInput label='Correo electrónico' placeholder='Ingresa tu correo electrónico' />
        <TextInput label='Contraseña' placeholder='Ingresa tu contraseña' type='password' />

        <Button type='submit' className='w-full'>
          Iniciar sesión
        </Button>
      </form>
      <p className='text-center text-sm text-gray-600'>
        ¿No tienes una cuenta?{" "}
        <a className='font-bold hover:text-pink-500 transition-all' href='#'>
          Regístrate
        </a>
      </p>
    </section>
  );
}
