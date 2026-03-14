"use client";
import "./globals.css"
import Header from './components/Header';
import Footer from './components/Footer';



export default function RootLayour({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
