import { queryOptions } from "@tanstack/react-query"
import { getCars } from "./actions"
import type { GetCarsParams } from "./types"

export const carsQueries = {
  cars: (params: GetCarsParams) => {
    return queryOptions({
      queryKey: ["cars", params],
      queryFn: () => getCars(params),
    })
  },
}
