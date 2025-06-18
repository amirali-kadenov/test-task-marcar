"use client"

import { GitCompare } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Badge } from "@/shared/ui/badge"
import { CarButton } from "./car-button"
import { CarFavoriteButton } from "./car-favorite-button"
import type { Car } from "../../../model/api/types"

type Props = {
  car: Car
}

const FALLBACK_SRC = "/placeholder.svg"

export const CarImageAndActions = ({ car }: Props) => {
  const imageUrl = car.images.image[0] ?? FALLBACK_SRC

  const [imgSrc, setImgSrc] = useState(imageUrl)

  const handleError = () => {
    setImgSrc(FALLBACK_SRC)
  }

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
      <Image
        fill
        src={imgSrc}
        onError={handleError}
        alt={car.mark_cyrillic_name}
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        priority={false}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <CarFavoriteButton car={car} />
        <CarButton icon={GitCompare} className="hover:text-blue-500" />
      </div>

      <Badge className="absolute top-4 left-4 bg-white/90 text-gray-700 border-0 shadow-sm font-medium">
        {car.year}
      </Badge>
    </div>
  )
}
