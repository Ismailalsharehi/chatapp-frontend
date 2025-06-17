"use client";
import Head from "next/head";

import Link from "next/link";

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Vexa Voting</title>
      </Head>

        <header className="bg-white p-8 shadow-md rounded-lg text-center">
          <h1 className="text-2xl font-bold text-gray-800">Welcome to Vexa Voting System</h1>
          <p className="text-gray-600 mt-2">Share your vote with us!</p>
          <Link href="/vote">
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Start Voting</button>
          </Link>
        </header>
      
    </div>
  );
}
