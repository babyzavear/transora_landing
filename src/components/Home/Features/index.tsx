'use client'
import Image from 'next/image'
import { withBasePath } from '@/utils/urlHelper'
import { useLanguage } from '@/context/LanguageContext'

const Features = () => {
    const { t } = useLanguage()

    return (
        <section id='features' className='py-10'>
            <div className='container'>
                <h2
                    data-aos='fade-up'
                    className='text-4xl sm:text-5xl font-semibold text-midnight_text dark:text-white text-center mb-10'>
                    {t.features.heading}
                </h2>
                <p
                    data-aos='fade-up'
                    data-aos-delay='100'
                    className='text-black/60 dark:text-white/60 text-lg text-center max-w-70% mx-auto'>
                    {t.features.subheading}
                </p>

                {/* App preview — tablet mockup */}
                <div
                    data-aos='zoom-in'
                    data-aos-delay='150'
                    className='relative max-w-3xl mx-auto mt-16 mb-12 px-6'>
                    <div className='relative rounded-[2.25rem] bg-midnight_text p-3 sm:p-4 shadow-featureShadow'>
                        {/* front camera dot (landscape tablet: sits on the left bezel) */}
                        <span className='absolute left-1.5 sm:left-2.5 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-white/25' />

                        <div className='rounded-[1.5rem] overflow-hidden bg-[#F5F7FB]'>
                            <Image
                                src={withBasePath('/images/features/dashboard-screenshot.png')}
                                alt='Tampilan dashboard aplikasi Transora'
                                width={1328}
                                height={635}
                                className='w-full h-auto block'
                            />
                        </div>
                    </div>

                    {/* ground shadow to sell the "floating device" look */}
                    <div className='absolute left-1/2 -bottom-3 -translate-x-1/2 w-[80%] h-8 bg-black/15 blur-2xl rounded-full -z-10' />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 mt-10'>
                    {t.features.items.map((item, i) => (
                        <div
                            key={i}
                            data-aos='fade-up'
                            data-aos-delay={i * 100}
                            className='bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-featureShadow transition-all duration-300 hover:-translate-y-1'>
                            <Image
                                src={withBasePath(item.imgSrc)}
                                alt={item.heading}
                                width={55}
                                height={55}
                                className='mb-2'
                            />
                            <h3 className='text-2xl font-semibold text-black dark:text-white mt-5'>
                                {item.heading}
                            </h3>
                            <h4 className='text-lg text-black/50 dark:text-white/50 my-2'>{item.paragraph}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
