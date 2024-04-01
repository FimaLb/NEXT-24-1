import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-slate-500'>
      <div>
        <Link href='/feed/tab1'>SlotTab1</Link>
        <Link href='/feed/tab2'>SlotTab2</Link>
        <Link href='/feed/tab3'>SlotTab3</Link>
      </div>
      {children}
    </div>
  );
}
