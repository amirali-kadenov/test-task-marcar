import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import { carsQueries } from "@/entities/car"
import type { GetCarsParams } from "@/entities/car"
import { createQueryClient } from "@/shared/lib/create-query-client"
import { Cars } from "./ui/cars"

type SearchParams = Promise<GetCarsParams>

type Props = {
  searchParams: SearchParams
}

export const CarsPage = async ({ searchParams }: Props) => {
  const params = await searchParams

  const queryClient = createQueryClient()
  await queryClient.prefetchQuery(carsQueries.cars(params))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Cars />
    </HydrationBoundary>
  )
}
