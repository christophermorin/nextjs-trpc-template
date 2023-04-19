import Link from "next/link"
export default function Header() {
  return (
    <>
      <h1 className="text-6xl m-5">Next-Trpc-Template</h1>
      <nav className="m-6">
        <ul className="flex gap-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/feed">Feed</Link></li>
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/profile">Profile</Link></li>
        </ul>
      </nav>
    </>
  )
}