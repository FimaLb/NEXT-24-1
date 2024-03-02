import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className='flex font-bold bg-green-800 text-white p-10 w-100 h-100'>
        {children}
      </main>
    </>
  );
}
