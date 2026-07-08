'use client'
import Image from 'next/image'
import { withBasePath } from '@/utils/urlHelper'
import { useLanguage } from '@/context/LanguageContext'

const People = () => {
    const { t } = useLanguage()

    return (
        <section className='pt-32 pb-20' id='testimoni'>
            <div className='container'>
                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
                    <div className='col-span-6 flex justify-center'>
                        <div className="bg-Lightsuccess bg-[url('/images/people/bg-lines.png')] bg-no-repeat bg-contain bg-right-bottom w-full h-full flex flex-col gap-10 relative py-11 px-16 rounded-2xl after:absolute after:bg-[url('/images/people/quote.png')] after:w-48 after:h-40 after:-top-16 after:right-0">
                            <div className='flex items-center gap-10'>
                                <div>
                                    <Image
                                        src={withBasePath('/images/people/user.png')}
                                        alt='user'
                                        width={86}
                                        height={86}
                                    />
                                </div>
                                <div className=''>
                                    <h3 className='text-2xl font-semibold'>{t.people.name}</h3>
                                    <p className='text-lg text-black/55'>{t.people.role}</p>
                                </div>
                            </div>
                            <p className='font-medium text-2xl leading-180!'>
                                {t.people.quote}
                            </p>
                        </div>
                    </div>
                    <div className='col-span-6 flex flex-col gap-7 lg:pl-24 mt-10 lg:mt-0 '>
                        <h2 className='text-midnight_text text-4xl sm:text-5xl font-semibold text-center lg:text-start leading-140!'>
                            {t.people.heading}
                        </h2>
                        <h3 className='text-black/75 text-lg font-normal text-center lg:text-start pt-5 lg:pt-0'>
                            {t.people.subheading}
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default People
