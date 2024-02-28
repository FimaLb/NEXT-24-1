import { categoryItems, getItemDataById } from "../../_data/catalogCategories";

export function generateStaticParams() {
  return categoryItems.map(({ id }) => ({ itemid: id }));
}

export default async function Items(props: {
  params: { categoriesid: string; itemid: string };
}) {
  const { params } = props;
  const itemData = await getItemDataById(params.itemid);

  if (params?.itemid === "item_1" && params?.categoriesid === "category_1") {
    throw "Item Error!";
  }

  return (
    <div className='text-lg font-bold'>
      <h1>{itemData?.title}</h1>
      <p>{itemData?.description}</p>
    </div>
  );
}
