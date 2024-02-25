export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className='flex gap-4 font-bold bg-green-900 text-white p-5'>
        {children}
      </div>
    </>
  );
}
