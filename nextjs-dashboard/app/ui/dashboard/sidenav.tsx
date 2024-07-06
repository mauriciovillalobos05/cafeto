import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';

export default function SideNav() {
  return (
    <div className="flex flex-row items-center justify-between px-3 py-4 bg-blue-200 md:px-6">
      <Link href="/">
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <NavLinks />
    </div>
  );
}
