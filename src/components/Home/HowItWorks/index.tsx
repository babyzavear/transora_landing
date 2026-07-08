'use client'
import { useLanguage } from '@/context/LanguageContext'

const HowItWorks = () => {
    const { t } = useLanguage()

    return (
        <section id='how-it-works' className='py-16'>
            <div className='container px-4'>
                <h2
                    data-aos='fade-up'
                    className='text-4xl sm:text-5xl font-semibold text-midnight_text dark:text-white text-center mb-5'>
                    {t.howItWorks.heading}
                </h2>
                <p
                    data-aos='fade-up'
                    data-aos-delay='100'
                    className='text-black/60 dark:text-white/60 text-lg text-center max-w-2xl mx-auto'>
                    {t.howItWorks.subheading}
                </p>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 relative'>
                    {t.howItWorks.steps.map((step, i) => (
                        <div
                            key={i}
                            data-aos='fade-up'
                            data-aos-delay={i * 150}
                            className='relative flex flex-col items-center text-center px-4'>
                            <span className='text-6xl sm:text-7xl font-bold text-primary/10 dark:text-white/10 leading-none'>
                                {step.number}
                            </span>
                            <h3 className='text-2xl font-semibold text-midnight_text dark:text-white -mt-6'>
                                {step.heading}
                            </h3>
                            <p className='text-black/55 dark:text-white/55 text-lg mt-3 leading-180!'>
                                {step.paragraph}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
