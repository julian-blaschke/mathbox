import { memo, FunctionComponent, Dispatch, SetStateAction, useState, useContext } from 'react'
import { Palette, OptionsContext } from '../../Context'

export interface MenuProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

//skeleton for other menus
const Menu: FunctionComponent<{ isOpen: boolean }> = ({ children, isOpen }) => {
  return (
    <div className={`origin-right absolute mt-2 left-0 ml-10 20 w-40 rounded-md shadow-lg bg-gray-100 ${!isOpen ? 'hidden' : ''}`}>{children}</div>
  )
}

export const PenMenu: FunctionComponent<MenuProps> = memo(({ isOpen, setIsOpen }) => {
  const {
    options: { strokeWidth, stroke },
    setOptions,
  } = useContext(OptionsContext)
  const [currentStrokeWidth, setCurrentStrokeWidth] = useState(strokeWidth)
  console.log(stroke)

  return (
    <Menu {...{ isOpen }}>
      <div className="flex flex-wrap">
        {Object.entries(Palette).map(([name, value]) => (
          <button
            key={name}
            className={`bg-gray-600 h-4 w-4 p-2 m-2 rounded-full hover:shadow-outline ${value === stroke ? ' shadow-outline' : ''}`}
            style={{ backgroundColor: value }}
            onClick={() => setOptions((options) => ({ ...options, stroke: value }))}
          ></button>
        ))}
      </div>
      <span className="px-2 py-1 flex flex-row">
        <span>{currentStrokeWidth}</span>
        <input
          type="range"
          min={1}
          max={10}
          value={currentStrokeWidth}
          onChange={(e) => setCurrentStrokeWidth(+e?.target?.value)}
          onMouseUp={() => setOptions((options) => ({ ...options, strokeWidth: currentStrokeWidth }))}
          onTouchEnd={() => setOptions((options) => ({ ...options, strokeWidth: currentStrokeWidth }))}
        ></input>
      </span>
    </Menu>
  )
})

export const EraserMenu: FunctionComponent<MenuProps> = memo(({ onClickHandler, isOpen }) => {
  return (
    <Menu {...{ isOpen }}>
      <span className="px-4 py-1 flex flex-col">
        <input type="range"></input>
      </span>
    </Menu>
  )
})

export const FunctionMenu: FunctionComponent<MenuProps> = memo(({ onClickHandler, isOpen }) => {
  return (
    <Menu {...{ isOpen }}>
      <span className="px-4 py-1 flex flex-col">
        <input type="range"></input>
      </span>
    </Menu>
  )
})

export const EquationMenu: FunctionComponent<MenuProps> = memo(({ onClickHandler, isOpen }) => {
  return (
    <Menu {...{ isOpen }}>
      <span className="px-4 py-1 flex flex-col">
        <input type="range"></input>
      </span>
    </Menu>
  )
})

export const DragMenu: FunctionComponent<MenuProps> = memo(({ onClickHandler, isOpen }) => {
  return (
    <Menu {...{ isOpen }}>
      <span className="px-4 py-1 flex flex-col">
        <input type="range"></input>
      </span>
    </Menu>
  )
})

export const ExportMenu: FunctionComponent<MenuProps> = memo(({ onClickHandler, isOpen }) => {
  return (
    <Menu {...{ isOpen }}>
      <span className="px-4 py-1 flex flex-col">
        <input type="range"></input>
      </span>
    </Menu>
  )
})
