type CarSpecProps = {
  icon: React.ComponentType<{ className?: string }>
  value: string
  label: string
  iconColor: string
}

export const CarSpec = ({
  icon: Icon,
  value,
  label,
  iconColor,
}: CarSpecProps) => (
  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
    <Icon className={`h-4 w-4 ${iconColor} flex-shrink-0`} />
    <div className="min-w-0">
      <div className="text-sm font-medium text-gray-900 truncate">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  </div>
)
