import Link from "next/link";

export default function Second() {
  return (
    <>
      <h2>second/page</h2>
      <Link href="/">Home</Link>
      <hr />
      <Link href="/second/1">second 1</Link>
      &nbsp;|&nbsp;
      <Link href="/second/2">second 2</Link>
      &nbsp;|&nbsp;
      <Link href="/second/3">second 3</Link>
    </>
  );
}
