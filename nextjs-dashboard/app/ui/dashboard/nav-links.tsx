'use client';

import {
  HomeIcon,
  ShoppingCartIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';

const links = [
  { name: 'Home', href: '/home', icon: HomeIcon },
  { name: 'Productos', href: '/productos', icon: ShoppingCartIcon },
  { name: 'Entregas', href: '/pedidos', icon: TruckIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[32px] grow items-center justify-center gap-2 rounded-md bg-brown-400 p-3 text-base font-medium hover:bg-brown-100 hover:text-brown-400 md:flex-none md:justify-start md:p-2 md:px-3flex h-[36px] w-[180px] grow items-center justify-center gap-2 rounded-md bg-brown-900 p-2 text-xs font-medium hover:bg-brown-100 hover:text-brown-400 md:flex-none md:justify-start md:p-2 md:px-3',
              { 'bg-brown-100 text-brown-400': isActive }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
