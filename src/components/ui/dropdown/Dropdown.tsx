import { useState, useRef, useEffect, type ReactNode } from 'react'

interface DropdownProps {
  trigger: (open: boolean, toggle: () => void) => ReactNode
  children: ReactNode
  width?: string
}

export function Dropdown({ trigger, children, width }: DropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const toggle = () => setOpen((o) => !o)
  const close = () => setOpen(false)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        close()
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className='relative'>
      {trigger(open, toggle)}

      {open && (
        <div
          className={`absolute left-0 top-full mt-2 rounded-xl bg-surface shadow-xl p-2 pt-4 ${
            width ?? 'w-52'
          }`}
        >
          {children}
        </div>
      )}
    </div>
  )
}