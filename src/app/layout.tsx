import type { Metadata } from 'next';
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Notification from "./components/Notification";
export const metadata: Metadata = {
  title: 'BharatPay - Leading B2B Digital Banking Services in India | Simplify Business Transactions',
  description: 'Experience seamless B2B digital banking with BharatPay. Simplify business transactions, payments, and account management with our secure and efficient digital banking solutions. Grow your business with BharatPay today!',
  keywords: 'AEPS, money transfer, UPI, payment solutions, cashless India, secure payment system,B2B digital banking, digital banking services, digital banking solutions, business transactions, business payments, business account management, BharatPay',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body>
      
      <Header/>
      {children}
      <Notification/>
        
          <Footer/>
       
      </body>
    </html>
  );
}
