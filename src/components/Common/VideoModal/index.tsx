'use client'
import { useEffect } from 'react'
import { getEmbedVideoUrl } from '@/utils/urlHelper'

interface VideoModalProps {
    videoUrl: string
    isOpen: boolean
    onClose: () => void
    title?: string
}

const VideoModal = ({ videoUrl, isOpen, onClose, title = 'Video tutorial' }: VideoModalProps) => {
    // Tutup modal dengan tombol Escape, dan kunci scroll body saat modal terbuka.
    useEffect(() => {
        if (!isOpen) return

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose()
        }

        document.addEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div
            className='fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4'
            onClick={onClose}
            role='dialog'
            aria-modal='true'
            aria-label={title}>
            <div
                className='relative w-full max-w-4xl'
                onClick={(event) => event.stopPropagation()}>
                <button
                    type='button'
                    onClick={onClose}
                    aria-label='Tutup video'
                    className='absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white text-2xl leading-none hover:bg-white/20 transition duration-200'>
                    &times;
                </button>
                <div className='aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl'>
                    <iframe
                        src={`${getEmbedVideoUrl(videoUrl)}?autoplay=1`}
                        title={title}
                        className='h-full w-full'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen'
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    )
}

export default VideoModal
