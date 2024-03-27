"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export interface EditeCakeResult {
  status?: boolean;
  message?: string;
}

export default async function editeCake(
  state: EditeCakeResult,
  formData: FormData
): Promise<EditeCakeResult> {
  const id = formData.get("id");
  const catalogAlias = formData.get("catalogAlias");
  const cakeAlias = formData.get("cakeAlias");
  const src = `/categories/fruit_cakes.jpg`;

  console.log("formData", formData);
  const data = {
    id,
    title: formData.get("name"),
    alt: formData.get("name"),
    description: `${catalogAlias} ${formData.get("name")}`,
    src,
    alias: cakeAlias,
    catalogId: formData.get("catalogId"),
    sizeId: formData.get("sizeId"),
    wheightId: formData.get("wheightId"),
  };
  console.log("data", JSON.stringify(data));
  try {
    const res = await fetch(`${process.env.API_BASE_PATH}/cakes/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      return {
        status: false,
        message: "Ops, something went wrong!",
      };
    }
    // console.log("makeAlias", makeAlias);
    revalidatePath(`/cakes-catalog/${catalogAlias}/${cakeAlias}`);
    revalidateTag("cakes-by-catalog-id");
    return {
      status: true,
      message: "Edit successfully!",
    };
  } catch (error) {
    return {
      status: false,
      message: (error as Error)?.message,
    };
  }
}

export type EditeCakeAction = typeof editeCake;
