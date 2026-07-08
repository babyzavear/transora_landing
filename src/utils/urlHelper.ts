/**
 * Helper function to prefix URLs with basePath for GitHub Pages deployment
 * In production, basePath is '/transora'
 * In development, basePath is ''
 */

/**
 * Prefix a URL with the basePath
 * @param url - The URL to prefix (should start with /)
 * @returns The prefixed URL
 */
export const withBasePath = (url: string): string => {
    const hello = process.env.NEXT_PUBLIC_BASE_PATH || "";
    return hello + url
}

/**
 * Ubah link video biasa (YouTube/Vimeo) jadi URL embed yang bisa dipakai
 * di dalam <iframe>. Kalau URL sudah berupa link embed, atau formatnya
 * tidak dikenali, URL asli akan dikembalikan apa adanya.
 */
export const getEmbedVideoUrl = (url: string): string => {
    try {
        const parsed = new URL(url)
        const host = parsed.hostname.replace(/^www\./, '')

        // youtube.com/watch?v=XXXX atau youtube.com/shorts/XXXX
        if (host === 'youtube.com' || host === 'm.youtube.com') {
            const videoId = parsed.searchParams.get('v') ?? parsed.pathname.split('/shorts/')[1]
            if (videoId) return `https://www.youtube.com/embed/${videoId}`
        }

        // youtu.be/XXXX
        if (host === 'youtu.be') {
            const videoId = parsed.pathname.replace('/', '')
            if (videoId) return `https://www.youtube.com/embed/${videoId}`
        }

        // vimeo.com/XXXX
        if (host === 'vimeo.com') {
            const videoId = parsed.pathname.replace('/', '')
            if (videoId) return `https://player.vimeo.com/video/${videoId}`
        }

        // Sudah berupa link embed (youtube.com/embed/..., player.vimeo.com/video/...)
        return url
    } catch {
        return url
    }
}