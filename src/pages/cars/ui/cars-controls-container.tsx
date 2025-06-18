import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const CarsControlsContainer = ({ children }: Props) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mt-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {children}
      </div>
    </div>
  )
}
