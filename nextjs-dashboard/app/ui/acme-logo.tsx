import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div className="relative w-40 h-20 md:w-52 md:h-30 flex-shrink-0 mt-4 md:mt-0">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/cafetologo.png"
          layout="responsive"
          width={520}
          height={320}
          objectFit="contain"
          alt="Logo de Pasion Cafeto"
          className="transform translate-y-2 md:translate-y-0"
        />
      </div>
    </div>
  );
}
