import Link from "next/link"
import type { Metadata } from "next";


export const metadata:Metadata = {
    title: "Test",
}

function test() {
  return (
    <>
    <div>test</div>
    <Link href="/">go to home</Link>
    </>
  )
}

export default test