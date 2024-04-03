import { auth, signIn, signOut } from "@/auth";
import NavigationMenuTop from "@/components/ui/NavigationMenuTop";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  console.log("session", session);
  return (
    <>
      <NavigationMenuTop />
      {/* {session === null ? <SingIn /> : <SingOut />} */}
      {session === null ? (
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <button type='submit'>Sign In</button>
        </form>
      ) : (
        <div className='flex gap-3'>
          <div>{session.user?.name}</div>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button type='submit'>Sign Out</button>
          </form>
        </div>
      )}
      {children}
    </>
  );
}
