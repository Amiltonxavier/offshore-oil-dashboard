import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

export const pressureTimeSeries = [
    { time: "08:00", pressure: 43200 },
    { time: "09:00", pressure: 43850 },
    { time: "10:00", pressure: 44520 },
    { time: "11:00", pressure: 45210 },
    { time: "12:00", pressure: 44890 },
    { time: "13:00", pressure: 44130 },
    { time: "14:00", pressure: 43670 },
    { time: "15:00", pressure: 42980 },
    { time: "16:00", pressure: 43540 },
    { time: "17:00", pressure: 44110 },
];

export function SystemHealth() {
    return (
        <div className="border border-neutral-700 bg-neutral-900">
            <div className=" p-3 flex items-center justify-between">
                <h3 className="text-sm uppercase text-neutral-300">
                    Well Pressure
                </h3>

                <div className="mt-2 flex items-end gap-2">
                    <p className="text-xl font-semibold text-green-500">
                        2871.6
                    </p>
                    <span className="text-sm text-neutral-500">psi</span>
                </div>
            </div>

            <div className="h-full p-2">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={pressureTimeSeries}
                        margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid
                            stroke="#404040"
                            strokeDasharray="3 3"
                        />

                        <XAxis
                            dataKey="time"
                            tick={{ fill: "#a3a3a3", fontSize: 12 }}
                            axisLine={{ stroke: "#525252" }}
                            tickLine={{ stroke: "#525252" }}
                        />

                        <YAxis
                            tick={{ fill: "#a3a3a3", fontSize: 12 }}
                            axisLine={{ stroke: "#525252" }}
                            tickLine={{ stroke: "#525252" }}
                            domain={[40000, 47000]}
                        />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#0a0a0a",
                                border: "1px solid #404040",
                                fontSize: "12px",
                            }}
                            labelStyle={{ color: "#e5e5e5" }}
                            itemStyle={{ color: "#22c55e" }}
                        />

                        <Line
                            type="monotone"
                            dataKey="pressure"
                            stroke="#22c55e"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 4 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>


            <div className=" p-2">
                <p className="text-xs uppercase text-neutral-400">
                    Threshold: <span className="text-neutral-200">300 psi</span>
                </p>
            </div>
        </div>
    );
}
