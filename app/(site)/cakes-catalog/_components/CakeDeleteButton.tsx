"use client";

import deleteCake from "@/actions/deleteCake";
import { Button, ButtonProps } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { TrashIcon, UpdateIcon } from "@radix-ui/react-icons";
import { useEffect, useTransition } from "react";
import { useFormState } from "react-dom";
interface CakeDeleteButtonProps {
  className?: ButtonProps["className"];
  id: string;
  catalogAlias: string;
}

export const CakeDeleteButton: React.FC<CakeDeleteButtonProps> = ({
  className,
  id,
  catalogAlias,
}) => {
  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useFormState(deleteCake, {});
  const { toast } = useToast();

  useEffect(() => {
    if (state?.status === false) {
      toast({
        variant: "destructive",
        description: state?.message,
      });
      return;
    }
    if (state?.status === true) {
      toast({
        description: state?.message,
      });
      return;
    }
  }, [state, toast]);

  return (
    <Button
      variant='destructive'
      size='sm'
      className={cn("py-0.5 px-2", className)}
      onClick={(event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("id", id);
        formData.append("catalogAlias", catalogAlias);

        startTransition(() => {
          formAction(formData);
        });
      }}
    >
      {isPending ? <UpdateIcon className='animate-spin' /> : <TrashIcon />}
    </Button>
  );
};
