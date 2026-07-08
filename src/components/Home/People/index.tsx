'use client'
import Image from 'next/image'
import { withBasePath } from '@/utils/urlHelper'
import { useLanguage } from '@/context/LanguageContext'

const People = () => {
    const { t } = useLanguage()

    return (
        <section className='pt-32 pb-20' id='testimoni'>
            <div className='container px-4'>
                <div data-aos='fade-up' className='max-w-2xl mx-auto text-center mb-14'>
                    <h2 className='text-midnight_text dark:text-white text-4xl sm:text-5xl font-semibold leading-140!'>
                        {t.people.heading}
                    </h2>
                    <h3 className='text-black/75 dark:text-white/70 text-lg font-normal pt-5'>
                        {t.people.subheading}
                    </h3>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {t.people.testimonials.map((item, i) => (
                        <div
                            key={i}
                            data-aos='fade-up'
                            data-aos-delay={i * 120}
                            className="bg-Lightsuccess dark:bg-slate-900 bg-[url('/images/people/bg-lines.png')] dark:bg-none bg-no-repeat bg-contain bg-right-bottom flex flex-col gap-6 relative py-10 px-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 after:absolute after:bg-[url('/images/people/quote.png')] after:w-28 after:h-24 after:-top-8 after:right-4 after:opacity-80 dark:after:opacity-30">
                            <p className='font-medium text-lg leading-180! relative z-10 dark:text-white'>
                                {item.quote}
                            </p>
                            <div className='flex items-center gap-4 mt-auto relative z-10'>
                                <Image
                                    src={withBasePath(item.image || '/images/people/user.png')}
                                    alt={item.name}
                                    width={56}
                                    height={56}
                                    className='rounded-full object-cover aspect-square'
                                />
                                <div>
                                    <h4 className='text-lg font-semibold dark:text-white'>{item.name}</h4>
                                    <p className='text-sm text-black/55 dark:text-white/55'>{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default People