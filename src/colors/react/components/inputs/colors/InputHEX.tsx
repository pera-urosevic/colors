import type { HEX } from 'color-convert/conversions'
import InputString from '@react/components/inputs/base/InputString'
import { useState, type KeyboardEventHandler } from 'react'

type Props = {
  value: HEX
  onInput: (value: HEX) => void
}

const InputHEX = (props: Props) => {
  const { value, onInput } = props

  const [hex, setHex] = useState<HEX>(value)

  const onInputString = (hexNew: HEX) => {
    setHex(hexNew)
  }

  const onKeyUp: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      onInput(hex)
    }
  }

  const onBlur = () => {
    onInput(hex)
  }

  return (
    <InputString value={value} title="HEX" maxLength={6} onInput={onInputString} onKeyUp={onKeyUp} onBlur={onBlur} />
  )
}

export default InputHEX
