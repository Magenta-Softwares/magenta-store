import { StoreCard } from "../components/StoreCard";
import { Button } from "@/modules/Common/components/Button";
import { Carousel } from "@/modules/Common/components/Carousel/Carousel";
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
  {
    id: "4",
    name: "Librería Central",
    role: "Propietario",
    image: "https://placehold.co/600x400",
  },
  {
    id: "5",
    name: "Cafetería La Esquina",
    role: "Administrador",
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

      <Carousel
        content={DUMMY_STORES.map((store) => {
          return {
            id: store.id,
            slide: <StoreCard name={store.name} role={store.role} image={store.image} />,
          };
        })}
        itemsPerView={3}
      />

      <div>
        <Button leftIcon={<IconCircleDashedPlus />}>Crea una nueva tienda</Button>
        <Button leftIcon={<IconUsersGroup />} variant='secondary' className='ml-2'>
          Unirse a una tienda
        </Button>
      </div>
    </section>
  );
}
