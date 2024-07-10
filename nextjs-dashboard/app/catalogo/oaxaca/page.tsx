'use client'
import { useEffect } from 'react';
import { poppins } from '@/app/ui/fonts';
import Image from 'next/image';
import DropdownButton from '@/app/DropDownButton';
import PedidosLinks from '@/app/ui/dashboard/pedidos';

export default function Page() {
  useEffect(() => {
    document.title = "Pedidos - Pasión Cafeto";
  }, []);

  return (
    <main className="flex-col justify-start">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row justify-center">
        <div className="mt-4 flex grow flex-col p-4 rounded-md">
        <Image
            src="/oaxaca.png"
            layout="intrinsic"
            width={400}
            height={566}
            objectFit="contain"
            alt="Imagen de Oaxaca"
          />
        </div>
        <div className="mt-4 flex grow flex-col p-4 rounded-md">
          <p className={`${poppins.className} text-xl lg:text-3xl mb-4`}>
            <strong>Información General</strong>
          </p>
          <p className="mb-5">
            <DropdownButton title="Perfil de taza">
              <strong>Origen:</strong>
              <p className="mb-4">Oaxaca Lavado</p>
              <strong>Altura:</strong>
              <p className="mb-4">1200-1400 MSNM</p>
              <strong>Tipo:</strong>
              <p className="mb-4">Café 100% Arábica</p>
              <strong>Nota de Cata:</strong>
              <p className="mb-4">Chocolate | Caramelo</p>
              <strong>Puntaje:</strong>
              <p className="mb-4">82.5</p>
            </DropdownButton>
          </p>
          <p className="mb-5">
            <DropdownButton title="Tueste">
              <img src="/tueste3.png" className="w-40 h-50" alt="Tueste3" />
            </DropdownButton>
          </p>
          <p className="mb-5">
            <DropdownButton title="Haz tu pedido">
              <div className="flex flex-row items-center justify-between px-3 py-4 bg-gray-400 md:px-6">
                <PedidosLinks />
              </div>
            </DropdownButton>
          </p>
        </div>
      </div>
    </main>
  );
}
