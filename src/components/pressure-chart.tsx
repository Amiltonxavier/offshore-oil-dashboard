import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { pressureTimeSeries } from "../data";

export function PressureChart() {
  return (
    <div className="border border-neutral-700 bg-neutral-900 h-[200px] flex flex-col">
      <div className="p-3 flex items-center justify-between">
        <h3 className="text-sm uppercase text-neutral-300">Well Pressure</h3>

        <div className="flex items-end gap-2">
          <p className="text-xl font-semibold text-blue-500">2871.6</p>
          <span className="text-sm text-neutral-500">psi</span>
        </div>
      </div>

      <div className="flex-1 px-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={pressureTimeSeries}>
            <CartesianGrid stroke="#404040" strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              tick={{ fill: "#a3a3a3", fontSize: 12 }}
              axisLine={{ stroke: "#525252" }}
              tickLine={{ stroke: "#525252" }}
            />

            <YAxis
              domain={[400, 470]}
              tick={{ fill: "#a3a3a3", fontSize: 12 }}
              axisLine={{ stroke: "#525252" }}
              tickLine={{ stroke: "#525252" }}
            />
            <YAxis domain={[40000, 47000]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0a0a0a",
                border: "1px solid #404040",
                fontSize: "12px",
              }}
              labelStyle={{ color: "#e5e5e5" }}
              itemStyle={{ color: "#3b82f6" }}
            />
            <Line
              type="monotone"
              dataKey="pressure"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="p-2">
        <p className="text-xs uppercase text-neutral-400">
          Threshold: <span className="text-neutral-200">300 psi</span>
        </p>
      </div>
    </div>
  );
}
