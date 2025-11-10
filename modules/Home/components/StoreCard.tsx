import { Button } from "@/modules/Common/components/Button";
import { IconBuildingStore, IconLogout } from "@tabler/icons-react";
import Image from "next/image";

interface StoreCardProps {
  image: string;
  name: string;
  // * En un futuro podría ser un ENUM, pero por ahora desconocemos todos los roles posibles.
  role: string;
}

export const StoreCard = ({ image, name, role }: StoreCardProps) => {
  return (
    <div className='bg-white rounded-xl shadow-sm border border-stone-200 p-5 flex flex-col items-center text-center gap-5'>
      <figure>
        <Image
          src={image}
          alt={name}
          className='w-24 h-24 rounded-full object-cover border-4 border-stone-200'
          width={96}
          height={96}
        />
      </figure>
      <div className='flex flex-col'>
        <h2 className='text-lg font-bold text-stone-900'>{name}</h2>
        <p className='text-sm text-stone-500'>{role}</p>
      </div>
      <div className='flex flex-col w-full gap-2'>
        <Button leftIcon={<IconBuildingStore />}>Ir a la tienda</Button>
        <Button variant='danger' leftIcon={<IconLogout />}>
          Abandonar tienda
        </Button>
      </div>
    </div>
  );
};
