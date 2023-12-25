import Link from "next/link";

export default function Home() {

  return (
    <main>
      <h1>SSG in Next js</h1>
      <Link href={"/users"}>Go to users page</Link>
    </main>
  )
}