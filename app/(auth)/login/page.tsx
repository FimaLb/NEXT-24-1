import signInCredentials from "@/actions/auth/signInCredentials";
import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";

export default function Login({
  searchParams,
}: {
  searchParams: {
    callbackUrl: string;
  };
}) {
  console.log("searchParams", searchParams);
  return (
    <div>
      <h1>Login page</h1>
      <form className='flex flex-col gap-10 w-96' action={signInCredentials}>
        <div>
          <label>Email:</label>
          <Input name='email' required />
        </div>
        <div>
          <label>Password::</label>
          <Input name='password' type='password' required />
        </div>
        <div>
          <Button type='submit'>Login</Button>
        </div>
      </form>
      <form
        className='flex flex-col gap-10 w-96 pt-10'
        action={async () => {
          "use server";
          await signIn("github");
          redirect(searchParams.callbackUrl ?? "/");
        }}
      >
        <div>
          <Button type='submit'>Github</Button>
        </div>
      </form>
    </div>
  );
}
