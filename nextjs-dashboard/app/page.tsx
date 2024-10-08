'use client'
import { HomeIcon, ShoppingCartIcon, TruckIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from '@/app/ui/home.module.css';
import { poppins } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  useEffect(() => {
    document.title = "Inicio - Pasión Cafeto";
  }, []);

  return (
    <main className="flex min-h-screen flex-col justify-start">
      <div className="w-full mb-10">
        <Image
          src="/inicio.png"
          layout="responsive"
          width={4501}
          height={1385}
          objectFit="contain"
          alt="Captura de pantalla del proyecto de panel de control mostrando versión de escritorio"
        />
      </div>
      <div className="mb-4">
        <p className={`${poppins.className} text-xl lg:text-4xl text-gray-800`}>
          <strong>Una pasión que tiene siglos de antigüedad</strong>
        </p>
      </div>
      <div className="w-full md:max-w-lg mb-6">
        <img
          src="/download.gif"
          className="w-full"
          alt="Animación GIF mostrando algo relacionado con tu proyecto"
        />
      </div>
    </main>
  );
}
