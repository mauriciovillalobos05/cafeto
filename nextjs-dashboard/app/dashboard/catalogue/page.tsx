import AcmeLogo from '@/app/ui/acme-logo';
import { HomeIcon } from '@heroicons/react/24/outline';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { TruckIcon } from '@heroicons/react/24/outline';
import { PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 justify-start">
      <div className="flex items-start justify-start h-40 bg-brown-300 rounded-lg p-10 md:h-40">
        <h1 style={{ fontSize: '3em', fontWeight: 'bold' }}>Productos</h1>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-brown-100 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Bienvenido a Pasión Cafeto.</strong> Somos una empresa que
            busca distribuir café con una calidez y atención distintiva.
          </p>
        </div>
      </div>
    </main>
  );
}
