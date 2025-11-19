import Link from "next/link";

export default async function ID({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <>
      <h2>second/page/id</h2>
      <p>params.id: {id}</p>
      <Link href="/">Home</Link>
      &nbsp;|&nbsp;
      <Link href="/second">Second</Link>
    </>
  );
}
