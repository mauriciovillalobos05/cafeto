'use client'
import { useEffect } from 'react';
import { poppins } from '@/app/ui/fonts';
import Image from 'next/image';
import DropdownButton from '@/app/DownButton';

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
          className="image-animate"
        />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row justify-center mb-10">
        <div className="mt-4 flex grow flex-col bg-brown-200 p-4 rounded-md">
          <p className={`${poppins.className} text-xl lg:text-3xl text-white mb-2`}>
            <strong>Pedidos</strong>
          </p>
            <ul className={`${poppins.className} text-xl lg:text-xl mb-2`}>
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
            <DropdownButton title="Transferencia">
              <strong>A nombre de:</strong>
              <p className="mb-8">Edgar Jesús Contreras Piña</p>
              <img src="/banorte.png" className="w-40 h-50" alt="Banorte" />
              <strong>No. de Cuenta:</strong>
              <p className="mb-4">0210217692</p>
              <strong>Clabe:</strong>
              <p className="mb-8">072320002102176920</p>
              <img src="/bnmx.png" className="w-40 h-50" alt="Banamex" />
              <strong>No. de Cuenta:</strong>
              <p className="mb-4">7767462</p>
              <strong>Clabe:</strong>
              <p className="mb-4">002320701977674627</p>
              <strong>Sucursal:</strong>
              <p>7019</p>
            </DropdownButton>
          </p>
          <p className="mb-4">
            <DropdownButton title="Depósito en cualquier Oxxo">
              <p>Número de cuenta: #T 4152314024664792</p>
            </DropdownButton>
          </p>
          <p className="mb-4">
            <DropdownButton title="Pago con terminal">
              <p>Número de cuenta: 1234-5678-9012-3456</p>
            </DropdownButton>
          </p>
        </div>
      </div>
    </main>
  );
}
