"use server";
import signInAction from "@/actions/auth/signInCredentials";

export default async function SingIn() {
  return (
    <form className='p-10' action={signInAction}>
      <button type='submit'>Sing In</button>
    </form>
  );
}
