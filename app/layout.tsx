import type { Metadata } from 'next'
import './globals.css'
import Nav from "../components/Nav"






export const metadata: Metadata = {
  title: 'Gazda renovation',
  description: 'Home renovation',


}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav/>
         <main className="relative max-w-[1440px] mx-auto">
          {children}</main>
         
        
      
      </body>
    </html>
  )
}
