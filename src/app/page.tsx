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
    'Transora adalah aplikasi kasir (POS) offline-first: transaksi, stok, cetak struk, dan laporan penjualan dalam satu aplikasi. Lisensi sekali bayar, tanpa langganan bulanan.',
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
