import Link from "next/link"

import { siteConfig } from "@/config/site"

import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  return (
    <header className="bg-accent sticky top-0 z-40 w-full border-b font-RixInooAriDuriR">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
        </div>
      </div>
    </header>
  )
}
