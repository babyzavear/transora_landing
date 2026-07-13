'use client'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'

// Ganti nomor di bawah ini jika suatu saat nomor WA berubah.
// Format harus diawali kode negara 62 (tanpa angka 0 di depan).
const WHATSAPP_NUMBER = '6289697510208'
const WHATSAPP_MESSAGE = 'Halo, saya ingin bertanya lebih lanjut tentang Transora.'

const WhatsAppButton = () => {
    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

    return (
        <div className='fixed bottom-8 left-8 z-999 flex items-center gap-3'>
            <Link
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Chat via WhatsApp'
                className='group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-[#1ebe5b]'
            >
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75'></span>
                <Icon icon='ic:baseline-whatsapp' className='relative text-3xl' />
                <span className='pointer-events-none absolute left-16 whitespace-nowrap rounded-md bg-midnight_text px-3 py-2 text-sm text-white opacity-0 shadow-md transition duration-300 ease-in-out group-hover:opacity-100'>
                    Chat via WhatsApp
                </span>
            </Link>
        </div>
    )
}

export default WhatsAppButton
