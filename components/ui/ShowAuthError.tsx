import { AuthError } from "next-auth";
import { useToast } from "@/components/ui/use-toast";

export default function ShowAuthError({ props }: { props: string }) {
  console.log("ShowAuthError", props);
  //   const { toast } = useToast();
  //   const showToast = (title: string, description: string) => {
  //     toast({
  //       title,
  //       description,
  //     });
  //   };
  //   switch (error.type) {
  //     case "CredentialsSignin":
  //       showToast("Login Page", "Invalid credentials.");
  //       console.log("Invalid credentials.");
  //       return;
  //     default:
  //       showToast("Login Page", "Something went wrong.");
  //       console.log("Something went wrong.");
  //       return;
  //   }
}
