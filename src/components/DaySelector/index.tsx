import { Dropdown, DropdownItem } from '../ui'
import { DropdownIcon } from '../../assets/icons'
import type { DayName } from '../../types'
import { DAYS } from '../../constants'

interface DaySelectorProps {
  selectedDay: DayName
  setDay: (day: DayName) => void
}

export function DaySelector({ selectedDay, setDay }: DaySelectorProps) {
  return (
    <Dropdown
      width='w-[214px]'
      trigger={(open, toggle) => (
        <button
          type='button'
          onClick={toggle}
          className='w-38 px-4 py-3 rounded-xl bg-input text-fg flex items-center justify-between gap-4 text-body-sm'
        >
          {selectedDay}
          <DropdownIcon
            className={`w-3 h-4.5 transition-transform duration-300 ${
              open ? 'rotate-180' : ''
            }`}
          />
        </button>
      )}
    >
      <div className='space-y-1'>
        {DAYS.map((day) => (
          <DropdownItem
            key={day}
            active={day === selectedDay}
            showCheckmark={false}
            onClick={() => setDay(day)}
          >
            {day}
          </DropdownItem>
        ))}
      </div>
    </Dropdown>
  )
}

export default DaySelector
