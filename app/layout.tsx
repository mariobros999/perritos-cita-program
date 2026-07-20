import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: '¿Saldrías conmigo? 🐱',
  description: 'Cita con estilo meme y perritos.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}<Analytics /></body>
    </html>
  );
}
