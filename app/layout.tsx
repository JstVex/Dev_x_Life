import './globals.css'

export const metadata = {
  title: 'Blog x Life',
  description: 'Blog about life and stuff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
