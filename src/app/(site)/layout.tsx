import './../globals.css';
import type { Metadata } from 'next';
import {Header} from "@/src/app/components/layout/header"
import {Footer} from "@/src/app/components/layout/footer"


export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <Header/>
        <main className='w-full max-w-6xl mx-auto p-6'>
          {children}
        </main>
       <Footer />
    </div>
  );
}
