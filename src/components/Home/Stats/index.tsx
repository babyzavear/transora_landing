'use client'
import { useLanguage } from '@/context/LanguageContext'

const Stats = () => {
    const { t } = useLanguage()

    return (
        <section className='py-6'>
            <div className='container px-4'>
                <div
                    data-aos='fade-up'
                    className='bg-white dark:bg-slate-900 rounded-3xl shadow-featureShadow grid grid-cols-2 lg:grid-cols-4 gap-y-8 py-10 px-6 sm:px-10 transition-colors duration-300'>
                    {t.stats.items.map((item, i) => (
                        <div
                            key={i}
                            data-aos='zoom-in'
                            data-aos-delay={i * 100}
                            className='flex flex-col items-center text-center px-2 lg:border-r lg:border-black/10 dark:lg:border-white/10 lg:last:border-r-0'>
                            <span className='text-3xl sm:text-4xl font-bold text-primary'>
                                {item.value}
                            </span>
                            <span className='text-black/55 dark:text-white/60 text-sm sm:text-base mt-2 leading-140!'>
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats
