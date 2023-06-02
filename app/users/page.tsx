import type { Metadata } from "next";
import Link from "next/link"

export const metadata:Metadata = {
    title: "users",
}
import React from 'react'

function UsersPage() {
  return (
    <>
    <div> UsersPage</div>
    <Link href="/">go to home</Link>
    </>
  )
}

export default UsersPage