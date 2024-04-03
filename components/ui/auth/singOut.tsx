"use server";
import signOutAction from "@/actions/auth/signInCredentials";

export default async function SingOut() {
  return (
    <form className='p-10' action={signOutAction}>
      <button type='submit'>Sing Out</button>
    </form>
  );
}
