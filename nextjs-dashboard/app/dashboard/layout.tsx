import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <div className="w-full flex-none">
        <SideNav />
      </div>
      <div className="flex-grow p-6 pt-0 md:overflow-y-auto md:p-12 md:pt-6">{children}</div>
    </div>
  );
}
