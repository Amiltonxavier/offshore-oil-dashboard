import { type ComponentProps } from 'react'
import { cn } from '../libs/ultis'

interface Props extends ComponentProps<'h3'> { }

export function SectionTitle({ className, ...props }: Props) {
  return (
    <h3 className={cn('uppercase text-sm text-neutral-400', className)} {...props} />
  )
}
