export type Lang = 'id' | 'en'

export const dictionaries = {
  id: {
    nav: {
      features: 'Fitur',
      pricing: 'Harga',
      testimonial: 'Testimoni',
      faq: 'FAQ',
    },
    header: {
      ctaSecondary: 'Lihat Fitur',
      ctaPrimary: 'Beli Sekarang',
    },
    hero: {
      title: 'Kasir Pintar, Bisnis Auto Rapi.',
      subtitle:
        'Transora adalah aplikasi Point of Sale (POS), offline-first yang dirancang khusus untuk membantu Usaha Mikro, Kecil, dan Menengah (UMKM) di Indonesia. Aplikasi ini dibuat dengan filosofi bahwa teknologi kasir modern harus dapat diakses oleh siapa saja tanpa hambatan biaya atau infrastruktur internet. Dengan transora, pemilik bisnis dapat mengelola penjualan, inventaris, dan laporan keuangan mereka dengan mudah, bahkan di daerah dengan koneksi internet yang terbatas.',
      ctaPrimary: 'Coba Sekarang',
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
        {
          imgSrc: '/images/features/box.svg',
          heading: 'Kelola Stok Tanpa Ribet',
          paragraph:
            'Dapat notifikasi otomatis saat stok menipis, lacak barang keluar-masuk, dan atur produk multi-varian dengan mudah.',
        },
      ],
      learnMore: 'Selengkapnya',
    },
    stats: {
      items: [
        { value: '50+', label: 'Toko & usaha aktif memakai Transora' },
        { value: '10rb+', label: 'Transaksi diproses tiap bulan' },
        { value: '99.9%', label: 'Uptime aplikasi kasir' },
        { value: '10 Menit', label: 'Rata-rata waktu tutup kasir' },
      ],
    },
    howItWorks: {
      heading: 'Mulai Jualan dalam 3 Langkah Mudah.',
      subheading:
        'Tidak perlu tim IT atau instalasi ribet. Transora bisa langsung dipakai jualan hari ini juga.',
      steps: [
        {
          number: '01',
          heading: 'Unduh & Pasang Aplikasi',
          paragraph:
            'Install Transora di perangkat kasir kamu — laptop, tablet, atau HP Android. Proses setup hanya butuh beberapa menit.',
        },
        {
          number: '02',
          heading: 'Tambahkan Produk & Stok',
          paragraph:
            'Masukkan daftar produk, harga, dan stok awal. Bisa diimpor sekaligus dari spreadsheet supaya lebih cepat.',
        },
        {
          number: '03',
          heading: 'Mulai Transaksi Pertamamu',
          paragraph:
            'Kasir langsung siap dipakai — terima pembayaran, cetak struk, dan pantau laporan penjualan secara real-time.',
        },
      ],
    },
    business: {
      heading: 'Ambil Keputusan Bisnis Lebih Cepat dengan Transora.',
      subheading:
        'Kelola stok produk, pantau barang yang mau habis, dan lihat performa tiap outlet dari satu dashboard yang sama — cocok untuk usaha yang baru buka satu cabang maupun yang sudah punya banyak toko.',
      cta: 'Pelajari fitur laporan',
    },
    payment: {
      heading: 'Cetak Laporan Harian ataupun bulanan.',
      subheading:
        'Cetak laporan penjualan harian atau bulanan dengan satu klik, mempermudah anda dalam mengelola bisnis.',
      cta: 'Lihat semua fitur',
    },
    people: {
      heading: 'Dipercaya Pelaku Usaha di Seluruh Indonesia.',
      subheading:
        'Dari warung kopi, toko kelontong, sampai resto dengan banyak cabang — Transora bantu operasional harian jadi lebih rapi dan mudah dipantau.',
      cta: 'Baca cerita mereka',
      testimonials: [
        {
          quote:
            '"Sejak pakai Transora, tutup kasir yang dulu bisa satu jam sekarang cuma 10 menit. Laporan harian juga tinggal export, gak perlu hitung manual lagi."',
          name: 'Budi Santoso',
          role: 'Pemilik, Kedai Kopi Nusantara',
          image: '/images/people/budi.jpg',
        },
        {
          quote:
            '"Fitur cetak tiket dapur otomatis bikin pesanan gak ada yang kelewat lagi, walaupun toko lagi ramai-ramainya."',
          name: 'Sri Wulandari',
          role: 'Pemilik, Resto Sederhana',
          image: '/images/people/sri.jpg',
        },
        {
          quote:
            '"Yang paling saya suka, Transora tetap jalan walau internet mati. Buat toko di daerah yang sinyalnya suka hilang, ini penyelamat banget."',
          name: 'Andi Prasetyo',
          role: 'Pemilik, Toko Kelontong Berkah',
          image: '/images/people/andi.jpg',
        },
      ],
    },
    faq: {
      heading: 'Pertanyaan yang Sering Ditanyakan.',
      subheading:
        'Masih ragu? Berikut jawaban untuk pertanyaan yang paling sering ditanyakan sebelum membeli Transora.',
      items: [
        {
          question: 'Apakah Transora bisa dipakai tanpa internet?',
          answer:
            'Bisa. Transora dirancang offline-first, artinya transaksi, stok, dan cetak struk tetap berjalan normal walau koneksi internet sedang mati. Data akan otomatis sinkron begitu internet kembali tersedia.',
        },
        {
          question: 'Apakah ada biaya langganan bulanan?',
          answer:
            'Ya. Transora berlangganan bulanan sesuai paket yang kamu pilih, dan sudah termasuk update aplikasi selama masa aktif langganan. Kalau berlangganan tahunan, kamu bisa lebih hemat dibanding harga bulanan.',
        },
        {
          question: 'Perangkat apa saja yang didukung?',
          answer:
            'Transora bisa dipasang di laptop, tablet, maupun HP Android sebagai perangkat kasir. Kamu juga bisa menghubungkan printer struk, printer dapur, dan barcode scanner sesuai kebutuhan tokomu.',
        },
        {
          question: 'Bagaimana jika saya punya lebih dari satu cabang toko?',
          answer:
            'Paket Pro Multi-Outlet mendukung laporan gabungan dari beberapa cabang sekaligus, jadi kamu bisa memantau performa semua outlet dari satu dashboard. Butuh lebih banyak cabang atau perangkat? Hubungi kami untuk paket khusus.',
        },
        {
          question: 'Bagaimana cara mendapatkan bantuan jika ada kendala?',
          answer:
            'Tim kami siap membantu lewat WhatsApp. Pengguna paket Business dan Pro Multi-Outlet juga mendapatkan jalur dukungan prioritas agar kendala bisa cepat diselesaikan.',
        },
      ],
    },
    finalCta: {
      heading: 'Siap Bikin Kasir Tokomu Lebih Rapi?',
      subheading:
        'Coba Transora sekarang dan rasakan bedanya mengelola toko tanpa ribet hitung manual dan catatan tercecer.',
      ctaPrimary: 'Coba Sekarang',
      ctaSecondary: 'Chat Tim Sales',
    },
    pricing: {
      heading: 'Harga yang Sesuai Kebutuhan Tokomu.',
      subheading:
        'Berlangganan bulanan, atau pilih tahunan supaya lebih hemat. Pilih paket sesuai jumlah perangkat kasir yang kamu butuhkan.',
      note: 'Sudah termasuk update aplikasi. Butuh perangkat lebih banyak? Hubungi kami untuk paket khusus.',
      ctaButton: 'Beli Sekarang',
      mostPopular: 'Paling Laris',
      comingSoonBadge: 'Segera Hadir',
      comingSoonNote: 'Paket ini belum rilis — daftar untuk dapat kabar duluan.',
      comingSoonCta: 'Gabung Waitlist',
      currencyPrefix: 'Rp',
      currencySuffix: 'rb',
      perMonthLabel: '/bulan',
      billingToggle: {
        monthly: 'Bulanan',
        yearly: 'Tahunan',
        savePrefix: 'Hemat',
      },
      yearlyBilledNote: 'ditagih {amount}/tahun',
      monthlyBilledNote: 'ditagih per bulan',
      plans: [
        {
          heading: 'Starter',
          priceMonthly: 49,
          devices: '1 perangkat kasir',
          option: [
            'Semua Fitur Offline',
            'Cetak laporan harian/bulanan',
            'Scan barcode produk',
            'Penyimpanan Cloud 200 MB',
            'Dukungan via WhatsApp',
          ],
          imgSrc: '/images/pricing/starone.svg',
          highlighted: true,
          comingSoon: false,
        },
        {
          heading: 'Business',
          priceMonthly: 89,
          devices: 'hingga 3 perangkat kasir',
          option: [
            'Semua Fitur Offline dan Online',
            'Scan barcode produk',
            'Laporan gabungan multi-outlet',
            'Realtime sync antar cabang/perangkat',
            'Penyimpanan Cloud 500 MB',
            'Dukungan prioritas via WhatsApp',
          ],
          imgSrc: '/images/pricing/startwo.svg',
          highlighted: false,
          comingSoon: true,
        },
        {
          heading: 'Pro Multi-Outlet',
          priceMonthly: 199,
          devices: 'hingga 5 perangkat kasir',
          option: [
            'Semua Fitur Offline dan Online',
            'Scan barcode produk',
            'Laporan gabungan multi-outlet',
            'Realtime sync antar cabang/perangkat',
            'Penyimpanan Cloud 1 GB',
            'Dukungan prioritas via WhatsApp',
          ],
          imgSrc: '/images/pricing/starthree.svg',
          highlighted: false,
          comingSoon: true,
        },
      ],
    },
    footer: {
      links: ['Fitur', 'Harga', 'Testimoni', 'FAQ'],
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
      faq: 'FAQ',
    },
    header: {
      ctaSecondary: 'See Features',
      ctaPrimary: 'Buy Now',
    },
    hero: {
      title: 'Smart Checkout, Effortless Business.',
      subtitle:
        'Transora is an offline-first Point of Sale (POS) application designed specifically to support Micro, Small, and Medium Enterprises (MSMEs) in Indonesia. The app was created based on the philosophy that modern POS technology should be accessible to everyone, free from cost barriers or internet infrastructure limitations. With Transora, business owners can easily manage sales, inventory, and financial reports, even in areas with limited internet connectivity.',
      ctaPrimary: 'Lets Try It',
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
        {
          imgSrc: '/images/features/box.svg',
          heading: 'Hassle-Free Stock Management',
          paragraph:
            'Get automatic low-stock alerts, track incoming and outgoing inventory, and manage multi-variant products with ease.',
        },
      ],
      learnMore: 'Learn more',
    },
    stats: {
      items: [
        { value: '50+', label: 'Active shops & businesses using Transora' },
        { value: '10k+', label: 'Transactions processed every month' },
        { value: '99.9%', label: 'POS application uptime' },
        { value: '10 Min', label: 'Average register close-out time' },
      ],
    },
    howItWorks: {
      heading: 'Start Selling in 3 Simple Steps.',
      subheading:
        "No IT team or complicated setup required. Transora is ready to sell with today.",
      steps: [
        {
          number: '01',
          heading: 'Download & Install',
          paragraph:
            'Install Transora on your checkout device — laptop, tablet, or Android phone. Setup only takes a few minutes.',
        },
        {
          number: '02',
          heading: 'Add Products & Stock',
          paragraph:
            'Enter your product list, prices, and starting inventory. Bulk import from a spreadsheet to get set up even faster.',
        },
        {
          number: '03',
          heading: 'Start Your First Sale',
          paragraph:
            'Your register is ready to go — accept payments, print receipts, and track sales reports in real time.',
        },
      ],
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
      testimonials: [
        {
          quote:
            '"Since switching to Transora, closing the register used to take an hour — now it takes 10 minutes. Daily reports are just one export away, no more manual counting."',
          name: 'Budi Santoso',
          role: 'Owner, Kedai Kopi Nusantara',
          image: '/images/people/budi.jpg',
        },
        {
          quote:
            '"Automatic kitchen ticket printing means orders never get missed, even during our busiest rush hours."',
          name: 'Sri Wulandari',
          role: 'Owner, Resto Sederhana',
          image: '/images/people/sri.jpg',
        },
        {
          quote:
            "\"What I love most is that Transora keeps working even when the internet drops. For a shop in an area with patchy signal, it's a lifesaver.\"",
          name: 'Andi Prasetyo',
          role: 'Owner, Toko Kelontong Berkah',
          image: '/images/people/andi.jpg',
        },
      ],
    },
    faq: {
      heading: 'Frequently Asked Questions.',
      subheading:
        'Still on the fence? Here are answers to the questions we get asked most before people buy Transora.',
      items: [
        {
          question: 'Can Transora be used without internet?',
          answer:
            "Yes. Transora is built offline-first, meaning transactions, stock updates, and receipt printing keep working normally even when your internet connection is down. Data syncs automatically once you're back online.",
        },
        {
          question: 'Is there a monthly subscription fee?',
          answer:
            'Yes. Transora is billed monthly based on the plan you choose, and it includes app updates for the life of your active subscription. Switch to yearly billing to save compared to the monthly price.',
        },
        {
          question: 'What devices are supported?',
          answer:
            'Transora can be installed on a laptop, tablet, or Android phone as your checkout device. You can also connect a receipt printer, kitchen printer, and barcode scanner as needed.',
        },
        {
          question: 'What if I have more than one store location?',
          answer:
            'The Pro Multi-Outlet plan supports combined reporting across several branches, so you can monitor every outlet from one dashboard. Need even more locations or devices? Contact us for a custom plan.',
        },
        {
          question: 'How do I get support if something goes wrong?',
          answer:
            'Our team is available via WhatsApp. Business and Pro Multi-Outlet customers also get priority support so issues get resolved fast.',
        },
      ],
    },
    finalCta: {
      heading: 'Ready to Tidy Up Your Checkout?',
      subheading:
        'Try Transora today and feel the difference of running your store without manual counting and scattered notes.',
      ctaPrimary: 'Lets Try It',
      ctaSecondary: 'Chat with Sales',
    },
    pricing: {
      heading: 'Pricing That Fits Your Store.',
      subheading:
        'Pay monthly, or choose yearly billing to save more. Pick the plan that matches how many POS devices you need.',
      note: 'App updates included. Need more devices? Contact us for a custom plan.',
      ctaButton: 'Buy Now',
      mostPopular: 'Most Popular',
      comingSoonBadge: 'Coming Soon',
      comingSoonNote: "This plan isn't released yet — join the waitlist to hear first.",
      comingSoonCta: 'Join Waitlist',
      currencyPrefix: '$',
      currencySuffix: '',
      perMonthLabel: '/month',
      billingToggle: {
        monthly: 'Monthly',
        yearly: 'Yearly',
        savePrefix: 'Save',
      },
      yearlyBilledNote: 'billed {amount}/year',
      monthlyBilledNote: 'billed monthly',
      plans: [
        {
          heading: 'Starter',
          priceMonthly: 19,
          devices: '1 POS device',
          option: [
            'Transactions & product management',
            'Automatic receipt printing',
            'Daily sales reports',
            'Works offline',
          ],
          imgSrc: '/images/pricing/starone.svg',
          highlighted: false,
          comingSoon: false,
        },
        {
          heading: 'Business',
          priceMonthly: 39,
          devices: 'up to 2 POS devices',
          option: [
            'Everything in Starter',
            'Automatic kitchen ticket printing',
            'Barcode product scanning',
            'Automatic data backup',
          ],
          imgSrc: '/images/pricing/startwo.svg',
          highlighted: true,
          comingSoon: false,
        },
        {
          heading: 'Pro Multi-Outlet',
          priceMonthly: 79,
          devices: 'up to 5 POS devices',
          option: [
            'Everything in Business',
            'Combined multi-outlet reports',
            'Cloud backup',
            'Priority support via WhatsApp',
          ],
          imgSrc: '/images/pricing/starthree.svg',
          highlighted: false,
          comingSoon: true,
        },
      ],
    },
    footer: {
      links: ['Features', 'Pricing', 'Testimonials', 'FAQ'],
      description:
        'Transora — an offline-first point-of-sale (POS) app for shops, cafes, and restaurants everywhere.',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
    },
  },
}

export type Dictionary = typeof dictionaries.id
