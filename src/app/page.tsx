import React from 'react'
import Hero from '@/components/Home/Hero'
import Stats from '@/components/Home/Stats'
import Features from '@/components/Home/Features'
import HowItWorks from '@/components/Home/HowItWorks'
import Business from '@/components/Home/Business'
import Payment from '@/components/Home/Payment'
import People from '@/components/Home/People'
import Pricing from '@/components/Home/Pricing'
import FAQ from '@/components/Home/FAQ'
import FinalCta from '@/components/Home/FinalCta'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Transora — Aplikasi Kasir & POS Pintar untuk Bisnis Anda',
  description:
    'Transora adalah aplikasi Point of Sale (POS), offline-first yang dirancang khusus untuk membantu Usaha Mikro, Kecil, dan Menengah (UMKM) di Indonesia. Aplikasi ini dibuat dengan filosofi bahwa teknologi kasir modern harus dapat diakses oleh siapa saja tanpa hambatan biaya atau infrastruktur internet. Dengan transora, pemilik bisnis dapat mengelola penjualan, inventaris, dan laporan keuangan mereka dengan mudah, bahkan di daerah dengan koneksi internet yang terbatas.',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Business />
      <Payment />
      <People />
      <Pricing />
      <FAQ />
      <FinalCta />
    </main>
  )
}
