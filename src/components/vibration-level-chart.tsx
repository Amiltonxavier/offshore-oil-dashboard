import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { vibrationLevelTimeSeries } from "../data";

export function VibrationLevelChart() {
  return (
    <div className="border border-neutral-700 bg-neutral-900 h-[200px] flex flex-col">
      {/* HEADER */}
      <div className="p-3 flex items-center justify-between ">
        <h3 className="text-sm uppercase text-neutral-300">Vibration Level</h3>

        <div className="flex items-end gap-2">
          <p className="text-xl font-semibold text-amber-500">0.5</p>
          <span className="text-sm text-neutral-500">G</span>
        </div>
      </div>

      {/* CHART */}
      <div className="flex-1 px-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={vibrationLevelTimeSeries}>
            <CartesianGrid stroke="#404040" strokeDasharray="3 3" />

            <XAxis
              dataKey="time"
              tick={{ fill: "#a3a3a3", fontSize: 12 }}
              axisLine={{ stroke: "#525252" }}
              tickLine={{ stroke: "#525252" }}
            />

            <YAxis
              domain={[0.3, 0.9]}
              tick={{ fill: "#a3a3a3", fontSize: 12 }}
              axisLine={{ stroke: "#525252" }}
              tickLine={{ stroke: "#525252" }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0a0a0a",
                border: "1px solid #404040",
                fontSize: "12px",
              }}
              labelStyle={{ color: "#e5e5e5" }}
              itemStyle={{ color: "#f59e0b" }}
            />

            <Line
              type="monotone"
              dataKey="vibration"
              stroke="#f59e0b"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="p-2">
        <p className="text-xs uppercase text-neutral-400">
          Threshold: <span className="text-neutral-200">0.8 G</span>
        </p>
      </div>
    </div>
  );
}
