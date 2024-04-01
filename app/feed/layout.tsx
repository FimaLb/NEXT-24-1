import Link from "next/link";

export default function Layout({
  children,
  widget1,
  widget2,
  tabs,
  modal,
}: {
  children: React.ReactNode;
  widget1: React.ReactNode;
  widget2: React.ReactNode;
  tabs: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className='p-20 flex gap-20'>
      <main>
        <Link href='/feed/test'>Test</Link>
        <br />
        <Link href='/login' scroll={false}>
          Login
        </Link>
        <br />
        <div>
          <Link href='/feed/tab1'>Tab1</Link>
          <Link href='/feed/tab2'>Tab2</Link>
          <Link href='/feed/tab3'>Tab3</Link>
        </div>
        {children}
        <div className='mt-10'>{tabs}</div>
        <div>{modal}</div>
      </main>
      <aside className='px-5'>
        <div>{widget1}</div>
        <div>{widget2}</div>
      </aside>
    </div>
  );
}
