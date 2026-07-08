'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import { withBasePath } from '@/utils/urlHelper'
import { useLanguage } from '@/context/LanguageContext'

const Payment = () => {
    const { t } = useLanguage()

    return (
        <section className='py-10'>
            <div className='container'>
                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
                    <div className='col-span-6'>
                        <Image
                            src={withBasePath('/images/payment/payment.png')}
                            alt='Cetak struk Transora'
                            width={600}
                            height={500}
                        />
                    </div>
                    <div className='col-span-6 flex flex-col justify-center'>
                        <h2 className='text-midnight_text text-4xl sm:text-5xl font-semibold text-center lg:text-start leading-140!'>
                            {t.payment.heading}
                        </h2>
                        <p className='text-black/75 text-lg font-normal text-center lg:text-start leading-180! pt-3'>
                            {t.payment.subheading}
                        </p>
                        <Link
                            href={'#pricing'}
                            scroll={true}
                            className='text-primary hover:text-blue-700 text-lg font-medium flex items-center gap-2 pt-4 mx-auto lg:mx-0'>
                            {t.payment.cta}
                            <Icon icon='tabler:arrow-right' className='text-2xl' />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Payment
