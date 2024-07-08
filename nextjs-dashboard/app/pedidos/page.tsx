'use client'
import { useEffect } from 'react';
import Link from 'next/link';
import { poppins } from '@/app/ui/fonts';
import Image from 'next/image';
import DropdownButton from '@/app/DropDownButton';

export default function Page() {
  useEffect(() => {
    document.title = "Pedidos - Pasión Cafeto";
  }, []);

  return (
    <main className="flex min-h-screen flex-col justify-start">
      <div className="w-full">
        <Image
          src="/entregas.png"
          layout="responsive"
          width={4500}
          height={1365}
          objectFit="contain"
          alt="Captura de pantalla del proyecto de panel de control mostrando versión de escritorio"
        />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row justify-center mb-10">
        <div className="mt-4 flex grow flex-col bg-brown-200 p-4 rounded-md">
          <p className={`${poppins.className} text-xl lg:text-3xl text-white mb-2`}>
            <strong>Pedidos</strong>
          </p>
            <ul className={`${poppins.className} text-xl lg:text-xlmb-2`}>
                <li>
                    Para realizar tu pedido mándanos un WhatsApp, 
                </li>
                <li>
                    DM a cualquiera de nuestras
                    redes sociales o
                </li>
                <li className="mb-4">
                    un correo. ¡Estaremos encantados de atenderte! 
                </li>
                <li>
                    Recuerda que en todos los pedidos
                </li>
                <li>
                    de 5 kg en adelante el envío es
                </li>
                <li className="mb-4">
                    <strong> GRATIS </strong>
                </li>
                <li>
                    Pedidos de menos de 5 kg
                </li>
                <li>
                    tendrán un cargo extra de $70.
                </li>
            </ul>
        </div>
        <div className="mt-4 flex grow flex-col bg-brown-200 p-4 rounded-md">
          <p className={`${poppins.className} text-xl lg:text-3xl text-white mb-4`}>
            <strong>Métodos de pago</strong>
          </p>
          <p className="mb-4">
          <DropdownButton 
            title="Transferencia" 
            message="Número de cuenta: 1234-5678-9012-3456" 
          />
          </p>
          <p className="mb-4">
          <DropdownButton 
            title="Depósito en cualquier Oxxo" 
            message="Número de cuenta: 1234-5678-9012-3456" 
          />
          </p>
          <p className="mb-4">
          <DropdownButton 
            title="Pago con terminal" 
            message="Número de cuenta: 1234-5678-9012-3456" 
          />
          </p>
        </div>
      </div>
    </main>
  );
}
