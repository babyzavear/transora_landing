/**
 * Konfigurasi utama landing page Transora.
 *
 * PENTING: ganti `whatsappNumber` di bawah dengan nomor WhatsApp bisnis
 * kamu yang sebenarnya (format internasional TANPA tanda "+", tanpa spasi,
 * contoh Indonesia: "6281234567890"). Semua tombol CTA di landing page ini
 * ("Beli Sekarang", "Coba Gratis", dll) memakai nilai dari sini, jadi cukup
 * diganti sekali di satu tempat.
 */
export const siteConfig = {
  name: 'Transora',
  tagline: {
    id: 'Aplikasi Kasir & POS Pintar untuk Bisnis Anda',
    en: 'Smart POS Application for Your Business',
  },
  // GANTI dengan nomor WhatsApp bisnis kamu (format: kode negara + nomor, tanpa "+")
  whatsappNumber: '6281234567890',
} as const

/**
 * Bikin link wa.me dengan pesan default yang sudah di-encode, sesuai bahasa
 * yang sedang aktif di landing page.
 */
export function getWhatsAppLink(lang: 'id' | 'en', customMessage?: string): string {
  const defaultMessage =
    lang === 'id'
      ? 'Halo, saya tertarik dengan Transora (aplikasi kasir/POS). Boleh minta info lebih lanjut?'
      : "Hi, I'm interested in Transora POS. Could you share more information?"
  const message = customMessage ?? defaultMessage
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}
