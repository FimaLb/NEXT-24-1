"use client";
import { Input } from "@/components/ui/input";
import { CakesCatalogsEntity, SizesEntityOrWheightsEntity } from "@/db-types";
import { v4 as uuidv4 } from "uuid";
import { CakeSizeSelector } from "./CakeSizeSelector";
import { CakeWheightsSelector } from "./CakeWheightsSelector";
import { CakeCatalogsSelector } from "./CakeCatalogsSelector";
import { Button } from "@/components/ui/button";
import { SubmitButton } from "./SubmitButton";
import { useFormState } from "react-dom";
import { AddCakeResult } from "@/actions/addCake";
import { useEffect, useRef } from "react";

interface CakeAddEditFormProps {
  catalogs?: CakesCatalogsEntity[] | null;
  sizes?: SizesEntityOrWheightsEntity[] | null;
  wheights?: SizesEntityOrWheightsEntity[] | null;
  action: (state: AddCakeResult, formData: FormData) => void;
}

export const CakeAddEditForm: React.FunctionComponent<CakeAddEditFormProps> = ({
  catalogs,
  sizes,
  wheights,
  action,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(action as any, {} as AddCakeResult);

  useEffect(() => {
    if (state.status) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className='flex flex-col gap-4 max-w-lg'
    >
      {state.status ? (
        <div className='p-4 bg-green-600 text-white'>{state.message}</div>
      ) : null}
      {state.status === false ? (
        <div className='p-4 bg-red-600 text-white'>{state.message}</div>
      ) : null}
      <input type='hidden' value={uuidv4()} name='id' />
      <div className='flex flex-col gap-2'>
        <label htmlFor='name'>Name:</label>
        <Input id='name' name='name' required />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='size'>Wheight:</label>
        <CakeCatalogsSelector data={catalogs} />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='size'>Size:</label>
        <CakeSizeSelector data={sizes} />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='size'>Wheight:</label>
        <CakeWheightsSelector data={wheights} />
      </div>
      <div>
        <SubmitButton type='submit'>Add</SubmitButton>
      </div>
    </form>
  );
};
