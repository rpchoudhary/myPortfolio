import { Progress } from "@/components/ui/progress"

interface SkillProgressProps {
  name: string
  level: number
}

export default function SkillProgress({ name, level }: SkillProgressProps) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}/10</span>
      </div>
      <Progress value={level * 10} className="h-2" />
    </div>
  )
}
