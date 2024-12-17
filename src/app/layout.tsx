'use client'
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>BharatPay - Leading B2B Digital Banking Services in India | Simplify Business Transactions</title>
        <meta name="description" content="Experience seamless B2B digital banking with BharatPay. Simplify business transactions, payments, and account management with our secure and efficient digital banking solutions. Grow your business with BharatPay today!" />
      </head>
      <body      >
      
      <Header/>
      {children}
        
          <Footer/>
       
      </body>
    </html>
  );
}
