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
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-10 shrink-0 items-end rounded-lg bg-brown-300 p-10 md:h-40">
        <AcmeLogo />
        <Link
            href="/dashboard"
            className="flex items-center gap-5 rounded-lg bg-brown-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brown-100 md:text-base ml-20"
            >
            <span>Inicio</span> <HomeIcon className="w-5 md:w-6" />
          </Link>
          <Link
            href="/dashboard/catalogue"
            className="flex items-center gap-5 rounded-lg bg-brown-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brown-100 md:text-base ml-20"
            >
            <span>Productos</span> <ShoppingCartIcon className="w-5 md:w-6" />
          </Link>
          <Link
            href="/dashboard/deliveries"
            className="flex items-center gap-5 rounded-lg bg-brown-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brown-100 md:text-base ml-20"
            >
            <span>Entregas</span> <TruckIcon className="w-5 md:w-6" />
          </Link>
          <Link
            href="/dashboard/contact"
            className="flex items-center gap-5 rounded-lg bg-brown-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brown-100 md:text-base ml-auto"
            >
            <span>Contacto</span> <PhoneIcon className="w-5 md:w-6" />
          </Link>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-brown-100 px-6 py-10 md:w-2/5 md:px-20">
          <div className={styles.cup}>
            <div className={styles.handle}/>
              <div className={styles.steam}>
                <div className={styles.steampart}></div>
                <div className={styles.steampart}></div>
                <div className={styles.steampart}></div>
              </div>
          </div>
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Bienvenido a Pasión Cafeto.</strong> Somos una empresa que
            busca distribuir café con una calidez y atención distintiva.
          </p>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/cafetologo.jpeg"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />     
          <Image
            src="/cafetologo.jpeg"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />     
        </div>
      </div>
    </main>
  );
}
