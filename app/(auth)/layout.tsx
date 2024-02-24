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
      </nav>
      {children}
    </>
  );
}
