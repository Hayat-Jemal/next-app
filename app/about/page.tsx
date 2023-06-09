import Link from "next/link"
import type { Metadata } from "next";


export const metadata:Metadata = {
    title: "About",
}


function About() {
  // throw new Error('Not today!')
  return (
    <>
    <h1>About</h1>
    <Link href="/">link to home page</Link>
    </>
  )
}

export default About