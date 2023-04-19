import type { ReactNode } from "react"
import Header from "./Header"
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen flex items-center flex-col">
      <Header />
      <main className="w-3/12">{children}</main>
    </div>
  )
}