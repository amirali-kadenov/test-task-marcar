import { cn } from "@/shared/lib/utils/cn"
import { Badge } from "@/shared/ui/badge"
import type { Car } from "../../../model/api/types"

type Props = {
  car: Car
}

const TAG_CLASS_NAMES = [
  "bg-blue-50 text-blue-700 border-blue-200",
  "bg-green-50 text-green-700 border-green-200",
  "purple-50 text-purple-700 border-purple-200",
]

export const CarTags = ({ car }: Props) => {
  const tags = [car.gearbox, car.drive, car.body_type]

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => {
        if (!tag) return null

        return (
          <Badge
            key={tag}
            variant="secondary"
            className={cn("text-xs", TAG_CLASS_NAMES[index])}
          >
            {tag}
          </Badge>
        )
      })}
    </div>
  )
}
