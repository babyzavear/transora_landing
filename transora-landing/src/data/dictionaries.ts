export type Lang = 'id' | 'en'

export const dictionaries = {
  id: {
    nav: {
      features: 'Fitur',
      pricing: 'Harga',
      testimonial: 'Testimoni',
    },
    header: {
      ctaSecondary: 'Lihat Fitur',
      ctaPrimary: 'Beli Sekarang',
    },
    hero: {
      title: 'Kasir Pintar, Bisnis Auto Rapi.',
      subtitle:
        'Transora adalah aplikasi kasir (POS) yang mencatat setiap transaksi, stok, dan laporan penjualan secara otomatis — tetap jalan walau internet mati, dan cukup dibeli sekali tanpa langganan bulanan.',
      ctaPrimary: 'Coba Gratis Sekarang',
      ctaSecondary: 'Lihat Cara Kerjanya',
    },
    features: {
      heading: 'Semua yang Toko Kamu Butuhkan.',
      subheading:
        'Dari kasir harian sampai laporan akhir bulan, Transora bantu bereskan operasional tokomu dalam satu aplikasi.',
      items: [
        {
          imgSrc: '/images/features/time.svg',
          heading: 'Transaksi Kilat, Offline-First',
          paragraph:
            'Input pesanan dan hitung kembalian dalam hitungan detik. Tetap bisa dipakai jualan meski sinyal internet lagi jelek.',
        },
        {
          imgSrc: '/images/features/signal.svg',
          heading: 'Laporan & Insight Real-time',
          paragraph:
            'Pantau omzet, produk terlaris, dan jam ramai toko langsung dari dashboard — tanpa perlu hitung manual tiap hari.',
        },
        {
          imgSrc: '/images/features/dollar.svg',
          heading: 'Satu Sistem untuk Semua Pembayaran',
          paragraph:
            'Terima tunai, QRIS, e-wallet, sampai kartu debit — semua tercatat otomatis dalam satu laporan yang sama.',
        },
      ],
      learnMore: 'Selengkapnya',
    },
    business: {
      heading: 'Ambil Keputusan Bisnis Lebih Cepat dengan Transora.',
      subheading:
        'Kelola stok produk, pantau barang yang mau habis, dan lihat performa tiap outlet dari satu dashboard yang sama — cocok untuk usaha yang baru buka satu cabang maupun yang sudah punya banyak toko.',
      cta: 'Pelajari fitur laporan',
    },
    payment: {
      heading: 'Cetak Struk & Tiket Dapur Otomatis.',
      subheading:
        'Setiap transaksi langsung bisa dicetak ke printer struk dan printer dapur, atau discan lewat barcode scanner untuk mempercepat antrean saat jam sibuk.',
      cta: 'Lihat semua fitur',
    },
    people: {
      heading: 'Dipercaya Pelaku Usaha di Seluruh Indonesia.',
      subheading:
        'Dari warung kopi, toko kelontong, sampai resto dengan banyak cabang — Transora bantu operasional harian jadi lebih rapi dan mudah dipantau.',
      cta: 'Baca cerita mereka',
      quote:
        '"Sejak pakai Transora, tutup kasir yang dulu bisa satu jam sekarang cuma 10 menit. Laporan harian juga tinggal export, gak perlu hitung manual lagi."',
      name: 'Budi Santoso',
      role: 'Pemilik, Kedai Kopi Nusantara',
    },
    pricing: {
      heading: 'Investasi Sekali, Pakai Selamanya.',
      subheading:
        'Lisensi Transora dibeli sekali di awal — tidak ada biaya bulanan atau tahunan. Pilih paket sesuai jumlah perangkat kasir yang kamu butuhkan.',
      note: 'Sudah termasuk update aplikasi. Butuh perangkat lebih banyak? Hubungi kami untuk paket khusus.',
      ctaButton: 'Beli via WhatsApp',
      mostPopular: 'Paling Laris',
      plans: [
        {
          heading: 'Starter',
          price: 'Rp299rb',
          priceNote: 'sekali bayar',
          devices: '1 perangkat kasir',
          option: [
            'Transaksi & manajemen produk',
            'Cetak struk otomatis',
            'Laporan penjualan harian',
            'Bisa dipakai offline',
          ],
          imgSrc: '/images/pricing/starone.svg',
          highlighted: false,
        },
        {
          heading: 'Business',
          price: 'Rp599rb',
          priceNote: 'sekali bayar',
          devices: 'hingga 2 perangkat kasir',
          option: [
            'Semua fitur Starter',
            'Cetak tiket dapur otomatis',
            'Scan barcode produk',
            'Backup data otomatis',
          ],
          imgSrc: '/images/pricing/startwo.svg',
          highlighted: true,
        },
        {
          heading: 'Pro Multi-Outlet',
          price: 'Rp1.290rb',
          priceNote: 'sekali bayar',
          devices: 'hingga 5 perangkat kasir',
          option: [
            'Semua fitur Business',
            'Laporan gabungan multi-outlet',
            'Backup ke cloud',
            'Dukungan prioritas via WhatsApp',
          ],
          imgSrc: '/images/pricing/starthree.svg',
          highlighted: false,
        },
      ],
    },
    footer: {
      links: ['Fitur', 'Harga', 'Testimoni'],
      description:
        'Transora — aplikasi kasir (POS) offline-first untuk toko, warung, kafe, dan resto di seluruh Indonesia.',
      rights: 'Seluruh hak cipta dilindungi.',
      privacy: 'Kebijakan Privasi',
      terms: 'Syarat & Ketentuan',
    },
  },
  en: {
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      testimonial: 'Testimonials',
    },
    header: {
      ctaSecondary: 'See Features',
      ctaPrimary: 'Buy Now',
    },
    hero: {
      title: 'Smart Checkout, Effortless Business.',
      subtitle:
        'Transora is a point-of-sale (POS) app that automatically records every transaction, stock change, and sales report — it keeps working even when the internet is down, and you buy it once with no monthly subscription.',
      ctaPrimary: 'Start Free Trial',
      ctaSecondary: 'See How It Works',
    },
    features: {
      heading: 'Everything Your Store Needs.',
      subheading:
        'From daily checkout to end-of-month reports, Transora handles your store operations in one app.',
      items: [
        {
          imgSrc: '/images/features/time.svg',
          heading: 'Lightning-Fast, Offline-First',
          paragraph:
            'Ring up orders and calculate change in seconds. Keep selling even when your internet connection is spotty.',
        },
        {
          imgSrc: '/images/features/signal.svg',
          heading: 'Real-time Reports & Insights',
          paragraph:
            'Track revenue, best-selling items, and peak hours straight from your dashboard — no more manual counting every day.',
        },
        {
          imgSrc: '/images/features/dollar.svg',
          heading: 'One System for Every Payment',
          paragraph:
            'Accept cash, QR payments, e-wallets, and debit cards — all recorded automatically in a single report.',
        },
      ],
      learnMore: 'Learn more',
    },
    business: {
      heading: 'Make Faster Business Decisions with Transora.',
      subheading:
        'Manage product stock, track low inventory, and see how each outlet is performing from one dashboard — perfect whether you run a single shop or several branches.',
      cta: 'Explore reporting features',
    },
    payment: {
      heading: 'Automatic Receipts & Kitchen Tickets.',
      subheading:
        'Every transaction can be printed straight to a receipt printer and kitchen printer, or scanned with a barcode scanner to speed up the queue during rush hour.',
      cta: 'See all features',
    },
    people: {
      heading: 'Trusted by Business Owners Everywhere.',
      subheading:
        'From coffee shops and corner stores to multi-branch restaurants — Transora keeps daily operations tidy and easy to track.',
      cta: 'Read their stories',
      quote:
        '"Since switching to Transora, closing the register used to take an hour — now it takes 10 minutes. Daily reports are just one export away, no more manual counting."',
      name: 'Budi Santoso',
      role: 'Owner, Kedai Kopi Nusantara',
    },
    pricing: {
      heading: 'Pay Once, Use Forever.',
      subheading:
        'Transora is a one-time license — no monthly or yearly fees. Pick the plan that matches how many POS devices you need.',
      note: 'App updates included. Need more devices? Contact us for a custom plan.',
      ctaButton: 'Buy via WhatsApp',
      mostPopular: 'Most Popular',
      plans: [
        {
          heading: 'Starter',
          price: '$19',
          priceNote: 'one-time',
          devices: '1 POS device',
          option: [
            'Transactions & product management',
            'Automatic receipt printing',
            'Daily sales reports',
            'Works offline',
          ],
          imgSrc: '/images/pricing/starone.svg',
          highlighted: false,
        },
        {
          heading: 'Business',
          price: '$39',
          priceNote: 'one-time',
          devices: 'up to 2 POS devices',
          option: [
            'Everything in Starter',
            'Automatic kitchen ticket printing',
            'Barcode product scanning',
            'Automatic data backup',
          ],
          imgSrc: '/images/pricing/startwo.svg',
          highlighted: true,
        },
        {
          heading: 'Pro Multi-Outlet',
          price: '$79',
          priceNote: 'one-time',
          devices: 'up to 5 POS devices',
          option: [
            'Everything in Business',
            'Combined multi-outlet reports',
            'Cloud backup',
            'Priority support via WhatsApp',
          ],
          imgSrc: '/images/pricing/starthree.svg',
          highlighted: false,
        },
      ],
    },
    footer: {
      links: ['Features', 'Pricing', 'Testimonials'],
      description:
        'Transora — an offline-first point-of-sale (POS) app for shops, cafes, and restaurants everywhere.',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
    },
  },
} as const

export type Dictionary = typeof dictionaries.id
