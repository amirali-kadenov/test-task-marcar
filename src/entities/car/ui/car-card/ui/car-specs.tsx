import { Calendar, Fuel, Gauge, Zap } from "lucide-react"
import { CarSpec } from "./car-spec"
import type { Car } from "../../../model/api/types"
import { formatNumber } from "../lib"

type Props = {
  car: Car
}

export const CarSpecs = ({ car }: Props) => {
  const run = `${formatNumber(car.run)} км`
  const year = `${car.year} г.`
  const engineVolume = `${car.engine_volume}л`
  const enginePower = `${car.engine_power} л.с.`

  return (
    <div className="grid grid-cols-2 gap-3">
      <CarSpec
        value={run}
        label="Пробег"
        icon={Gauge}
        iconColor="text-blue-500"
      />
      <CarSpec
        value={year}
        label="Год"
        icon={Calendar}
        iconColor="text-green-500"
      />
      <CarSpec
        value={engineVolume}
        label="Объем"
        icon={Zap}
        iconColor="text-orange-500"
      />
      <CarSpec
        value={enginePower}
        label="Мощность"
        icon={Fuel}
        iconColor="text-purple-500"
      />
    </div>
  )
}
