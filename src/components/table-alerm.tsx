import { Check, X } from 'lucide-react'
import { alarms } from '../data'
import { Separator } from './separator'

export function TableAlerm() {
    return (
        <>
            <Separator />
            <table className="w-full border-collapse text-left text-xs">
                <thead className="bg-neutral-800 text-xs   uppercase">
                    <tr>
                        <th
                            scope="col"
                            className="text-neutral-500 text-xs p-2 font-medium"
                        >
                            Severity
                        </th>
                        <th
                            scope="col"
                            className="text-neutral-500 text-xs p-2 font-medium"
                        >
                            Timestamp
                        </th>
                        <th
                            scope="col"
                            className="text-neutral-500 text-xs p-2 font-medium"
                        >
                            System
                        </th>
                        <th
                            scope="col"
                            className="text-neutral-500 text-xs p-2 font-medium"
                        >
                            Message
                        </th>
                        <th
                            scope="col"
                            className="text-neutral-500 text-xs p-2 font-medium"
                        >
                            Alarm ID
                        </th>
                        <th className="text-neutral-500 text-xs p-2 font-medium text-right">
                            Actions
                        </th>
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


                            <td className="p-2 text-neutral-400 whitespace-nowrap">
                                {alarm.timestamp}
                            </td>


                            <td className="p-2 font-medium text-sky-400">
                                {alarm.system}
                            </td>


                            <td className="p-2 text-neutral-300 ">
                                {alarm.message}
                            </td>


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
                                            <Check className='size-4' />
                                        </button>
                                        <button
                                            title="Dismiss"
                                            className="rounded bg-red-500/10 px-2 py-1 text-xs font-medium text-red-500 hover:bg-red-500/20"
                                        >
                                            <X className='size-4' />
                                        </button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>

    )
}
