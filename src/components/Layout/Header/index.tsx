'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import ThemeToggler from './ThemeToggler'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import { useLanguage } from '@/context/LanguageContext'
import { getWhatsAppLink } from '@/config/site'
import type { HeaderItem } from '@/types/menu'

const Header: React.FC = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const [sticky, setSticky] = useState(false)
    const { lang, toggleLang, t } = useLanguage()

    const mobileMenuRef = useRef<HTMLDivElement>(null)

    const navItems: HeaderItem[] = [
        { label: t.nav.features, href: '#features' },
        { label: t.nav.pricing, href: '#pricing' },
        { label: t.nav.testimonial, href: '#testimoni' },
        { label: t.nav.faq, href: '#faq' },
    ]

    const handleScroll = () => {
        setSticky(window.scrollY >= 80)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (
            mobileMenuRef.current &&
            !mobileMenuRef.current.contains(event.target as Node) &&
            navbarOpen
        ) {
            setNavbarOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            document.removeEventListener('mousedown', handleClickOutside)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navbarOpen])

    useEffect(() => {
        if (navbarOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [navbarOpen])

    return (
        <header
            className={`z-40 w-full transition-all fixed top-0 duration-300 ${sticky ? 'shadow-lg bg-white dark:bg-slate-900 py-6' : 'shadow-none bg-transparent py-6'
                }`}>
            <div className='lg:py-0 py-2'>
                <div className='container flex items-center justify-between'>
                    <Logo />
                    <nav className='hidden lg:flex grow items-center gap-8 justify-start md:ml-20'>
                        {navItems.map((item, index) => (
                            <HeaderLink key={index} item={item} />
                        ))}
                    </nav>
                    <div className='flex items-center gap-3'>
                        <ThemeToggler />
                        <button
                            onClick={toggleLang}
                            aria-label='Ganti bahasa / Switch language'
                            className='hidden lg:flex items-center justify-center h-11 w-11 rounded-full border border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition duration-300 dark:border-white/30 dark:text-white dark:hover:bg-white/10'>
                            {lang === 'id' ? 'EN' : 'ID'}
                        </button>
                        <Link
                            href='#features'
                            className='hidden lg:block bg-transparent text-primary border hover:bg-primary border-primary hover:text-white px-8 py-5 rounded-full font-medium text-lg dark:text-white dark:border-white/30 dark:hover:bg-white/10'>
                            {t.header.ctaSecondary}
                        </Link>
                        <Link
                            href={getWhatsAppLink(lang)}
                            target='_blank'
                            className='hidden lg:block bg-primary text-white hover:bg-transparent hover:text-primary border border-primary px-8 py-5 rounded-full font-medium text-lg dark:hover:text-white dark:hover:bg-white/10'>
                            {t.header.ctaPrimary}
                        </Link>
                        <button
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            className='block lg:hidden p-2 rounded-lg'
                            aria-label='Toggle mobile menu'>
                            <span className='block w-6 h-0.5 bg-black dark:bg-white'></span>
                            <span className='block w-6 h-0.5 bg-black dark:bg-white mt-1.5'></span>
                            <span className='block w-6 h-0.5 bg-black dark:bg-white mt-1.5'></span>
                        </button>
                    </div>
                </div>
                {navbarOpen && (
                    <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
                )}
                <div
                    ref={mobileMenuRef}
                    className={`lg:hidden fixed top-0 right-0 h-full w-full bg-black/50 shadow-lg transform transition-transform duration-300 max-w-xs ${navbarOpen ? 'translate-x-0' : 'translate-x-full'
                        } z-50`}>
                    <div className='flex items-center justify-between p-4 bg-white dark:bg-slate-900'>
                        <Logo />
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="bg-[url('/images/closed.svg')] bg-no-repeat bg-contain w-5 h-5 dark:invert"
                            aria-label='Close menu Modal'></button>
                    </div>
                    <nav className='flex flex-col items-start p-4 bg-white dark:bg-slate-900'>
                        {navItems.map((item, index) => (
                            <MobileHeaderLink key={index} item={item} />
                        ))}
                        <div className='mt-4 flex flex-col gap-4 w-full'>
                            <div className='flex items-center gap-3'>
                                <ThemeToggler />
                                <button
                                    onClick={toggleLang}
                                    className='flex-1 bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white dark:border-white/30 dark:text-white'>
                                    {lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
                                </button>
                            </div>
                            <Link
                                href={getWhatsAppLink(lang)}
                                target='_blank'
                                className='bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 text-center'
                                onClick={() => setNavbarOpen(false)}>
                                {t.header.ctaPrimary}
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
