import { roboto } from '@/fonts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | hambre loja',
    default: 'hambre loja'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}
