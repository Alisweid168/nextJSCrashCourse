import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next js crash course </h1>
      <Link href={'/products'}>Go to the next page</Link>
    </main>
  );
}
