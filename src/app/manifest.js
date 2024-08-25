export default function manifest() {
  return {
    name: 'Resume Website',
    short_name: 'Resume',
    description: 'This is a resume website. Create your own resume website now!',
    start_url: 'https://themiddnight-resume.vercel.app/',
    display: 'standalone',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}