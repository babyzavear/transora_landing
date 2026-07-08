'use client'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import { withBasePath } from '@/utils/urlHelper'
import BrowserFrame from '@/components/Common/BrowserFrame'
import { useLanguage } from '@/context/LanguageContext'

const Business = () => {
    const { t } = useLanguage()

    return (
        <section id='reports' className='py-10'>
            <div className='container'>
                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
                    <div data-aos='fade-right' className='col-span-6 flex flex-col justify-center'>
                        <h2 className='text-midnight_text dark:text-white text-4xl sm:text-5xl font-semibold text-center lg:text-start leading-140!'>
                            {t.business.heading}
                        </h2>
                        <h3 className='text-black/75 dark:text-white/70 text-lg font-normal text-center lg:text-start pt-3 leading-180!'>
                            {t.business.subheading}
                        </h3>
                        <Link
                            href={'#features'}
                            scroll={true}
                            className='text-primary hover:text-blue-700 dark:text-white dark:hover:text-primary text-lg font-medium flex items-center gap-2 pt-4 mx-auto lg:mx-0 w-fit transition-transform hover:translate-x-1'>
                            {t.business.cta}
                            <Icon icon='tabler:arrow-right' className='text-2xl' />
                        </Link>
                    </div>
                    <div data-aos='fade-left' className='col-span-6 flex justify-center mt-10 lg:mt-0'>
                        <BrowserFrame
                            src={withBasePath('/images/business/business.png')}
                            alt='Laporan bisnis Transora'
                            width={1337}
                            height={691}
                            className='w-full max-w-xl'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Business
