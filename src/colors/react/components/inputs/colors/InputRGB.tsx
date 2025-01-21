import InputNumber from '@react/components/inputs/base/InputNumber'
import type { RGB } from 'color-convert/conversions'

type Props = {
  value: RGB
  onInput: (value: RGB) => void
}

const InputRGB = (props: Props) => {
  const { value, onInput } = props

  const onRed = (newRed: number) => {
    const newRGB: RGB = [newRed, value[1], value[2]]
    onInput(newRGB)
  }

  const onGreen = (newGreen: number) => {
    const newRGB: RGB = [value[0], newGreen, value[2]]
    onInput(newRGB)
  }

  const onBlue = (newBlue: number) => {
    const newRGB: RGB = [value[0], value[1], newBlue]
    onInput(newRGB)
  }

  return (
    <>
      <InputNumber value={value[0]} title="Red" max={255} onInput={onRed} />
      <InputNumber value={value[1]} title="Green" max={255} onInput={onGreen} />
      <InputNumber value={value[2]} title="Blue" max={255} onInput={onBlue} />
    </>
  )
}

export default InputRGB
