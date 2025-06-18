import { ELLIPSIS, generatePageNumbers } from "./lib"
import { PaginationUI as UI } from "./ui"

type Props = {
  className?: string
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const Pagination = ({
  className,
  currentPage,
  totalPages,
  onPageChange,
}: Props) => {
  const pages = generatePageNumbers(currentPage, totalPages)

  const goBack = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const goForward = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <UI.Root className={className}>
      <UI.Content className="gap-1">
        <UI.Item>
          <UI.Previous isActive={currentPage <= 1} onClick={goBack} />
        </UI.Item>

        {pages.map((page, index) => (
          <UI.Item key={index}>
            {page === ELLIPSIS && <UI.Ellipsis className="size-10" />}

            {page !== ELLIPSIS && (
              <UI.Link
                onClick={() => onPageChange(page)}
                isActive={currentPage === page}
              >
                {page}
              </UI.Link>
            )}
          </UI.Item>
        ))}

        <UI.Item>
          <UI.Next isActive={currentPage >= totalPages} onClick={goForward} />
        </UI.Item>
      </UI.Content>
    </UI.Root>
  )
}
