import InputNumber from '@react/components/inputs/base/InputNumber'
import type { HSL } from 'color-convert/conversions'

type Props = {
  value: HSL
  onInput: (value: HSL) => void
}

const InputHSL = (props: Props) => {
  const { value, onInput } = props

  const onHue = (newHue: number) => {
    const newHSL: HSL = [newHue, value[1], value[2]]
    onInput(newHSL)
  }

  const onSaturation = (newSaturation: number) => {
    const newHSL: HSL = [value[0], newSaturation, value[2]]
    onInput(newHSL)
  }

  const onLightness = (newLightness: number) => {
    const newHSL: HSL = [value[0], value[1], newLightness]
    onInput(newHSL)
  }

  return (
    <>
      <InputNumber value={value[0]} title="Hue" max={360} onInput={onHue} />
      <InputNumber value={value[1]} title="Saturation" onInput={onSaturation} />
      <InputNumber value={value[2]} title="Lightness" onInput={onLightness} />
    </>
  )
}

export default InputHSL
