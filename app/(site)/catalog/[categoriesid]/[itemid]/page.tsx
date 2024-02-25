"use client";
export default function Items(props: {
  params: { categoriesid: string; itemid: string };
}) {
  const { params } = props;
  if (params?.itemid === "1" && params?.categoriesid === "categories1") {
    throw "Item Error!";
  }
  return (
    <div className='text-lg font-bold'>
      <h1>Itemsid: {params?.itemid}</h1>
    </div>
  );
}
