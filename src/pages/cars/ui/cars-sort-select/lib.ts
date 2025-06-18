import type { GetCarsParams } from "@/entities/car"

export type Sort = GetCarsParams["sort"]
export type Order = GetCarsParams["order"]

export const SORT_OPTIONS = [
  {
    sort: null,
    order: null,
    label: "По умолчанию",
  },
  {
    sort: "price",
    order: "asc",
    label: "Цена: по возрастанию",
  },
  {
    sort: "price",
    order: "desc",
    label: "Цена: по убыванию",
  },
] as const

export const getSortSelectValue = (sort: Sort | null, order: Order | null) => {
  return `${sort}-${order}`
}
