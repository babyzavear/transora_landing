import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import WhatsAppButton from '@/components/WhatsAppButton'
import Aoscompo from '@/utils/aos'
import { LanguageProvider } from '@/context/LanguageContext'
import { ThemeProvider } from 'next-themes'
const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='id' suppressHydrationWarning>
      <body className={`${font.className}`}>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false}>
          <LanguageProvider>
            <Aoscompo>
              <Header />
              {children}
              <Footer />
            </Aoscompo>
            <ScrollToTop />
            <WhatsAppButton />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
