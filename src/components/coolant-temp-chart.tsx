import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { coolantTempTimeSeries } from "../data";

export function CoolantTempChart() {
  return (
    <div className="border border-neutral-700 bg-neutral-900 h-[200px] flex flex-col">
      <div className="p-3 flex items-center justify-between ">
        <h3 className="text-sm uppercase text-neutral-300">Coolant Temp</h3>

        <div className="flex items-end gap-2">
          <p className="text-xl font-semibold text-red-500">89.7</p>
          <span className="text-sm text-neutral-500">°C</span>
        </div>
      </div>

      <div className="h-full p-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={coolantTempTimeSeries}>
            <CartesianGrid stroke="#404040" strokeDasharray="3 3" />

            <XAxis
              dataKey="time"
              tick={{ fill: "#a3a3a3", fontSize: 12 }}
              axisLine={{ stroke: "#525252" }}
              tickLine={{ stroke: "#525252" }}
            />

            <YAxis
              domain={[80, 100]}
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
              itemStyle={{ color: "#ef4444" }}
            />

            <Line
              type="monotone"
              dataKey="temperature"
              stroke="#ef4444"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="p-2 ">
        <p className="text-xs uppercase text-neutral-400">
          Threshold: <span className="text-neutral-200">89.7 °C</span>
        </p>
      </div>
    </div>
  );
}
