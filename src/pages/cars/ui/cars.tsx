"use client"

import { useQuery } from "@tanstack/react-query"
import { carsQueries } from "@/entities/car"
import { CarsControlsContainer } from "./cars-controls-container"
import { CarsDisplay } from "./cars-display"
import { CarsMetaIndicator } from "./cars-meta-indicator"
import { CarsSortSelect } from "./cars-sort-select"
import { PARAM_NAMES } from "../lib/constants"
import { useCarsParams } from "../lib/use-cars-params"

export const Cars = () => {
  const { params, toggleParam, createParamHandler } = useCarsParams()

  const carsQuery = useQuery(carsQueries.cars(params))

  const handlePageChange = createParamHandler<number>((params, value) => {
    toggleParam(params, PARAM_NAMES.PAGE, value)
  })

  const handleSortChange = createParamHandler<string>((params, value) => {
    const [sort, order] = value.split("-")
    toggleParam(params, PARAM_NAMES.SORT, sort)
    toggleParam(params, PARAM_NAMES.ORDER, order)
  })

  const meta = carsQuery.data?.meta

  return (
    <>
      <CarsControlsContainer>
        <CarsMetaIndicator meta={meta} />

        <CarsSortSelect
          order={params.order}
          sort={params.sort}
          onValueChange={handleSortChange}
        />
      </CarsControlsContainer>

      <CarsDisplay
        carsQuery={carsQuery}
        params={params}
        onPageChange={handlePageChange}
      />
    </>
  )
}
