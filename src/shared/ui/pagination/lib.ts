export const ELLIPSIS = "ellipsis"

type Page = number | typeof ELLIPSIS

/**
 * Generates an array of page numbers for pagination display
 * Uses ellipsis to truncate long page lists while keeping important pages visible
 *
 * @param currentPage - The currently active page number
 * @param totalPages - Total number of pages available
 * @returns Array of page numbers and ellipsis markers for pagination UI
 */
export const generatePageNumbers = (
  currentPage: number,
  totalPages: number,
): Page[] => {
  const pages: Page[] = []
  const showEllipsis = totalPages > 7

  // If we have 7 or fewer pages, show all pages without ellipsis
  if (!showEllipsis) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }

    return pages
  }

  // If current page is near the beginning (pages 1-4)
  // Show: 1, 2, 3, 4, 5, ..., last
  if (currentPage <= 4) {
    for (let i = 1; i <= 5; i++) {
      pages.push(i)
    }
    pages.push(ELLIPSIS)
    pages.push(totalPages)

    return pages
  }

  // If current page is near the end (last 4 pages)
  // Show: 1, ..., last-4, last-3, last-2, last-1, last
  if (currentPage >= totalPages - 3) {
    pages.push(1)
    pages.push(ELLIPSIS)
    for (let i = totalPages - 4; i <= totalPages; i++) {
      pages.push(i)
    }

    return pages
  }

  // If current page is in the middle
  // Show: 1, ..., current-1, current, current+1, ..., last
  pages.push(1)
  pages.push(ELLIPSIS)
  for (let i = currentPage - 1; i <= currentPage + 1; i++) {
    pages.push(i)
  }
  pages.push(ELLIPSIS)
  pages.push(totalPages)

  return pages
}
