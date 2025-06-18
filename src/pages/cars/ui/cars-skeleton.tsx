import { CarCardSkeleton } from "@/entities/car"
import { CARS_GRID } from "../lib/constants"

export const CarsSkeleton = () => {
  return (
    <div className={CARS_GRID}>
      {Array.from({ length: 12 }).map((_, i) => (
        <CarCardSkeleton key={i} />
      ))}
    </div>
  )
}
