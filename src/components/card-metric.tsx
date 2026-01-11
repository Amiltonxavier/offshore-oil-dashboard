
import { cn } from "../libs/ultis";
import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: number;
  alerms: number;
  hours: number;
  icon: LucideIcon;
}

export function CardMetric({
  title,
  value,
  alerms,
  hours,
  icon: Icon,
}: Props) {
  const hasAlerms = alerms > 0;
  const isWarning = value < 95 && value >= 90;
  const isDanger = value < 90;

  const status = isDanger ? "DNG" : isWarning ? "WRN" : "NOM";

  return (
    <div className="flex flex-col p-4 border border-neutral-800 bg-neutral-900 h-[200px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-neutral-400">
          <Icon className="size-4" />
          <span className="text-sm  uppercase">{title}</span>
        </div>

        <span
          className={cn(
            "px-2 py-1 text-xs font-semibold border uppercase",
            status === "NOM" &&
            "bg-green-500/20 text-green-600 border-green-500/30",
            status === "WRN" &&
            "bg-amber-500/20 text-amber-500 border-amber-500/30",
            status === "DNG" &&
            "bg-red-500/20 text-red-500 border-red-500/30"
          )}
        >
          {status}
        </span>
      </div>

      <div className="mt-3">
        <h4
          className={cn(
            "text-4xl font-semibold",
            status === "NOM" && "text-green-600",
            status === "WRN" && "text-amber-500",
            status === "DNG" && "text-red-500"
          )}
        >
          {value}
          <span className="ml-1 text-sm text-neutral-500">%</span>
        </h4>
      </div>

      <div
        className={cn(
          "mt-auto flex items-center justify-between text-xs uppercase text-neutral-400",
          hasAlerms && "text-amber-500"
        )}
      >
        <p>
          Alarms: <span>{alerms}</span>
        </p>
        <p>
          Up <span>{hours}h</span>
        </p>
      </div>
    </div>
  );
}
