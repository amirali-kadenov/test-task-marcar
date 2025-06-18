import { Heart } from "lucide-react"
import { cn } from "@/shared/lib/utils/cn"
import { CarButton } from "./car-button"
import type { Car } from "../../../model/api/types"
import { useCarsStore } from "../../../model/store"

type Props = {
  car: Car
}

export const CarFavoriteButton = ({ car }: Props) => {
  const { favorites, addFavorite, removeFavorite } = useCarsStore()

  const isFavorite = favorites.includes(car.unique_id)

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(car.unique_id)
    } else {
      addFavorite(car.unique_id)
    }
  }

  return (
    <CarButton
      icon={Heart}
      className={cn(isFavorite ? "text-red-500" : "hover:text-red-500")}
      iconClassName={cn(isFavorite && "fill-red-500")}
      onClick={toggleFavorite}
    />
  )
}
