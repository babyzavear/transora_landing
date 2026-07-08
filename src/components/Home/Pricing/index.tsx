'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import { withBasePath } from '@/utils/urlHelper'
import { useLanguage } from '@/context/LanguageContext'
import { getWhatsAppLink } from '@/config/site'

const Pricing = () => {
    const { lang, t } = useLanguage()

    return (
        <section id='pricing' className='bg-header dark:bg-none dark:bg-slate-900 relative py-20 transition-colors duration-300'>
            <Image
                src={withBasePath('/images/pricing/upperline.png')}
                alt='upperline-image'
                width={280}
                height={219}
                className='absolute top-[160px] left-[90px] hidden sm:block'
            />
            <Image
                src={withBasePath('/images/pricing/lowerline.png')}
                alt='lowerline-image'
                width={180}
                height={100}
                className='absolute bottom-[0px] right-[90px]'
            />
            <div className='container px-4'>
                <h3
                    data-aos='fade-up'
                    className='text-center text-4xl sm:text-65xl font-black text-midnight_text dark:text-white'>
                    {t.pricing.heading}
                </h3>

                <p
                    data-aos='fade-up'
                    data-aos-delay='100'
                    className='text-lg font-normal text-center text-black/60 dark:text-white/60 pt-5 max-w-2xl mx-auto'>
                    {t.pricing.subheading}
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 mb-8 mx-5 gap-6'>
                    {t.pricing.plans.map((item, index) => {
                        const waMessage = item.comingSoon
                            ? lang === 'id'
                                ? `Halo, saya mau daftar waitlist untuk paket Transora ${item.heading}. Tolong kabari saya kalau sudah rilis ya.`
                                : `Hi, I'd like to join the waitlist for the Transora ${item.heading} plan. Please let me know when it's released.`
                            : lang === 'id'
                                ? `Halo, saya mau beli Transora paket ${item.heading} (${item.price}). Boleh minta info lebih lanjut?`
                                : `Hi, I'd like to buy the Transora ${item.heading} plan (${item.price}). Could you share more information?`

                        const hoverFlip = !item.highlighted && !item.comingSoon

                        return (
                            <div
                                data-aos='fade-up'
                                data-aos-delay={index * 120}
                                className={`pt-10 pb-16 pl-10 pr-10 rounded-3xl bxshd relative cursor-default group transition-all duration-300 hover:-translate-y-1 ${item.highlighted
                                        ? 'bg-primary text-white'
                                        : 'bg-white dark:bg-slate-800'
                                    } ${hoverFlip ? 'hover:bg-primary' : ''}`}
                                key={index}>
                                {item.highlighted && (
                                    <span className='absolute -top-4 left-10 bg-midnight_text text-white text-sm font-medium px-4 py-1 rounded-full z-20'>
                                        {t.pricing.mostPopular}
                                    </span>
                                )}
                                {item.comingSoon && (
                                    <span className='absolute -top-4 left-10 bg-amber-500 text-white text-sm font-medium px-4 py-1 rounded-full z-20'>
                                        {t.pricing.comingSoonBadge}
                                    </span>
                                )}
                                <Image
                                    src={withBasePath(item.imgSrc)}
                                    alt=''
                                    width={120}
                                    height={120}
                                    aria-hidden='true'
                                    className='absolute bottom-0 right-0 opacity-20 pointer-events-none select-none z-0'
                                />
                                <div className='relative z-10'>
                                <h4
                                    className={`text-4xl sm:text-5xl font-semibold mb-2 ${item.highlighted ? 'text-white' : `text-midnight_text dark:text-white ${hoverFlip ? 'group-hover:text-white' : ''}`
                                        }`}>
                                    {item.heading}
                                </h4>
                                <p
                                    className={`text-lg font-medium mb-8 ${item.highlighted ? 'text-white/80' : `text-black/50 dark:text-white/50 ${hoverFlip ? 'group-hover:text-white/80' : ''}`
                                        }`}>
                                    {item.devices}
                                </p>

                                <h2
                                    className={`text-4xl sm:text-5xl font-semibold mb-1 ${item.highlighted ? 'text-white' : `text-midnight_text dark:text-white ${hoverFlip ? 'group-hover:text-white' : ''}`
                                        }`}>
                                    {item.price}
                                </h2>
                                <p
                                    className={`text-lg font-normal ${item.comingSoon ? 'mb-1' : 'mb-8'} ${item.highlighted ? 'text-white/70' : `text-black/40 dark:text-white/40 ${hoverFlip ? 'group-hover:text-white/70' : ''}`
                                        }`}>
                                    {item.priceNote}
                                </p>

                                {item.comingSoon && (
                                    <p className='text-sm text-amber-600 dark:text-amber-400 mb-8'>
                                        {t.pricing.comingSoonNote}
                                    </p>
                                )}

                                <Link
                                    href={getWhatsAppLink(lang, waMessage)}
                                    target='_blank'
                                    className={`block text-center text-xl font-medium w-full rounded-full py-4 px-12 mb-8 border-2 transition duration-300 ${item.highlighted
                                            ? 'bg-white text-primary border-white hover:bg-transparent hover:text-white'
                                            : item.comingSoon
                                                ? 'bg-transparent text-primary dark:text-white border-primary dark:border-white/40 hover:bg-primary hover:text-white hover:border-primary'
                                                : 'bg-primary text-white border-primary group-hover:bg-white group-hover:text-primary'
                                        }`}>
                                    {item.comingSoon ? t.pricing.comingSoonCta : t.pricing.ctaButton}
                                </Link>

                                <div className='mt-2'>
                                    {item.option.map((feature, idx) => (
                                        <div key={idx} className='flex gap-4 pt-4'>
                                            <Icon
                                                icon='tabler:circle-check-filled'
                                                className={`text-2xl ${item.highlighted ? 'text-white' : 'text-emerald-400'
                                                    }`}
                                            />
                                            <p
                                                className={`text-lg font-medium ${item.highlighted ? 'text-white/80' : `text-black/60 dark:text-white/60 ${hoverFlip ? 'group-hover:text-white/80' : ''}`
                                                    }`}>
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <p className='text-center text-black/50 dark:text-white/50 text-base'>{t.pricing.note}</p>
            </div>
        </section>
    )
}

export default Pricing
