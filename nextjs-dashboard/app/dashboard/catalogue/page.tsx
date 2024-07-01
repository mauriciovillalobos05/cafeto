import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 pt-0 justify-start">
      <div className="flex items-start justify-start h-40 bg-brown-300 rounded-lg p-10 md:h-40">
        <h1 style={{ fontSize: '3em', fontWeight: 'bold' }}>Productos</h1>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-brown-400 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl text-white md:text-3xl md:leading-normal`}>
            <strong>Gourmet</strong> 
          </p>
          <div className="flex flex-row justify-around">
            <span className='text-brown-400'>Veracruz</span>
            <span className="text-white">454 gr</span>
            <span className="text-white">908 gr</span>
          </div>
          <div className="flex flex-row justify-around">
            <span className="text-white">Veracruz</span>
            <span className="text-white">$150</span>
            <span className="text-white">$290</span>
          </div>
          <div className="flex flex-row justify-around">
            <span className="text-white">Chiapas</span>
            <span className="text-white">$150</span>
            <span className="text-white">$290</span>
          </div>
          <div className="flex flex-row justify-around">
            <span className="text-white">Oaxaca</span>
            <span className="text-white">$160</span>
            <span className="text-white">$300</span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-blue-700 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl text-white md:text-3xl md:leading-normal`}>
            <strong>Especialidad</strong> 
          </p>
          <div className="flex flex-row justify-around">
            <span className='text-blue-700'>Nayarit</span>
            <span className="text-white">454 gr</span>
          </div>
          <div className="flex flex-row justify-around">
            <span className="text-white">Nayarit</span>
            <span className="text-white">$260</span>
          </div>
          <div className="flex flex-row justify-around">
            <span className="text-white">Honey</span>
            <span className="text-white">$295</span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-brown-200 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl text-white md:text-3xl md:leading-normal`}>
            <strong>Altura</strong> 
          </p>
          <div className="flex flex-row justify-around">
            <span className='text-brown-200'>Mezcla Especial</span>
            <span className="text-white">227 gr</span>
            <span className="text-white">454 gr</span>
            <span className="text-white">908 gr</span>
          </div>
          <div className="flex flex-row justify-around">
            <span className="text-white">Mezcla Especial</span>
            <span className="text-white">$62</span>
            <span className="text-white">$115</span>
            <span className="text-white">$210</span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
          <Image
            src="/productos.jpeg"
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
