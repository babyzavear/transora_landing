'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // avoid hydration mismatch: next-themes only knows the real theme client-side
  useEffect(() => setMounted(true), [])

  return (
    <button
      type='button'
      aria-label='Ganti mode terang/gelap'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition duration-300 dark:border-white/30 dark:text-white dark:hover:bg-white/10 dark:hover:text-white'>
      {mounted && theme === 'dark' ? (
        <svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
          <circle cx='12' cy='12' r='4.5' />
          <path d='M12 2.5v2.4M12 19.1v2.4M4.4 4.4l1.7 1.7M17.9 17.9l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.4 19.6l1.7-1.7M17.9 6.1l1.7-1.7' />
        </svg>
      ) : (
        <svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
          <path d='M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z' />
        </svg>
      )}
    </button>
  )
}

export default ThemeToggler
