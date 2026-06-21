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
  'Full Stack Developer building scalable web applications with React.js, Node.js, Next.js, Prisma, MySQL, and AWS S3. Currently developing TaskWagon at Ennem Marketing Pvt. Ltd.';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'R. Hariprasath | Full Stack Developer',
    template: '%s | R. Hariprasath',
  },
  description,
  keywords: [
    'R. Hariprasath',
    'Hariprasath R',
    'Full Stack Developer',
    'React.js',
    'Node.js',
    'Next.js',
    'Express.js',
    'Prisma',
    'MySQL',
    'AWS S3',
    'TaskWagon',
    'Bodinayakanur',
    'Tamil Nadu',
  ],
  authors: [{ name: 'R. Hariprasath', url: SITE_URL }],
  creator: 'R. Hariprasath',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'R. Hariprasath',
    title: 'R. Hariprasath | Full Stack Developer',
    description,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'R. Hariprasath | Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'R. Hariprasath | Full Stack Developer',
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
              name: 'R. Hariprasath',
              url: SITE_URL,
              email: 'hariprasathr003@gmail.com',
              jobTitle: 'Full Stack Developer',
              sameAs: [
                'https://github.com/Hariprasathr003',
                'https://www.linkedin.com/in/hari-prasath-r-a28801246',
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
