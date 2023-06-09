
import Link from "next/link"


export default function Home() {
  return (
    <main>
      <h1>Home page</h1>

      {/* <Link href="/about"> link to about page </Link> <br/>
      <Link href= "/test"> link to test page</Link> <br/> */}
      
      <Link href= "/users"> Users</Link> <br/>
      
    </main>
  )
}
