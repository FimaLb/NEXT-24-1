import Link from "next/link";

export default function Dashboard() {
  return (
    <nav className='flex min-h-screen flex-col items-left p-24'>
      <h1 className='font-bold underline'>Dashboard</h1>
      <Link href='dashboard/settings'>Settings</Link>
    </nav>
  );
}
