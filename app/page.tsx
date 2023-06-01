import Image from 'next/image'
import Link from "next/link"


export default function Home() {
  return (
    <main>
      <h1>Hello</h1>
      <Link href="/about"> link to about page</Link>
    </main>
  )
}
