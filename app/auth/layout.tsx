'use client'

import { siteConfig } from "@/config/site"

import { DocsSidebar } from "@/components/sidebar"

import { Icons } from "@/components/icons"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      {/* <div className="h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-background dark:border-r lg:flex">
          <div className="absolute inset-0 bg-primary" />
          <div className="relative z-20 flex items-center text-lg font-medium font-KBO-Dia-Gothic_bold">
            <Icons.logo className="h-7 w-7" />
            &nbsp;
            {siteConfig.name}
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg font-SUITE-Regular w-54">
                {siteConfig.description}
              </p>
            </blockquote>
          </div>
        </div>
        <div className="p-8">
          {children}
        </div>
      </div> */}
      <div className="flex w-full h-full lg:h-[94vh] justify-between">
        <div className="hidden lg:flex flex-col p-12 justify-between bg-primary basis-1/2">
          <span className="flex text-white text-lg font-medium font-KBO-Dia-Gothic_bold">
            <Icons.logo className="h-7 w-7" />
            &nbsp;
            {siteConfig.name}
          </span>
          <span className="text-white text-xl font-SUITE-Regular w-54">
            {siteConfig.description}
          </span>
        </div>
        <div className="h-full p-8 flex flex-col justify-start lg:justify-center basis-full lg:basis-1/2">
          {children}
        </div>
      </div>
    </>
  )
}