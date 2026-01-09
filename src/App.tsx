
import { AlertTriangle, Bolt, ChartArea, Database, Droplet, Gauge, MessageCircleMoreIcon, Plug, Power, ShieldCheck, Zap } from "lucide-react";
import { SystemHealth } from "./components/system-health";

const equipmentDiagnostics = [
  {
    equipId: "DRL-001",
    name: "Top Drive",
    parameter: "Torque",
    current: 46501.23,
    nominal: 45000.0,
    tolerance: "±10%",
    deviation: 1.23,
    status: "ok",
  },
  {
    equipId: "DRL-001",
    name: "Top Drive",
    parameter: "RPM",
    current: 44210.76,
    nominal: 45000.0,
    tolerance: "±10%",
    deviation: 0.98,
    status: "ok",
  },
  {
    equipId: "DRL-001",
    name: "Top Drive",
    parameter: "Pressure",
    current: 41109.87,
    nominal: 45000.0,
    tolerance: "±10%",
    deviation: 1.05,
    status: "ok",
  },
  {
    equipId: "ELC-012",
    name: "AC Bus Freq",
    parameter: "Frequency",
    current: 59.87,
    nominal: 60.0,
    tolerance: "±0.5%",
    deviation: 1.45,
    status: "crit",
  },
  {
    equipId: "DRL-001",
    name: "Top Drive",
    parameter: "Stroke Rate",
    current: 49876.32,
    nominal: 45000.0,
    tolerance: "±10%",
    deviation: 0.87,
    status: "ok",
  },
  {
    equipId: "DRL-001",
    name: "Top Drive",
    parameter: "Load",
    current: 42987.9,
    nominal: 45000.0,
    tolerance: "±10%",
    deviation: 1.34,
    status: "ok",
  },
  {
    equipId: "DRL-001",
    name: "Top Drive",
    parameter: "Load",
    current: 47654.45,
    nominal: 45000.0,
    tolerance: "±10%",
    deviation: 0.91,
    status: "ok",
  },
  {
    equipId: "DRL-001",
    name: "Top Drive",
    parameter: "Pressure",
    current: 43123.56,
    nominal: 45000.0,
    tolerance: "±10%",
    deviation: 1.18,
    status: "ok",
  },
]


const alarms = [
  {
    severity: "crit",
    timestamp: "2024-12-29 14:23:17",
    system: "POWER-GEN-02",
    message: "Generator load exceeds limit",
    id: "ALM-2024-1247",
    acknowledged: false,
  },
  {
    severity: "warn",
    timestamp: "2024-12-29 14:23:17",
    system: "PUMP-MUD-03",
    message: "Pump bearing temperature high",
    id: "ALM-2024-1247",
    acknowledged: false,
  },
  {
    severity: "warn",
    timestamp: "2024-12-29 14:23:17",
    system: "ELEC-DIST-A",
    message: "Phase imbalance detected",
    id: "ALM-2024-1247",
    acknowledged: false,
  },
  {
    severity: "crit",
    timestamp: "2024-12-29 14:23:17",
    system: "POWER-GEN-02",
    message: "Oil pressure below minimum",
    id: "ALM-2024-1247",
    acknowledged: false,
  },
  {
    severity: "info",
    timestamp: "2024-12-29 14:23:17",
    system: "DRILL-CTRL-01",
    message: "Routine calibration cycle",
    id: "ALM-2024-1247",
    acknowledged: true,
  },
  {
    severity: "info",
    timestamp: "2024-12-29 14:23:17",
    system: "PUMP-MUD-01",
    message: "Flow rate variance exceeded",
    id: "ALM-2024-1247",
    acknowledged: true,
  },
  {
    severity: "warn",
    timestamp: "2024-12-29 14:23:17",
    system: "SAFETY-ESD",
    message: "Weekly ESD system test completed",
    id: "ALM-2024-1247",
    acknowledged: false,
  },
]



function App() {

  return (
    <>
      <div className="flex min-h-dvh bg-neutral-900">
        <div className="flex flex-1 flex-col min-w-0">
          <header className="flex items-center justify-between border-b border-neutral-700 bg-neutral-800 p-3">
            <div className="flex items-center gap-4">
              <h5 className="text-lg font-medium text-neutral-300">
                RIG-ALFA01 SCADA
              </h5>

              <div className="h-6 w-px bg-neutral-700" />

              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-green-600" />
                <span className="text-sm uppercase text-neutral-300">
                  system
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-green-600" />
                <span className="text-sm uppercase text-neutral-300">
                  COMM
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-amber-600" />
                <span className="text-sm uppercase text-neutral-300">
                  POWER
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-green-600" />
                <span className="text-sm uppercase text-neutral-300">
                  SAFETY
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 border border-red-600 bg-red-500/20 px-2 py-1 text-sm text-red-600">
                <AlertTriangle className="size-4" />
                <span className="font-medium uppercase">7 active</span>
              </div>

              <p className="text-sm text-neutral-400">
                {new Date().toLocaleString()}
              </p>
            </div>

          </header>

          <div className="flex flex-1 overflow-hidden">
            <aside className="hidden lg:flex w-16 flex-col border-r border-neutral-700 bg-neutral-900">
              <div className=" border-r border-neutral-700 h-full sidebar-font transition-all ease-in-out duration-300 w-16">
                <ul className="mx-auto flex flex-col items-center gap-3 py-4">


                  {[Gauge, ChartArea, Power, Database, Bolt].map((Icon, i) => (
                    <li key={i} className="w-full flex justify-center">
                      <button className="flex size-10 items-center justify-center rounded-md text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100">
                        <Icon className="size-5" />
                      </button>
                    </li>
                  ))}
                </ul>

              </div>
            </aside>

            <main className="flex-1 overflow-y-auto">
              <div className="p-4 space-y-5">
                <section className="grid sm:grid-cols-2 gap-4">
                  <div className="border border-neutral-700">
                    <div className="bg-neutral-800 p-2">
                      <h3 className="uppercase text-sm text-neutral-300">System HeaLth Matrix</h3>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="flex flex-col  p-4 border border-neutral-800">
                        <div className="flex items-center justify-between">
                          <div className="flex text-neutral-400  items-center space-x-2">
                            <Gauge className="size-5" />
                            <span className="font-medium text-sm uppercase">Drilling</span>
                          </div>
                          <div className="flex items-center gap-2 border w-fit  bg-green-500/20 px-2 py-1 text-sm text-green-600">
                            NOM
                          </div>
                        </div>
                        <div className="mb-14">
                          <h4 className="text-4xl text-green-600">97 <span className="text-sm text-neutral-700">%</span></h4>
                        </div>
                        <div className="flex items-center justify-between text-neutral-400 uppercase">
                          <p className="text-xs">Alarms: <span>0</span></p>
                          <p className="text-xs">UP <span>127h</span></p>
                        </div>
                      </div>
                      <div className="flex flex-col  p-4 border border-neutral-800">
                        <div className="flex items-center justify-between">
                          <div className="flex text-neutral-400  items-center space-x-2">
                            <Droplet className="size-5" />
                            <span className="font-medium text-sm uppercase">PUMPS</span>
                          </div>
                          <div className="flex items-center gap-2 border w-fit  bg-green-500/20 px-2 py-1 text-sm text-green-600">
                            NOM
                          </div>
                        </div>
                        <div className="mb-14">
                          <h4 className="text-4xl text-amber-600">97 <span className="text-sm text-neutral-700">%</span></h4>
                        </div>
                        <div className="flex items-center justify-between text-neutral-400 uppercase">
                          <p className="text-xs">Alarms: <span className="text-amber-600">1</span></p>
                          <p className="text-xs">UP <span>127h</span></p>
                        </div>
                      </div>
                      <div className="flex flex-col  p-4 border border-neutral-800">
                        <div className="flex items-center justify-between">
                          <div className="flex text-neutral-400  items-center space-x-2">
                            <Plug className="size-5" />
                            <span className="font-medium text-sm uppercase">Drilling</span>
                          </div>
                          <div className="flex items-center gap-2 border w-fit  bg-amber-500/20 px-2 py-1 text-sm text-amber-600">
                            WRN
                          </div>
                        </div>
                        <div className="mb-14">
                          <h4 className="text-4xl text-red-500">82 <span className="text-sm text-neutral-700">%</span></h4>
                        </div>
                        <div className="flex items-center justify-between text-neutral-400 uppercase">
                          <p className="text-xs">Alarms: <span className="text-amber-600">3</span></p>
                          <p className="text-xs">UP <span>213h</span></p>
                        </div>
                      </div>
                      <div className="flex flex-col  p-4 border border-neutral-800">
                        <div className="flex items-center justify-between">
                          <div className="flex text-neutral-400  items-center space-x-2">
                            <ShieldCheck className="size-5" />
                            <span className="font-medium text-sm uppercase">SAFETY</span>
                          </div>
                          <div className="flex items-center gap-2 border w-fit  bg-green-500/20 px-2 py-1 text-sm text-green-600">
                            NOM
                          </div>
                        </div>
                        <div className="mb-14">
                          <h4 className="text-4xl text-green-500">82 <span className="text-sm text-neutral-700">%</span></h4>
                        </div>
                        <div className="flex items-center justify-between text-neutral-400 uppercase">
                          <p className="text-xs">Alarms: <span className="">3</span></p>
                          <p className="text-xs">UP <span>213h</span></p>
                        </div>
                      </div>
                      <div className="flex flex-col  p-4 border border-neutral-800">
                        <div className="flex items-center justify-between">
                          <div className="flex text-neutral-400  items-center space-x-2">
                            <MessageCircleMoreIcon className="size-5" />
                            <span className="font-medium text-sm uppercase">SAFETY</span>
                          </div>
                          <div className="flex items-center gap-2 border w-fit  bg-green-500/20 px-2 py-1 text-sm text-green-600">
                            NOM
                          </div>
                        </div>
                        <div className="mb-14">
                          <h4 className="text-4xl text-green-500">82 <span className="text-sm text-neutral-700">%</span></h4>
                        </div>
                        <div className="flex items-center justify-between text-neutral-400 uppercase">
                          <p className="text-xs">Alarms: <span className="">3</span></p>
                          <p className="text-xs">UP <span>213h</span></p>
                        </div>
                      </div>
                      <div className="flex flex-col  p-4 border border-neutral-800">
                        <div className="flex items-center justify-between">
                          <div className="flex text-neutral-400  items-center space-x-2">
                            <Zap className="size-5" />
                            <span className="font-medium text-sm uppercase">SAFETY</span>
                          </div>
                          <div className="flex items-center gap-2 border w-fit  bg-green-500/20 px-2 py-1 text-sm text-green-600">
                            NOM
                          </div>
                        </div>
                        <div className="mb-14">
                          <h4 className="text-4xl text-green-500">82 <span className="text-sm text-neutral-700">%</span></h4>
                        </div>
                        <div className="flex items-center justify-between text-neutral-400 uppercase">
                          <p className="text-xs">Alarms: <span className="">3</span></p>
                          <p className="text-xs">UP <span>213h</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border border-neutral-700">
                    <div className="bg-neutral-800 p-2">
                      <h3 className="uppercase text-sm text-neutral-300">Real-Time Telemetry</h3>
                    </div>
                    <div className="grid grid-cols-2">
                      <SystemHealth />
                      <SystemHealth />
                      <SystemHealth />
                      <SystemHealth />

                    </div>
                  </div>
                </section>
                <section>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-neutral-700 ">
                      <div className="bg-neutral-800 flex items-center justify-between p-4 text-neutral-300">
                        <h3 className=" uppercase text-sm  ">Equipament Diagnostics</h3>
                        <p className="text-sm text-neutral-500"> 1 OUT OF TOLERANCE</p>
                      </div>

                      <div className="relative overflow-x-auto  shadow-xs ">
                        <table className="w-full text-sm text-left rtl:text-right text-body border border-neutral-700">
                          <thead className="bg-neutral-800 text-sm text-body border border-neutral-700">
                            <tr>
                              <th scope="col" className="text-neutral-500 text-sm px-2 py-2 font-medium">
                                EQUIP ID
                              </th>
                              <th scope="col" className="text-neutral-500 text-sm px-2 py-2 font-medium">
                                NAME
                              </th>
                              <th scope="col" className="text-neutral-500 text-sm px-2 py-2 font-medium">
                                PARAMETER
                              </th>
                              <th scope="col" className="text-neutral-500 text-sm px-2 py-2 font-medium">
                                CURRENT
                              </th>
                              <th scope="col" className="text-neutral-500 text-sm px-2 py-2 font-medium">
                                NOMINAL
                              </th>
                              <th scope="col" className="text-neutral-500 text-sm px-2 py-2 font-medium">
                                TOLERANCE
                              </th>
                              <th scope="col" className="text-neutral-500 text-sm px-2 py-2 font-medium">
                                DEVITION
                              </th>
                              <th scope="col" className="text-neutral-500 text-sm px-2 py-2 font-medium">
                                STATUS
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {equipmentDiagnostics.map((item, index) => (
                              <tr
                                key={`${item.equipId}-${item.parameter}-${index}`}
                                className="border-b border-neutral-800 bg-transparent hover:bg-neutral-900/40 transition-colors"
                              >
                                <th
                                  scope="row"
                                  className="px-2 py-2 font-medium text-heading whitespace-nowrap"
                                >
                                  {item.equipId}
                                </th>

                                <td className="px-2 py-2 text-neutral-300">
                                  {item.name}
                                </td>

                                <td className="px-2 py-2 text-neutral-300">
                                  {item.parameter}
                                </td>

                                <td className="px-2 py-2 text-neutral-200">
                                  {item.current.toLocaleString()}
                                </td>

                                <td className="px-2 py-2 text-neutral-400">
                                  {item.nominal.toLocaleString()}
                                </td>

                                <td className="px-2 py-2 text-neutral-400">
                                  {item.tolerance}
                                </td>

                                <td
                                  className={`px-6 py-4 font-medium ${item.status === "ok"
                                    ? "text-green-400"
                                    : item.status === "warn"
                                      ? "text-yellow-400"
                                      : "text-red-500"
                                    }`}
                                >
                                  {item.deviation}%
                                </td>

                                <td className="px-2 py-2">
                                  <span
                                    className={`inline-flex items-center gap-2 rounded-md px-2 py-1 text-xs font-semibold uppercase
            ${item.status === "ok"
                                        ? "bg-green-500/10 text-green-400"
                                        : item.status === "warn"
                                          ? "bg-yellow-500/10 text-yellow-400"
                                          : "bg-red-500/10 text-red-500"
                                      }
          `}
                                  >
                                    <span
                                      className={`size-2 rounded-full ${item.status === "ok"
                                        ? "bg-green-400"
                                        : item.status === "warn"
                                          ? "bg-yellow-400"
                                          : "bg-red-500"
                                        }`}
                                    />
                                    {item.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>

                        </table>
                      </div>

                    </div>


                    <div className="border border-neutral-700 ">
                      <div className="bg-neutral-800 flex items-center justify-between p-4 text-neutral-300">
                        <h3 className=" uppercase text-sm  ">Alerm console</h3>
                        <p className="text-sm text-neutral-500"> 3 Unacknowledged</p>
                      </div>
                      <table className="w-full border-collapse text-left text-sm">
                        <thead className="bg-neutral-800 text-sm text-body border border-neutral-700 uppercase">
                          <tr>
                            <th scope="col" className="text-neutral-500 text-sm px-2 py-2 font-medium">Severity</th>
                            <th scope="col" className="text-neutral-500 text-sm px-2 py-2 font-medium">Timestamp</th>
                            <th scope="col" className="text-neutral-500 text-sm px-2 py-2 font-medium">System</th>
                            <th scope="col" className="text-neutral-500 text-sm px-2 py-2 font-medium">Message</th>
                            <th scope="col" className="text-neutral-500 text-sm px-2 py-2 font-medium">Alarm ID</th>
                            <th className="text-neutral-500 text-sm px-2 py-2 font-medium p-2 text-right">Actions</th>
                          </tr>
                        </thead>

                        <tbody>
                          {alarms.map((alarm, index) => (
                            <tr
                              key={`${alarm.id}-${index}`}
                              className="border-b border-neutral-800 bg-neutral-primary hover:bg-neutral-900/40 transition-colors"
                            >
                              <td className="p-2">
                                <span
                                  className={`inline-flex items-center gap-2 rounded-md px-2 py-1 text-xs font-semibold uppercase
              ${alarm.severity === "crit"
                                      ? "bg-red-500/10 text-red-500"
                                      : alarm.severity === "warn"
                                        ? "bg-yellow-500/10 text-yellow-400"
                                        : "bg-blue-500/10 text-blue-400"
                                    }
            `}
                                >
                                  <span
                                    className={`size-2 rounded-full ${alarm.severity === "crit"
                                      ? "bg-red-500"
                                      : alarm.severity === "warn"
                                        ? "bg-yellow-400"
                                        : "bg-blue-400"
                                      }`}
                                  />
                                  {alarm.severity}
                                </span>
                              </td>

                              {/* Timestamp */}
                              <td className="p-2 text-neutral-400 whitespace-nowrap">
                                {alarm.timestamp}
                              </td>

                              {/* System */}
                              <td className="p-2 font-medium text-sky-400">
                                {alarm.system}
                              </td>

                              {/* Message */}
                              <td className="p-2 text-neutral-300">
                                {alarm.message}
                              </td>

                              {/* Alarm ID */}
                              <td className="p-2 text-neutral-500">
                                {alarm.id}
                              </td>


                              <td className="p-2 text-right">
                                {alarm.acknowledged ? (
                                  <span className="text-xs font-semibold uppercase text-green-400">
                                    ACK
                                  </span>
                                ) : (
                                  <div className="inline-flex items-center gap-2">
                                    <button
                                      title="Acknowledge"
                                      className="rounded bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 hover:bg-green-500/20"
                                    >
                                      ✓
                                    </button>
                                    <button
                                      title="Dismiss"
                                      className="rounded bg-red-500/10 px-2 py-1 text-xs font-medium text-red-500 hover:bg-red-500/20"
                                    >
                                      ✕
                                    </button>
                                  </div>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                    </div>
                  </div>
                </section>
              </div>
            </main>
          </div>

        </div>

      </div>
    </>
  );
}

export default App;
