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
        <section id='pricing' className='bg-header relative py-20'>
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
                <h3 className='text-center text-4xl sm:text-65xl font-black'>
                    {t.pricing.heading}
                </h3>

                <p className='text-lg font-normal text-center text-black/60 pt-5 max-w-2xl mx-auto'>
                    {t.pricing.subheading}
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 mb-8 mx-5 gap-6'>
                    {t.pricing.plans.map((item, index) => {
                        const waMessage =
                            lang === 'id'
                                ? `Halo, saya mau beli Transora paket ${item.heading} (${item.price}). Boleh minta info lebih lanjut?`
                                : `Hi, I'd like to buy the Transora ${item.heading} plan (${item.price}). Could you share more information?`

                        return (
                            <div
                                className={`pt-10 pb-16 pl-10 pr-10 rounded-3xl bxshd relative cursor-default group ${item.highlighted
                                        ? 'bg-primary text-white'
                                        : 'bg-white hover:bg-primary'
                                    }`}
                                key={index}>
                                {item.highlighted && (
                                    <span className='absolute -top-4 left-10 bg-midnight_text text-white text-sm font-medium px-4 py-1 rounded-full'>
                                        {t.pricing.mostPopular}
                                    </span>
                                )}
                                <Image
                                    src={withBasePath(item.imgSrc)}
                                    alt='star-image'
                                    width={154}
                                    height={154}
                                    className='absolute bottom-0 right-0 opacity-70'
                                />
                                <h4
                                    className={`text-4xl sm:text-5xl font-semibold mb-2 ${item.highlighted ? 'text-white' : 'text-midnight_text group-hover:text-white'
                                        }`}>
                                    {item.heading}
                                </h4>
                                <p
                                    className={`text-lg font-medium mb-8 ${item.highlighted ? 'text-white/80' : 'text-black/50 group-hover:text-white/80'
                                        }`}>
                                    {item.devices}
                                </p>

                                <h2
                                    className={`text-4xl sm:text-5xl font-semibold mb-1 ${item.highlighted ? 'text-white' : 'text-midnight_text group-hover:text-white'
                                        }`}>
                                    {item.price}
                                </h2>
                                <p
                                    className={`text-lg font-normal mb-8 ${item.highlighted ? 'text-white/70' : 'text-black/40 group-hover:text-white/70'
                                        }`}>
                                    {item.priceNote}
                                </p>

                                <Link
                                    href={getWhatsAppLink(lang, waMessage)}
                                    target='_blank'
                                    className={`block text-center text-xl font-medium w-full rounded-full py-4 px-12 mb-8 border-2 transition duration-300 ${item.highlighted
                                            ? 'bg-white text-primary border-white hover:bg-transparent hover:text-white'
                                            : 'bg-primary text-white border-primary group-hover:bg-white group-hover:text-primary'
                                        }`}>
                                    {t.pricing.ctaButton}
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
                                                className={`text-lg font-medium ${item.highlighted ? 'text-white/80' : 'text-black/60 group-hover:text-white/80'
                                                    }`}>
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <p className='text-center text-black/50 text-base'>{t.pricing.note}</p>
            </div>
        </section>
    )
}

export default Pricing
