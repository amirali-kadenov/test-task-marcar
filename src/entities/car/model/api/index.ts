import type { AxiosInstance } from "axios"
import axios from "axios"
import type {
  CarsInternalParams,
  GetCarsParams,
  GetCarsResponse,
} from "./types"
import { DEFAULT_LIMIT, DEFAULT_PAGE } from "../constants"

class CarsApiClass {
  private api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: process.env.CARS_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    })

    this.api.interceptors.request.use((config) => {
      // @ts-expect-error axios types
      config.next = {
        revalidate: 3600,
      }

      return config
    })
  }

  wrapInTryCatch<T>(fn: () => Promise<T>) {
    try {
      return fn()
    } catch (e: unknown) {
      console.error(e)
      return null
    }
  }

  public getCars({ page, limit, sort, order }: GetCarsParams) {
    return this.wrapInTryCatch(async () => {
      const params: CarsInternalParams = {
        _page: page ?? DEFAULT_PAGE,
        _limit: limit ?? DEFAULT_LIMIT,
      }

      if (sort) params._sort = sort
      if (order) params._order = order

      const response = await this.api.get<GetCarsResponse>("cars", { params })

      return response.data
    })
  }
}

export const carsApi = new CarsApiClass()
