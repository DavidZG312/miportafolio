"use client"

import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import { forwardRef, useTransition } from "react"
import { cn } from "@/lib/utils"

interface NavLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
  LinkProps {
  className?: string
  activeClassName?: string
  pendingClassName?: string
  exact?: boolean
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    {
      href,
      className,
      activeClassName,
      pendingClassName,
      exact = false,
      children,
      ...props
    },
    ref
  ) => {
    const pathname = usePathname()
    const [isPending] = useTransition()

    const isActive = exact
      ? pathname === href
      : pathname.startsWith(String(href))

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          className,
          isActive && activeClassName,
          isPending && pendingClassName
        )}
        {...props}
      >
        {children}
      </Link>
    )
  }
)

NavLink.displayName = "NavLink"

export { NavLink }
