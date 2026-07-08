'use client'
import Image from 'next/image'

interface PhoneFrameProps {
    src: string
    alt: string
    width: number
    height: number
    orientation?: 'portrait' | 'landscape'
    className?: string
}

/**
 * Wraps a real app screenshot in a simple phone-device frame (bezel, camera
 * cutout, side buttons, home indicator). The frame hugs the screenshot's own
 * aspect ratio instead of forcing a fixed device ratio, so any screenshot
 * drops in cleanly without cropping or letterboxing.
 */
const PhoneFrame = ({
    src,
    alt,
    width,
    height,
    orientation = 'portrait',
    className = '',
}: PhoneFrameProps) => {
    const isLandscape = orientation === 'landscape'

    return (
        <div className={`relative ${className}`}>
            <div
                className={`relative bg-midnight_text dark:bg-slate-950 shadow-featureShadow ${
                    isLandscape ? 'rounded-[2.25rem] p-3 sm:p-4' : 'rounded-[2.75rem] p-2.5 sm:p-3'
                }`}>
                {/* camera cutout */}
                {isLandscape ? (
                    <span className='absolute left-2 sm:left-2.5 top-1/2 -translate-y-1/2 h-14 sm:h-16 w-2 sm:w-2.5 rounded-full bg-black z-10' />
                ) : (
                    <span className='absolute left-1/2 -translate-x-1/2 top-2.5 sm:top-3 h-5 w-20 sm:h-6 sm:w-24 rounded-full bg-black z-10' />
                )}

                {/* side buttons */}
                {!isLandscape && (
                    <>
                        <span className='absolute -left-[3px] top-24 h-7 w-[3px] rounded-l bg-black/50' />
                        <span className='absolute -left-[3px] top-34 h-11 w-[3px] rounded-l bg-black/50' />
                        <span className='absolute -right-[3px] top-28 h-14 w-[3px] rounded-r bg-black/50' />
                    </>
                )}
                {isLandscape && (
                    <>
                        <span className='absolute -top-[3px] left-24 w-7 h-[3px] rounded-t bg-black/50' />
                        <span className='absolute -top-[3px] right-16 w-11 h-[3px] rounded-t bg-black/50' />
                    </>
                )}

                <div
                    className={`relative overflow-hidden bg-[#F5F7FB] ${
                        isLandscape ? 'rounded-[1.5rem]' : 'rounded-[2rem]'
                    }`}>
                    <Image
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        className='w-full h-auto block'
                    />
                    {/* home indicator */}
                    {!isLandscape ? (
                        <span className='absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-black/20' />
                    ) : (
                        <span className='absolute right-2 top-1/2 -translate-y-1/2 h-20 w-1 rounded-full bg-black/20' />
                    )}
                </div>
            </div>

            {/* ground shadow to sell the "floating device" look */}
            <div
                className={`absolute left-1/2 -translate-x-1/2 -bottom-3 bg-black/15 blur-2xl rounded-full -z-10 ${
                    isLandscape ? 'w-[75%] h-8' : 'w-[55%] h-6'
                }`}
            />
        </div>
    )
}

export default PhoneFrame
