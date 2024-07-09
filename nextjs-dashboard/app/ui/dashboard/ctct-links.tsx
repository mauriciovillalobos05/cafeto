'use client';

import clsx from 'clsx';

const links = [
  { name: 'Whatsapp', href: 'https://wa.me/3314873995', icon: '/wp.png' },
  { name: 'Facebook', href: 'https://www.facebook.com/share/TZu7j5fqj521SkzS/?mibextid=LQQJ4d', icon: '/fb.png' },
  { name: 'Instagram', href: 'https://www.instagram.com/pasion_cafeto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: '/ig.png' },
  { name: 'Mail', href: 'mailto:direccion@pasioncafeto.com', icon: '/correo.png' },
];

export default function CtctLinks() {
  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"  
          rel="noopener noreferrer"  
          className={clsx(
            'flex h-[32px] w-[85px] items-center justify-center gap-2 rounded-md p-2 text-xs font-medium ',
          )}
        >
          <img src={link.icon} className="w-6 h-6" alt={link.name} />
          <p className="hidden md:block"></p>
        </a>
      ))}
      
      <img src="/mex.png" className="w-6 h-6" alt="Mex" />
    </>
  );
}
