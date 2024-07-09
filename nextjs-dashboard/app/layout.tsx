import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import SideNav from '@/app/ui/dashboard/sidenav';
import ClientSideLayout from '@/app/ClientSideLayout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex-col">
          <div className="w-full flex-none">
            <SideNav />
          </div>
          <ClientSideLayout>
            {children}
          </ClientSideLayout>
        </div>
      </body>
    </html>
  );
}
