'use client'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { getWhatsAppLink } from '@/config/site'

const FinalCta = () => {
    const { lang, t } = useLanguage()

    return (
        <section className='pb-20 px-4'>
            <div className='container'>
                <div className='bg-primary rounded-3xl py-16 px-6 sm:px-16 text-center relative overflow-hidden' data-aos='zoom-in'>
                    <div className='absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10' />
                    <div className='absolute -bottom-20 -left-10 w-64 h-64 rounded-full bg-white/10' />
                    <h2 className='relative text-white text-4xl sm:text-5xl font-semibold leading-140! max-w-2xl mx-auto'>
                        {t.finalCta.heading}
                    </h2>
                    <p className='relative text-white/80 text-lg mt-5 max-w-xl mx-auto'>
                        {t.finalCta.subheading}
                    </p>
                    <div className='relative pt-10 flex flex-col sm:flex-row gap-4 justify-center'>
                        <Link
                            href='#pricing'
                            className='text-primary bg-white text-xl font-medium py-5 px-10 rounded-full transition duration-300 border border-white hover:bg-transparent hover:text-white text-center'>
                            {t.finalCta.ctaPrimary}
                        </Link>
                        <Link
                            href={getWhatsAppLink(lang)}
                            target='_blank'
                            className='text-white text-xl font-medium py-5 px-10 rounded-full transition duration-300 border border-white bg-transparent hover:bg-white hover:text-primary text-center'>
                            {t.finalCta.ctaSecondary}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FinalCta
