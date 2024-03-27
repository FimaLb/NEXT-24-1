"use client";
import { Input } from "@/components/ui/input";
import {
  CatalogsEntity,
  CakesEntity,
  SizesEntityOrWheightsEntity,
} from "@/db-types";
import { v4 as uuidv4 } from "uuid";
import { CakeSizeSelector } from "./CakeSizeSelector";
import { CakeWheightsSelector } from "./CakeWheightsSelector";
import { CakeCatalogsSelector } from "./CakeCatalogsSelector";
import { Button } from "@/components/ui/button";
import { SubmitButton } from "./SubmitButton";
import { useFormState } from "react-dom";
import { AddCakeAction } from "@/actions/addCake";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { EditeCakeAction } from "@/actions/editeCake";

interface CakeAddEditFormProps {
  catalogs?: CatalogsEntity[] | null;
  sizes?: SizesEntityOrWheightsEntity[] | null | undefined;
  wheights?: SizesEntityOrWheightsEntity[] | null;
  action: AddCakeAction | EditeCakeAction;
  selectedCatalog?: CatalogsEntity;
  data?: CakesEntity | null;
}

export const CakeAddEditForm: React.FunctionComponent<CakeAddEditFormProps> = ({
  catalogs,
  sizes,
  wheights,
  action,
  selectedCatalog,
  data,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(action, {});
  const router = useRouter();
  const defaultCatalogValue = data?.catalogId
    ? data?.catalogId
    : selectedCatalog?.id;
  const defaultSizeValue =
    data?.sizeId || (sizes?.length ? sizes[0].id : undefined);
  const defaultWheightsValue =
    data?.wheightId || (wheights?.length ? wheights[0].id : undefined);

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
      <input type='hidden' value={data?.id || uuidv4()} name='id' />
      <input type='hidden' value={selectedCatalog?.alias} name='catalogAlias' />
      <input type='hidden' value={data?.alias} name='cakeAlias' />
      <div className='flex flex-col gap-2'>
        <label htmlFor='name'>Name:</label>
        <Input
          defaultValue={data?.title ? data.title : undefined}
          id='name'
          name='name'
          required
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='size'>Catalog:</label>
        <CakeCatalogsSelector
          data={catalogs}
          defaultValue={defaultCatalogValue}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='size'>Size:</label>
        <CakeSizeSelector data={sizes} defaultValue={defaultSizeValue} />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='size'>Wheight:</label>
        <CakeWheightsSelector
          data={wheights}
          defaultValue={defaultWheightsValue}
        />
      </div>
      <div className='flex gap-5'>
        <SubmitButton type='submit'>{data ? "Edit" : "Add"}</SubmitButton>
        <Button
          variant={"outline"}
          onClick={() => {
            router.back();
          }}
        >
          Back
        </Button>
      </div>
    </form>
  );
};
