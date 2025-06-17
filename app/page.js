"use client";
// import Image from "next/image";
// import Index from "./pages/index";
// import Greete from "./components/todo";
// import { Counter } from "./components/counter";
// import { useEffect } from "react";

// src/app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-light to-white">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-brand mb-4">مرحبًا بك في دردشتنا 💬</h1>
        <p className="text-gray-600 mb-6">تواصل مع أصدقائك بسهولة وأمان.</p>
        <button className="bg-brand text-white px-6 py-2 rounded-full hover:bg-brand-dark transition">
          ابدأ المحادثة
        </button>
      </div>
    </main>
  )
}


// export function MyApp({Component,pageProps}) {
//   useEffect(()=> {
//     import('./js/bootstrap.bundle.js');
//   }, []);
//   return <Component {...pageProps} />;
// }
