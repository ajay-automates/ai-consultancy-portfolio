import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AI Automation Consultancy | Custom Automation Solutions',
  description: 'We build custom AI automation for growing businesses. Email outreach, customer support, lead scoring, and more.',
  keywords: 'AI automation, consultancy, custom automation, email automation, chatbot, lead scoring',
  openGraph: {
    title: 'AI Automation Consultancy',
    description: 'Custom AI automation solutions for growing businesses',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-black text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
