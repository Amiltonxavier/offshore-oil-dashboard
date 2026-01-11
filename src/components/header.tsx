import { AlertTriangle } from 'lucide-react'


export function Header() {
    return (
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
                    <span className="text-sm uppercase text-neutral-300">COMM</span>
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
    )
}
