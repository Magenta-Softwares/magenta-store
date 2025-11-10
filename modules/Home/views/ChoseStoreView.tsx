import { StoreCard } from "../components/StoreCard";
import { Button } from "@/modules/Common/components/Button";
import { IconCircleDashedPlus, IconUsersGroup } from "@tabler/icons-react";

// ! Estas tiendas son de ejemplo. Cuando se conecte con el backend, se debe eliminar.
const DUMMY_STORES = [
  {
    id: "1",
    name: "Tienda de Electrónica",
    role: "Propietario",
    image: "https://placehold.co/600x400",
  },
  {
    id: "2",
    name: "Tienda de Ropa",
    role: "Administrador",
    image: "https://placehold.co/600x400",
  },
  {
    id: "3",
    name: "Tienda de Juguetes",
    role: "Cajero",
    image: "https://placehold.co/600x400",
  },
];

export default function ChoseStoreView() {
  return (
    <section className='flex flex-col gap-8 justify-center items-center'>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-4xl font-bold text-stone-900'>Bienvenido, Usuario</h1>
        <p className='text-lg text-stone-600'>Selecciona una tienda para empezar a administrar.</p>
      </div>

      {/* ! Estuve horas tratando de hacer o encontrar un carousel. De momento se quedara como una grid. */}
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {DUMMY_STORES.map((store) => (
          <article key={store.id}>
            <StoreCard name={store.name} role={store.role} image={store.image} />
          </article>
        ))}
      </div>

      <div className=''>
        <Button leftIcon={<IconCircleDashedPlus />}>Crea una nueva tienda</Button>
        <Button leftIcon={<IconUsersGroup />} variant='secondary' className='ml-2'>
          Unirse a una tienda
        </Button>
      </div>
    </section>
  );
}
