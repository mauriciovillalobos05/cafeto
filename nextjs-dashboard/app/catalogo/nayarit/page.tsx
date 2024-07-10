'use client'
import { useEffect } from 'react';
import { poppins } from '@/app/ui/fonts';
import Image from 'next/image';
import DropdownButton from '@/app/DropDownButton';
import PedidosLinks from '@/app/ui/dashboard/pedidos';
import Link from 'next/link';

export default function Page() {
  useEffect(() => {
    document.title = "Pedidos - Pasión Cafeto";
  }, []);

  return (
    <main className="flex-col justify-start">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row justify-center">
        <div className="mt-4 flex grow flex-col p-4 rounded-md">
        <Image
            src="/nayarit.png"
            layout="intrinsic"
            width={400}
            height={566}
            objectFit="contain"
            alt="Imagen de Nayarit"
          />
        </div>
        <div className="mt-4 flex grow flex-col p-4 rounded-md">
          <p className={`${poppins.className} text-xl lg:text-3xl mb-4`}>
            <strong>Información General</strong>
          </p>
          <p className={`${poppins.className} mb-5`}>
            <DropdownButton title="Perfil de taza">
              <strong>Origen:</strong>
              <p className="mb-4">Nayarit</p>
              <strong>Finca:</strong>
              <p className="mb-4">El Cuarenteño</p>
              <strong>Altura:</strong>
              <p className="mb-4">1400 MSNM</p>
              <strong>Proceso:</strong>
              <p className="mb-4">Natural</p>
              <strong>Tipo:</strong>
              <p className="mb-4">café 100% Arábica</p>
              <strong>Nota de Cata:</strong>
              <p className="mb-4">Chocolate | Caramelo</p>
              <strong>Puntaje:</strong>
              <p className="mb-4">91</p>
            </DropdownButton>
          </p>
          <p className={`${poppins.className} mb-5`}>
            <DropdownButton title="Tueste">
              <img src="/tueste2.png" className="w-40 h-50" alt="Tueste2" />
            </DropdownButton>
          </p>
          <p className={`${poppins.className} mb-5`}>
            <DropdownButton title="Haz tu pedido">
              <div className="flex flex-row items-center justify-between px-3 py-4 bg-gray-400 md:px-6">
                <PedidosLinks />
              </div>
            </DropdownButton>
          </p>
        </div>
      </div>
      <p className={`${poppins.className} text-xl lg:text-xl mb-4`}>
        <strong>Más productos</strong>
      </p>
      <div className="flex grow flex-col gap-4 md:flex-row justify-center">
        <div className="flex grow flex-col p-4 rounded-md">
        <Link href="/catalogo/mezclaespecial">
          <Image
            src="/mezclaespecial.png"
            layout="intrinsic"
            width={400}
            height={566}
            objectFit="contain"
            alt="Imagen de MezclaEspecial"
            className="image-fade" 
          />
        </Link>
        </div>
        <div className="mt-4 flex grow flex-col p-4 rounded-md">
          <Link href="/catalogo/oaxaca">
            <Image
              src="/oaxaca.png"
              layout="intrinsic"
              width={400}
              height={566}
              objectFit="contain"
              alt="Imagen de Oaxaca"
              className="image-fade" 
            />
          </Link>
        </div>
        <div className="mt-4 flex grow flex-col p-4 rounded-md">
          <Link href="/catalogo/chiapas">
            <Image
              src="/chiapas.png"
              layout="intrinsic"
              width={400}
              height={566}
              objectFit="contain"
              alt="Imagen de Chiapas"
              className="image-fade" 
            />
          </Link>
        </div>
        <div className="mt-4 flex grow flex-col p-4 rounded-md">
          <Link href="/catalogo/veracruz">
            <Image
              src="/veracruz.png"
              layout="intrinsic"
              width={400}
              height={566}
              objectFit="contain"
              alt="Imagen de Veracruz"
              className="image-fade" 
            />
          </Link>
        </div>
        <div className="mt-4 flex grow flex-col p-4 rounded-md">
          <Link href="/catalogo/honey">
            <Image
              src="/honey.png"
              layout="intrinsic"
              width={400}
              height={566}
              objectFit="contain"
              alt="Imagen de Honey"
              className="image-fade" 
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
