import type { UseQueryResult } from "@tanstack/react-query"
import {
  CarCard,
  type GetCarsParams,
  type GetCarsResponse,
} from "@/entities/car"
import { Pagination } from "@/shared/ui/pagination"
import { CarsEmpty } from "./cars-empty"
import { CarsError } from "./cars-error"
import { CarsSkeleton } from "./cars-skeleton"
import { CARS_GRID } from "../lib/constants"

type Props = {
  carsQuery: UseQueryResult<GetCarsResponse | null, Error>
  params: GetCarsParams
  onPageChange: (page: number) => void
}

export const CarsDisplay = ({ carsQuery, params, onPageChange }: Props) => {
  const { data: cars, isLoading, error } = carsQuery

  if (isLoading) {
    return <CarsSkeleton />
  }

  if (error) {
    return <CarsError />
  }

  if (!cars?.data.length) {
    return <CarsEmpty />
  }

  return (
    <>
      <div className={CARS_GRID}>
        {cars.data.map((car) => (
          <CarCard key={car.unique_id} car={car} />
        ))}
      </div>

      {cars.meta && (
        <Pagination
          className="flex justify-center my-8"
          currentPage={params.page}
          totalPages={cars.meta.last_page}
          onPageChange={onPageChange}
        />
      )}
    </>
  )
}
