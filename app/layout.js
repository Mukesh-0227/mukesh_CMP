import { Geist, Geist_Mono, Baloo_2, Dancing_Script } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/ui/Cursor";
import { SITE_URL } from '@/lib/siteConfig';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const description =
  'AI & Automation Engineer building production RAG chatbots, multi-client workflow automation, and WhatsApp lead-nurturing systems with Python, LangChain, n8n, and OpenAI.';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Mukeshkumar B | AI & Automation Engineer',
    template: '%s | Mukeshkumar B',
  },
  description,
  keywords: [
    'Mukeshkumar B',
    'Mukesh Kumar B',
    'AI Engineer',
    'Automation Engineer',
    'Backend Developer',
    'Python',
    'LangChain',
    'RAG',
    'n8n',
    'OpenAI',
    'WhatsApp Automation',
    'Bodinayakanur',
    'Tamil Nadu',
  ],
  authors: [{ name: 'Mukeshkumar B', url: SITE_URL }],
  creator: 'Mukeshkumar B',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Mukeshkumar B',
    title: 'Mukeshkumar B | AI & Automation Engineer',
    description,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Mukeshkumar B | AI & Automation Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mukeshkumar B | AI & Automation Engineer',
    description,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  manifest: '/favicons/manifest.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${baloo.variable} ${dancing.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${baloo.variable} ${dancing.variable} h-full antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Mukeshkumar B',
              url: SITE_URL,
              email: 'bmukeshkumar027@gmail.com',
              jobTitle: 'AI & Automation Engineer',
              sameAs: [
                'https://github.com/Mukesh-0227',
                'https://www.linkedin.com/in/mukeshkumarb-25387625b',
              ],
            }),
          }}
        />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
