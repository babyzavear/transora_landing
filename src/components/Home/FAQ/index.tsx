'use client'
import { useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useLanguage } from '@/context/LanguageContext'

const FAQ = () => {
    const { t } = useLanguage()
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i)
    }

    return (
        <section id='faq' className='py-20'>
            <div className='container px-4'>
                <h2
                    data-aos='fade-up'
                    className='text-4xl sm:text-5xl font-semibold text-midnight_text dark:text-white text-center mb-5'>
                    {t.faq.heading}
                </h2>
                <p
                    data-aos='fade-up'
                    data-aos-delay='100'
                    className='text-black/60 dark:text-white/60 text-lg text-center max-w-2xl mx-auto'>
                    {t.faq.subheading}
                </p>

                <div className='max-w-3xl mx-auto mt-12 flex flex-col gap-4'>
                    {t.faq.items.map((item, i) => {
                        const isOpen = openIndex === i
                        return (
                            <div
                                key={i}
                                data-aos='fade-up'
                                data-aos-delay={i * 80}
                                className='bg-white dark:bg-slate-900 rounded-2xl shadow-featureShadow overflow-hidden transition-colors duration-300'>
                                <button
                                    onClick={() => toggle(i)}
                                    aria-expanded={isOpen}
                                    className='w-full flex items-center justify-between gap-4 text-left py-5 px-6'>
                                    <span className='text-lg sm:text-xl font-semibold text-midnight_text dark:text-white'>
                                        {item.question}
                                    </span>
                                    <Icon
                                        icon='tabler:chevron-down'
                                        className={`text-2xl text-primary dark:text-white shrink-0 transition-transform duration-300 ${
                                            isOpen ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}>
                                    <div className='overflow-hidden'>
                                        <p className='text-black/60 dark:text-white/60 text-base sm:text-lg leading-180! pb-6 px-6'>
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FAQ
