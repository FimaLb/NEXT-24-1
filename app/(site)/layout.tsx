import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className='flex gap-4 font-bold bg-green-900 text-white p-5'>
        <Link href='/'>Home</Link>
        <Link href='/login'>Login</Link>
        <Link href='/register'>Register</Link>
        <Link href='/blog'>Blog</Link>
        <Link href='/dashboard'>Dashboard</Link>
        <Link href='/catalog'>Catalog</Link>
      </nav>
      {children}
    </>
  );
}
