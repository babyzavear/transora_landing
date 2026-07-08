'use client'
import Image from 'next/image'

interface BrowserFrameProps {
    src: string
    alt: string
    width: number
    height: number
    className?: string
}

/**
 * Wraps a real app screenshot in a simple browser/desktop window frame
 * (traffic-light dots + address bar), the same treatment used for the
 * dashboard preview in the Features section.
 */
const BrowserFrame = ({ src, alt, width, height, className = '' }: BrowserFrameProps) => {
    return (
        <div className={`relative ${className}`}>
            <div className='rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-featureShadow'>
                {/* browser top bar */}
                <div className='flex items-center gap-4 px-4 py-3 bg-[#F1F4FB] dark:bg-slate-800'>
                    <div className='flex items-center gap-1.5 shrink-0'>
                        <span className='h-2.5 w-2.5 rounded-full bg-[#FF6B6B]' />
                        <span className='h-2.5 w-2.5 rounded-full bg-[#FFC856]' />
                        <span className='h-2.5 w-2.5 rounded-full bg-[#3DD598]' />
                    </div>
                    <div className='flex-1 h-6 rounded-full bg-white dark:bg-slate-700 max-w-xs mx-auto' />
                </div>

                <div className='bg-[#F5F7FB]'>
                    <Image
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        className='w-full h-auto block'
                    />
                </div>
            </div>

            {/* ground shadow to sell the "floating window" look */}
            <div className='absolute left-1/2 -translate-x-1/2 -bottom-3 w-[80%] h-8 bg-black/15 blur-2xl rounded-full -z-10' />
        </div>
    )
}

export default BrowserFrame
