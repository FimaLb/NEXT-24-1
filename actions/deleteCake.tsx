"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export interface EditCarResult {
  status?: boolean;
  message?: string;
}

export default async function deleteCar(
  state: EditCarResult,
  formData: FormData
): Promise<EditCarResult> {
  const id = formData.get("id");
  const cakeAlias = formData.get("cakeAlias");

  try {
    const res = await fetch(`${process.env.API_BASE_PATH}/cakes/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      return {
        status: false,
        message: "Ops, something went wrong!",
      };
    }
    revalidatePath(`/${cakeAlias}/${id}`);
    revalidateTag("cakes-by-catalog-id");
    return {
      status: true,
      message: "Deleted successfully!",
    };
  } catch (error) {
    return {
      status: false,
      message: (error as Error)?.message,
    };
  }
}

export type EditCarAction = typeof deleteCar;
