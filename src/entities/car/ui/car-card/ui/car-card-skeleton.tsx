import { Card, CardContent } from "@/shared/ui/card"
import { Skeleton } from "@/shared/ui/skeleton"

export const CarCardSkeleton = () => {
  return (
    <Card className="group overflow-hidden bg-white border border-gray-200">
      <Skeleton className="h-[200px] w-full" />

      <CardContent className="p-6 space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-11 w-full" />
      </CardContent>
    </Card>
  )
}
