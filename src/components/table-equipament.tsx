import { equipmentDiagnostics } from "../data";
import { Separator } from "./separator";


export function TableEquipament() {
    return (
        <>
            <Separator />
            <div className="relative overflow-x-auto  ">
                <table className="w-full text-xs text-left rtl:text-right text-body ">
                    <thead className="bg-neutral-800 text-xs text-body ">
                        <tr>
                            <th
                                scope="col"
                                className="text-neutral-500 text-xs px-2 py-2 font-medium"
                            >
                                EQUIP ID
                            </th>
                            <th
                                scope="col"
                                className="text-neutral-500 text-xs px-2 py-2 font-medium"
                            >
                                NAME
                            </th>
                            <th
                                scope="col"
                                className="text-neutral-500 text-xs px-2 py-2 font-medium"
                            >
                                PARAMETER
                            </th>
                            <th
                                scope="col"
                                className="text-neutral-500 text-xs px-2 py-2 font-medium"
                            >
                                CURRENT
                            </th>
                            <th
                                scope="col"
                                className="text-neutral-500 text-xs px-2 py-2 font-medium"
                            >
                                NOMINAL
                            </th>
                            <th
                                scope="col"
                                className="text-neutral-500 text-xs px-2 py-2 font-medium"
                            >
                                TOLERANCE
                            </th>
                            <th
                                scope="col"
                                className="text-neutral-500 text-xs px-2 py-2 font-medium"
                            >
                                DEVITION
                            </th>
                            <th
                                scope="col"
                                className="text-neutral-500 text-xs px-2 py-2 font-medium"
                            >
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
        </>

    )
}
