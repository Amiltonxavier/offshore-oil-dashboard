interface SeparatorProps {
    className?: string;
}

export function Separator({ className = "" }: SeparatorProps) {
    return <div className={`w-full h-px bg-neutral-700 ${className}`} />;
}
