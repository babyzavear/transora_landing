'use client'
import Script from 'next/script'
import { siteConfig } from '@/config/site'

declare global {
    interface Window {
        Calendly?: {
            initPopupWidget: (options: { url: string }) => void
        }
    }
}

interface CalendlyPopupButtonProps {
    className?: string
    children: React.ReactNode
    url?: string
}

/**
 * Tombol yang membuka jadwal demo Calendly sebagai popup melayang di atas
 * halaman. Untuk mengganti link Calendly, ubah `calendlyDemoLink` di
 * src/config/site.ts.
 */
const CalendlyPopupButton = ({ className, children, url }: CalendlyPopupButtonProps) => {
    const calendlyUrl = url ?? siteConfig.calendlyDemoLink

    const openCalendly = () => {
        if (typeof window !== 'undefined' && window.Calendly) {
            window.Calendly.initPopupWidget({ url: calendlyUrl })
        } else {
            // Fallback jika script Calendly belum siap: buka di tab baru.
            window.open(calendlyUrl, '_blank')
        }
    }

    return (
        <>
            {/* Script & CSS resmi Calendly, dimuat sekali saat komponen ini dipakai */}
            <link
                rel='stylesheet'
                href='https://assets.calendly.com/assets/external/widget.css'
            />
            <Script
                src='https://assets.calendly.com/assets/external/widget.js'
                strategy='lazyOnload'
            />
            <button type='button' onClick={openCalendly} className={className}>
                {children}
            </button>
        </>
    )
}

export default CalendlyPopupButton
