'use client'
import { useEffect } from 'react';
import Link from 'next/link';
import { poppins } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  useEffect(() => {
    document.title = "Productos - Pasión Cafeto";
  }, []);

  return (
    <main className="flex min-h-screen flex-col justify-start">
      <div className="w-full mb-10">
        <Image
          src="/productos.png"
          layout="responsive"
          width={4501}
          height={1343}
          objectFit="contain"
          alt="Captura de pantalla del proyecto de panel de control mostrando versión de escritorio"
        />
      </div>
      <div className="mb-8">
        <p className={`${poppins.className} text-xl lg:text-4xl text-gray-800`}>
          <strong>De la pasión del campo a tu hogar</strong>
        </p>
      </div>
      <div className="bg-brown-100 mb-4">
        <p className={`${poppins.className} text-xl lg:text-2xl text-white`}>
          <strong>Altura</strong>
        </p>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row flex justify-center">
        <Link href="/catalogo/mezclaespecial">
          <Image
            src="/mezclaespecial.png"
            layout="intrinsic"
            width={400}  // Ajusta este valor según el tamaño deseado
            height={566} // Mantén la proporción según el tamaño deseado
            objectFit="contain"
            alt="Imagen de Veracruz"
          />
        </Link>
      </div>
      <div className="bg-brown-800 mb-4">
        <p className={`${poppins.className} text-xl lg:text-2xl text-white`}>
          <strong>Gourmet</strong>
        </p>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row flex justify-center">
        <Link href="/catalogo/oaxaca">
          <Image
            src="/oaxaca.png"
            layout="intrinsic"
            width={400}  
            height={566} 
            objectFit="contain"
            alt="Imagen de Veracruz"
          />
        </Link>
        <Link href="/catalogo/veracruz">
          <Image
            src="/veracruz.png"
            layout="intrinsic"
            width={400}  
            height={566} 
            objectFit="contain"
            alt="Imagen de Veracruz"
          />
        </Link>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row flex justify-center">
        <Link href="/catalogo/chiapas">
          <Image
            src="/chiapas.png"
            layout="intrinsic"
            width={400}  
            height={566} 
            objectFit="contain"
            alt="Imagen de Veracruz"
          />
        </Link>
      </div>
      <div className="bg-blue-200 mb-4">
        <p className={`${poppins.className} text-xl lg:text-2xl text-white`}>
          <strong>Especialidad</strong>
        </p>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row flex justify-center">
        <Link href="/catalogo/honey">
          <Image
            src="/honey.png"
            layout="intrinsic"
            width={400}  
            height={566} 
            objectFit="contain"
            alt="Imagen de Veracruz"
          />
        </Link>
        <Link href="/catalogo/nayarit">
          <Image
            src="/nayarit.png"
            layout="intrinsic"
            width={400}  
            height={566} 
            objectFit="contain"
            alt="Imagen de Veracruz"
          />
        </Link>
      </div>
    </main>
  );
}
