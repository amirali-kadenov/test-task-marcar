import { cn } from "@/shared/lib/utils/cn"
import { Button } from "@/shared/ui/button"

type Props = {
  icon: React.ComponentType<{ className?: string }>
  className?: string
  iconClassName?: string
  onClick?: () => void
}

export const CarButton = ({
  icon: Icon,
  className,
  iconClassName,
  onClick,
}: Props) => (
  <Button
    size="icon"
    className={cn(
      `size-9 bg-white/90 hover:bg-white text-gray-600 shadow-lg border-0`,
      className,
    )}
    onClick={onClick}
  >
    <Icon className={cn("size-4", iconClassName)} />
  </Button>
)
