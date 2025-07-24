import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { ModeToggle } from "@/src/components/mode-toggle"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">Vinayak Computer</span>
        </Link>
        <nav className="ml-auto flex items-center space-x-4">
          <Link href="/services">
            <Button variant="ghost">Services</Button>
          </Link>
          
          <Link href="/product">
            <Button variant="ghost">product</Button>
          </Link>




       <Link href="/about">
            <Button variant="ghost">About</Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost">Contact</Button>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}

export default Header

