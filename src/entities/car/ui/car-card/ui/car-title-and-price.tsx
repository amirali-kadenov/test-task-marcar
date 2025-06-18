import type { Car } from "../../../model/api/types"
import { formatNumber } from "../lib"

type Props = {
  car: Car
}

export const CarTitleAndPrice = ({ car }: Props) => {
  const carName = `${car.mark_cyrillic_name} ${car.model_cyrillic_name}`

  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
        {carName}
      </h3>

      <p className="text-sm text-gray-500 font-medium">
        {car.complectation_name}
      </p>

      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-gray-900">
          {formatNumber(car.price)}
        </span>
        <span className="text-sm text-gray-500">₽</span>
      </div>
    </div>
  )
}
