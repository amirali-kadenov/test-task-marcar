import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { forwardRef, type ComponentProps } from "react"

import { cn } from "@/shared/lib/utils/cn"
import type { ButtonProps } from "@/shared/ui/button"
import { buttonVariants } from "@/shared/ui/button"

/* Root */

const Root = ({ className, ...props }: ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)
Root.displayName = "PaginationRoot"

/* Content */

const Content = forwardRef<HTMLUListElement, ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  ),
)
Content.displayName = "PaginationContent"

/* Item */

const Item = forwardRef<HTMLLIElement, ComponentProps<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("", className)} {...props} />
  ),
)
Item.displayName = "PaginationItem"

/* Link */

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  ComponentProps<"a">

const Link = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      "size-10 cursor-pointer border-0 shadow-none transition-all duration-200",
      isActive
        ? "bg-gray-900 text-white hover:bg-gray-800 shadow-sm"
        : "hover:bg-gray-50 hover:text-gray-900",
      className,
    )}
    {...props}
  />
)
Link.displayName = "PaginationLink"

/* NavigationButton */

type NavigationButtonProps = ComponentProps<typeof Link> & {
  isActive?: boolean
}

const NavigationButton = ({
  className,
  isActive,
  ...props
}: NavigationButtonProps) => (
  <Link
    aria-label="Go to previous page"
    size="default"
    className={cn(
      "gap-1 pl-2.5 h-10 px-4 border-0 shadow-none",
      isActive
        ? "pointer-events-none opacity-50"
        : "cursor-pointer hover:bg-gray-50 hover:text-gray-900 transition-colors",
      className,
    )}
    {...props}
  />
)

/* Previous */

const Previous = (props: ComponentProps<typeof Link>) => (
  <NavigationButton aria-label="Go to previous page" size="default" {...props}>
    <ChevronLeft className="h-4 w-4" />
  </NavigationButton>
)
Previous.displayName = "PaginationPrevious"

/* Next */

const Next = (props: ComponentProps<typeof Link>) => (
  <NavigationButton aria-label="Go to next page" size="default" {...props}>
    <ChevronRight className="h-4 w-4" />
  </NavigationButton>
)
Next.displayName = "PaginationNext"

/* Ellipsis */

const Ellipsis = ({ className, ...props }: ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)

Ellipsis.displayName = "PaginationEllipsis"

export const PaginationUI = {
  Root,
  Content,
  Link,
  Item,
  Previous,
  Next,
  Ellipsis,
}
