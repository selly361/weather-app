import { Dropdown, DropdownItem, Divider } from '../ui'
import type { UnitSettings } from '../../types'
import { DropdownIcon, UnitsIcon } from '../../assets/icons'
import { Section } from './Section'

interface UnitsMenuProps {
  units: UnitSettings
  setUnits: (u: UnitSettings) => void
}

export function UnitsMenu({ units, setUnits }: UnitsMenuProps) {
  return (
    <Dropdown
      width='w-[214px]'
      trigger={(open, toggle) => (
        <button
          type='button'
          onClick={toggle}
          className='text-label font-normal px-4 py-3 rounded-xl bg-input text-fg flex gap-2.5 items-center cursor-pointer'
        >
          <UnitsIcon />
          Units
          <DropdownIcon
            className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </button>
      )}
    >
      <Section title='Temperature'>
        <DropdownItem
          active={units.temp === 'c'}
          onClick={() => setUnits({ ...units, temp: 'c' })}
        >
          Celsius (°C)
        </DropdownItem>

        <DropdownItem
          active={units.temp === 'f'}
          onClick={() => setUnits({ ...units, temp: 'f' })}
        >
          Fahrenheit (°F)
        </DropdownItem>
      </Section>

      <Divider />

      <Section title='Wind Speed'>
        <DropdownItem
          active={units.wind === 'kmh'}
          onClick={() => setUnits({ ...units, wind: 'kmh' })}
        >
          km/h
        </DropdownItem>

        <DropdownItem
          active={units.wind === 'mph'}
          onClick={() => setUnits({ ...units, wind: 'mph' })}
        >
          mph
        </DropdownItem>
      </Section>

      <Divider />

      <Section title='Precipitation'>
        <DropdownItem
          active={units.precip === 'mm'}
          onClick={() => setUnits({ ...units, precip: 'mm' })}
        >
          Millimeters (mm)
        </DropdownItem>

        <DropdownItem
          active={units.precip === 'in'}
          onClick={() => setUnits({ ...units, precip: 'in' })}
        >
          Inches (in)
        </DropdownItem>
      </Section>
    </Dropdown>
  )
}