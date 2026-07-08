import React from 'react'
import Hero from '@/components/Home/Hero'
import People from '@/components/Home/People'
import Features from '@/components/Home/Features'
import Business from '@/components/Home/Business'
import Payment from '@/components/Home/Payment'
import Pricing from '@/components/Home/Pricing'
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
      <People />
      <Features />
      <Business />
      <Payment />
      <Pricing />
    </main>
  )
}
