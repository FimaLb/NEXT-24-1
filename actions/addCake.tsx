"use server";

export interface AddCakeResult {
  status: boolean;
  message: string;
}

export default async function addCake(
  state: AddCakeResult,
  formData: FormData
): Promise<AddCakeResult> {
  const data = {
    id: formData.get("id"),
    name: formData.get("name"),
    catalogId: formData.get("catalogId"),
    sizeId: formData.get("sizeId"),
    wheightId: formData.get("wheightId"),
  };
  console.log("data", data);
  //   return {
  //     status: false,
  //     message: "Error!",
  //   };
  return {
    status: true,
    message: "Added successfully!",
  };
}
