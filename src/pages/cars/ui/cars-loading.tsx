import { Skeleton } from "@/shared/ui/skeleton"
import { CarsControlsContainer } from "./cars-controls-container"
import { CarsSkeleton } from "./cars-skeleton"

export const CarsLoading = () => {
  return (
    <>
      <CarsControlsContainer>
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-10 w-56" />
      </CarsControlsContainer>

      <CarsSkeleton />
    </>
  )
}
