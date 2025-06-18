import { ArrowUpDown } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select"
import { getSortSelectValue, SORT_OPTIONS, type Order, type Sort } from "./lib"

type Props = {
  sort: Sort | null
  order: Order | null
  onValueChange: (value: string) => void
}

export const CarsSortSelect = ({ sort, order, onValueChange }: Props) => {
  const value = getSortSelectValue(sort, order)

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
        <ArrowUpDown className="w-4 h-4" />
        <span>Сортировка</span>
      </div>

      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-56 h-10 bg-white border-gray-200 shadow-sm hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all">
          <SelectValue placeholder="Выберите сортировку" />
        </SelectTrigger>

        <SelectContent className="bg-white border-gray-200 shadow-xl">
          {SORT_OPTIONS.map((option) => {
            const value = getSortSelectValue(option.sort, option.order)

            return (
              <SelectItem
                key={value}
                value={value}
                className="hover:bg-gray-50 focus:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gray-400" />
                  <span>{option.label}</span>
                </div>
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}
