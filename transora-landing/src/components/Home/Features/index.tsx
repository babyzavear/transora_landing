'use client'
import Image from 'next/image'
import { withBasePath } from '@/utils/urlHelper'
import { useLanguage } from '@/context/LanguageContext'

const Features = () => {
    const { t } = useLanguage()

    return (
        <section id='features' className='py-10'>
            <div className='container'>
                <h2 className='text-4xl sm:text-5xl font-semibold text-midnight_text text-center mb-10'>
                    {t.features.heading}
                </h2>
                <p className='text-black/60 text-lg text-center max-w-70% mx-auto'>
                    {t.features.subheading}
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8 mt-10'>
                    {t.features.items.map((item, i) => (
                        <div
                            key={i}
                            className='bg-white rounded-2xl p-5 shadow-featureShadow'>
                            <Image
                                src={withBasePath(item.imgSrc)}
                                alt={item.heading}
                                width={55}
                                height={55}
                                className='mb-2'
                            />
                            <h3 className='text-2xl font-semibold text-black mt-5'>
                                {item.heading}
                            </h3>
                            <h4 className='text-lg text-black/50 my-2'>{item.paragraph}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
