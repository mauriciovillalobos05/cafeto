'use client';

import {
  HomeIcon,
  ShoppingCartIcon,
  TruckIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Productos',
    href: '/dashboard/catalogue',
    icon: ShoppingCartIcon,
  },
  { name: 'Entregas', href: '/dashboard/deliveries', icon: TruckIcon },
  { name: 'Contacto', href: '/dashboard/contact', icon: PhoneIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-brown-300 hover:text-brown-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-brown-100 text-brown-600': pathname === link.href,
              },
            )}
            >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
