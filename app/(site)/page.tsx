import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle/ModeToggle";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Home</h1>
      <Button>Button</Button>
      <ModeToggle></ModeToggle>
    </main>
  );
}
