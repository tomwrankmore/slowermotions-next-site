import '../globals.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Slower motions',
  description: 'This is a collection of interviews.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
