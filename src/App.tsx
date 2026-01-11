import {
  Bolt,
  ChartArea,
  Database,
  Gauge,
  Power,
} from "lucide-react";
import { NoFlowRateDateChart } from "./components/no-flow-rate-date-chart";
import { PressureChart } from "./components/pressure-chart";
import { VibrationLevelChart } from "./components/vibration-level-chart";
import { CoolantTempChart } from "./components/coolant-temp-chart";
import { CardMetric } from "./components/card-metric";
import { metrics } from "./data";
import { TableEquipament } from "./components/table-equipament";
import { TableAlerm } from "./components/table-alerm";
import { Header } from "./components/header";
import { SectionTitle } from "./components/section-title";


function App() {
  return (
    <>
      <div className="flex min-h-dvh bg-neutral-900">
        <div className="flex flex-1 flex-col min-w-0">
          <Header />
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
                  <div className="border border-neutral-700 h-full">
                    <div className="bg-neutral-800 p-2">
                      <SectionTitle>
                        System HeaLth Matrix
                      </SectionTitle>
                    </div>
                    <div className="grid grid-cols-3  overflow-auto">
                      {metrics.map((metric) => (
                        <CardMetric key={metric.id} {...metric} />
                      ))}
                    </div>
                  </div>
                  <div className="border border-neutral-700">
                    <div className="bg-neutral-800 p-2">
                      <SectionTitle>
                        Real-Time Telemetry
                      </SectionTitle>
                    </div>
                    <div className="grid grid-cols-2">
                      <PressureChart />
                      <NoFlowRateDateChart />
                      <VibrationLevelChart />
                      <CoolantTempChart />
                    </div>
                  </div>
                </section>
                <section>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-neutral-700 ">
                      <div className="bg-neutral-800 flex items-center justify-between p-4 text-neutral-300">
                        <SectionTitle>
                          Equipament Diagnostics
                        </SectionTitle>
                        <p className="text-sm text-neutral-500">
                          {" "}
                          1 OUT OF TOLERANCE
                        </p>
                      </div>

                      <TableEquipament />
                    </div>

                    <div className="border border-neutral-700 ">
                      <div className="bg-neutral-800 flex items-center justify-between p-4 ">
                        <SectionTitle>Alerm console</SectionTitle>
                        <p className="text-sm text-neutral-500">
                          {" "}
                          3 Unacknowledged
                        </p>
                      </div>
                      <TableAlerm />
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
