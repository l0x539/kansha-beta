import MainCanvas from '@/components/MainCanvas'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='absolute top-0 left-0 h-screen w-screen'>
      <MainCanvas />
    </main>
  )
}
