import type { ReactNode } from 'react'

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className='mb-3 pt-1.5'>
      <h3 className='text-label-sm text-fg-muted mb-2 pl-3'>{title}</h3>
      <div className='space-y-1'>{children}</div>
    </div>
  )
}