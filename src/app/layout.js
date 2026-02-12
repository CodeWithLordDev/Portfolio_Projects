import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClientLayout from "./ClientLayout";
import { metadata } from "./metadata";
import Script from "next/script";
export { metadata };

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/Assets/Images/CodewithLord1.png"
        />
        <title>CodewithLord</title>
        <meta name="author" content="CodewithLord" />
        <meta name="google-adsense-account" content="ca-pub-2908323046059505" />
        <meta
          name="google-site-verification"
          content="mzmkrlR6L1gKFQarmteIqPNo7EEKl82esCpeU0E6xPU"
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-EJK9V3H4DF"
        />

        <Script id="ga-setup" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EJK9V3H4DF');
          `}
        </Script>
      </head>
      {/* <!-- Google tag (gtag.js) --> */}

      <body
        className={`bg-black text-white font-sans ${geistSans.variable} ${geistMono.variable}`}
      >
        {/* <ClientLayout> */}
          <Navbar />
          {children}
          <Footer />
        {/* </ClientLayout> */}
      </body>
    </html>
  );
}
