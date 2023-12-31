import "../app/styles/globals.css";
// import Header from "./components/Header";
import Head from "next/head";
import Script from "next/script";
import Providers from "./providers";
// import Navbar from "./components/NavBar/navBar";
// import Footer from "./components/Footer";

export const metadata = {
  title: "Rock Leo",
  description: "Coming Soon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N1FJ0X03GL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-N1FJ0X03GL');
        `}
        </Script>
      </head>
      {/* <Header /> */}
      <body suppressHydrationWarning={true}>
        <Providers>
          {/* <Navbar /> */}
          {children}
        </Providers>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
