import Link from "next/link"
import { PATHS } from "@/shared/constants/paths"
import { Button } from "@/shared/ui/button"
import { Card, CardContent } from "@/shared/ui/card"
import { CarImageAndActions } from "./car-image-and-actions"
import { CarSpecs } from "./car-specs"
import { CarTags } from "./car-tags"
import { CarTitleAndPrice } from "./car-title-and-price"
import type { Car } from "../../../model/api/types"

type Props = {
  car: Car
}

export const CarCard = ({ car }: Props) => {
  return (
    <Card className="group overflow-hidden bg-white border flex flex-col border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CarImageAndActions car={car} />

      <CardContent className="p-6 gap-4 flex flex-col justify-between grow">
        <div className="space-y-4">
          <CarTitleAndPrice car={car} />
          <CarSpecs car={car} />
          <CarTags car={car} />
        </div>

        <Button
          asChild
          className="w-full h-11 bg-gray-900 hover:bg-gray-800 text-white font-medium shadow-sm hover:shadow-md transition-all duration-200"
        >
          <Link href={PATHS.CAR.get(car.unique_id)}>Подробнее</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
