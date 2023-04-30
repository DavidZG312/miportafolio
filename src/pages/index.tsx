import Image from 'next/image'
import { Inter } from 'next/font/google'
import ContentPage from '@/components/homepage/ContentPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ContentPage />
  )
}
