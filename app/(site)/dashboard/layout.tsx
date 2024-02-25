export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className='flex gap-4 font-bold bg-purple-600 bg-opacity-75 text-white p-5'>
        {children}
      </main>
    </>
  );
}
