"use client";

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import BottomNav from './ui/dashboard/bottomnav';

const ClientSideLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isHiddenPage, setIsHiddenPage] = useState(false);

  useEffect(() => {
    const hiddenRoutes = ['/catalogo/mezclaespecial', '/catalogo/veracruz','/catalogo/oaxaca','/catalogo/chiapas','/catalogo/nayarit','/catalogo/honey'];
    setIsHiddenPage(hiddenRoutes.includes(pathname));
  }, [pathname]);

  return (
    <>
      <div className="flex-grow p-6 pt-0 md:overflow-y-auto md:p-12 md:pt-6">
        {children}
      </div>
      {!isHiddenPage && (
        <div className="side-nav">
          <BottomNav />
        </div>
      )}
    </>
  );
};

export default ClientSideLayout;
