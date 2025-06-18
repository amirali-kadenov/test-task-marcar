import type { GetCarsResponse } from "@/entities/car"

type Props = {
  meta: GetCarsResponse["meta"] | undefined
}

export const CarsMetaIndicator = ({ meta }: Props) => {
  const text = meta ? `Показано ${meta.from}–${meta.to} из ${meta.total}` : ""

  return (
    <div className="h-5 flex items-center gap-4 text-sm text-gray-500">
      {text}
    </div>
  )
}
