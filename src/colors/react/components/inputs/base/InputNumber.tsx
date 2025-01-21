import type { ChangeEventHandler } from 'react'
import styles from '@react/components/inputs/base/InputNumber.module.css'

type Props = {
  value: number
  title: string
  min?: number
  max?: number
  step?: number
  width?: number
  onInput: (value: number) => void
}

const InputNumber = (props: Props) => {
  const { value, title, min = 0, max = 100, step = 1, width = 64, onInput } = props

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement
    const value = Number(target.value)
    onInput(value)
  }

  return (
    <input
      className={styles.inputNumber}
      type="number"
      min={min}
      max={max}
      step={step}
      value={value}
      title={title}
      onInput={onChange}
      style={{ width: `${width}px` }}
    />
  )
}

export default InputNumber
