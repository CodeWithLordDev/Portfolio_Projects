// app/blog/layout.js
import Script from "next/script";

export const metadata = {
  title: "Blog | CodewithLord",
  other: {
    "google-adsense-account": "ca-pub-2908323046059505",
  },
};

export default function BlogLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* Google AdSense Script (Only for Blog Pages) */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2908323046059505"
          crossOrigin="anonymous"
        />

        {/* Render Blog Pages */}
        {children}

      </body>
    </html>
  );
}
