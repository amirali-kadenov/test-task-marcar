import { usePathname, useSearchParams } from "next/navigation"
import { DEFAULT_LIMIT, DEFAULT_PAGE, type GetCarsParams } from "@/entities/car"
import { PARAM_NAMES } from "./constants"

type ParamHandler<T> = (params: URLSearchParams, value: T) => void

type Sort = GetCarsParams["sort"]
type Order = GetCarsParams["order"]

export const useCarsParams = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const page = Number(searchParams?.get(PARAM_NAMES.PAGE)) || DEFAULT_PAGE
  const limit = Number(searchParams?.get(PARAM_NAMES.LIMIT)) || DEFAULT_LIMIT
  const sort = (searchParams?.get(PARAM_NAMES.SORT) as Sort) ?? null
  const order = (searchParams?.get(PARAM_NAMES.ORDER) as Order) ?? null

  const params: GetCarsParams = { page, limit, sort, order }

  const toggleParam = <T>(params: URLSearchParams, name: string, value: T) => {
    if (value && value !== "null") {
      params.set(name, value as string)
    } else {
      params.delete(name)
    }
  }

  const createParamHandler =
    <T>(handler: ParamHandler<T>) =>
    (value: T) => {
      if (!searchParams) return

      const params = new URLSearchParams(searchParams)

      handler(params, value)

      const newUrl = `${pathname}?${params.toString()}`

      window.history.replaceState(null, "", newUrl)
    }

  return {
    params,
    toggleParam,
    createParamHandler,
  } as const
}
