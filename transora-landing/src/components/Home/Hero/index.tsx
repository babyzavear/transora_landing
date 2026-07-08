'use client'
import { withBasePath } from '@/utils/urlHelper'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { getWhatsAppLink } from '@/config/site'

const Banner = () => {
    const { lang, t } = useLanguage()

    return (
        <section className='bg-header pt-52 pb-10'>
            <div className='container px-4'>
                <div className='grid grid-cols-1 lg:grid-cols-12'>
                    <div className='col-span-7 flex flex-col justify-evenly relative'>
                        <Image
                            src={withBasePath('/images/hero/star.svg')}
                            alt='star-image'
                            width={95}
                            height={97}
                            className='absolute top-[-74px] right-[51px]'
                        />
                        <Image
                            src={withBasePath('/images/hero/lineone.svg')}
                            alt='line-image'
                            width={190}
                            height={148}
                            className='absolute top-[-74px] right-[51px]'
                        />
                        <h1 className='text-midnight_text text-4xl md:text-86 text-center lg:text-start font-semibold pt-5'>
                            {t.hero.title}
                        </h1>
                        <h3 className='text-black opacity-75 text-lg font-normal text-center lg:text-start pt-8'>
                            {t.hero.subtitle}
                        </h3>
                        <div className='pt-8 mx-auto lg:mx-0 flex flex-col sm:flex-row gap-4'>
                            <Link
                                href={getWhatsAppLink(lang)}
                                target='_blank'
                                className='text-white text-xl font-medium py-6 px-12 rounded-full transition duration-300 border border-primary bg-primary hover:bg-transparent hover:text-primary text-center'>
                                {t.hero.ctaPrimary}
                            </Link>
                            <Link
                                href='#features'
                                className='text-primary text-xl font-medium py-6 px-12 rounded-full transition duration-300 border border-primary bg-transparent hover:bg-primary hover:text-white text-center'>
                                {t.hero.ctaSecondary}
                            </Link>
                        </div>
                    </div>
                    <div className='col-span-5 flex justify-center xl:-mb-32 xl:-mr-32 pt-10 lg:pt-0'>
                        <Image
                            src={withBasePath('/images/hero/banner.png')}
                            alt='Transora POS dashboard'
                            width={1000}
                            height={805}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
