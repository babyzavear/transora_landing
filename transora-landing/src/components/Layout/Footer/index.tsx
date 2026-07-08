'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import { withBasePath } from '@/utils/urlHelper'
import { useLanguage } from '@/context/LanguageContext'

interface socialLinks {
    imgSrc: string
    link: string
}

const socialLinks: socialLinks[] = [
    {
        imgSrc: 'fa-brands:facebook-f',
        link: 'https://www.facebook.com',
    },
    {
        imgSrc: 'fa6-brands:instagram',
        link: 'https://www.instagram.com',
    },
    {
        imgSrc: 'ic:baseline-whatsapp',
        link: 'https://wa.me/',
    },
]

const navHrefs = ['#features', '#pricing', '#testimoni']

const Footer = () => {
    const { t } = useLanguage()

    return (
        <div className='bg-midnight_text'>
            <div className='mx-auto max-w-2xl pt-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
                <div className='my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12'>
                    {/* COLUMN-1 */}
                    <div className='sm:col-span-6 lg:col-span-4 flex flex-col gap-4'>
                        <div className='flex shrink-0 items-center'>
                            <Image
                                src={withBasePath('/images/logo/logo-white.svg')}
                                alt='Transora'
                                width={168}
                                height={44}
                            />
                        </div>
                        <p className='text-white/60 text-base max-w-xs'>
                            {t.footer.description}
                        </p>
                    </div>
                    <div className='sm:col-span-6 lg:col-span-4 flex items-center'>
                        <div className='flex flex-wrap gap-4'>
                            {t.footer.links.map((label, i) => (
                                <div key={i}>
                                    <Link
                                        href={navHrefs[i] ?? '#'}
                                        className='text-lg font-normal text-white flex items-center justify-center'>
                                        {label}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='sm:col-span-6 lg:col-span-4'>
                        <div className='flex gap-4 lg:justify-end'>
                            {socialLinks.map((items, i) => (
                                <Link href={items.link} key={i} target='_blank'>
                                    <div className='bg-white/20 h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center text-white hover:text-black hover:bg-white'>
                                        <Icon icon={items.imgSrc} className='text-2xl' />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='pt-12 pb-10 lg:flex items-center justify-between border-t border-t-white/30'>
                    <h4 className='text-lg text-center md:text-start font-normal text-white opacity-60'>
                        &copy; {new Date().getFullYear()} Transora. {t.footer.rights}
                    </h4>
                    <div className='flex gap-5 mt-6 md:mt-0 justify-center md:justify-start'>
                        <h4 className='opacity-60 text-lg font-normal text-white'>
                            <Link href='#'>{t.footer.privacy}</Link>
                        </h4>
                        <div className='h-5 bg-white opacity-60 w-0.5'></div>
                        <h4 className='opacity-60 text-lg font-normal text-white'>
                            <Link href='#'>{t.footer.terms}</Link>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
