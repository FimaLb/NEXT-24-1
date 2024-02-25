export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className='flex gap-4 font-bold text-white p-5'>{children}</nav>
    </>
  );
}
