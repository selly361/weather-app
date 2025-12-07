import { type ReactNode } from 'react'
import { CheckmarkIcon } from '../../../assets/icons'

interface OptionProps {
  active?: boolean
  children: ReactNode
  onClick?: () => void
}

export function DropdownItem({ active, children, onClick }: OptionProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full text-left text-label font-normal px-3 py-2.5 rounded-lg flex justify-between items-center cursor-pointer hover:bg-surface-alt transition-colors duration-300 ease-in-out
        ${active ? 'bg-surface-alt text-fg' : 'text-fg'}
      `}
    >
      {children}
      {active && <CheckmarkIcon />}
    </button>
  ) 
}