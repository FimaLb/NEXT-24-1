import Image from "next/image";
import Link from 'next/link';
import { Button } from './_components/Button'

export default function BlogDetail(props: {params: {blogid: string}}) {
  const { params } = props
  console.log(params);
  return (
    <main className="text-lg font-bold">
      <h1>BlogDetail {params?.blogid}</h1>
      <Button />
    </main>
  );
}
