"use client";
import Link from "next/link";

export default function Settings() {
  const createError = () => {
    throw "Settings Error!";
  };

  return (
    <div className='flex min-h-screen flex-col items-left p-24'>
      <Link href='/dashboard'>Dashboard</Link>
      <button onClick={createError}>Create an Error</button>
    </div>
  );
}
