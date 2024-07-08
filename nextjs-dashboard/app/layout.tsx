import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import SideNav from '@/app/ui/dashboard/sidenav';
import BottomNav from './ui/dashboard/bottomnav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex-col">
          <div className="w-full flex-none">
            <SideNav />
          </div>
          <div className="flex-grow p-6 pt-0 md:overflow-y-auto md:p-12 md:pt-6">
            {children}
          </div>
        </div>
        <div className="side-nav">
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
