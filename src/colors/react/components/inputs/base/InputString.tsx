import type { ChangeEventHandler, KeyboardEventHandler } from 'react'
import styles from '@react/components/inputs/base/InputString.module.css'

type Props = {
  value: string
  title: string
  maxLength?: number
  width?: number
  onInput: (value: string) => void
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>
  onBlur?: VoidFunction
}

const InputString = (props: Props) => {
  const { value, title, maxLength = 20, width = 64, onInput, onKeyUp, onBlur } = props

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement
    const value = target.value
    onInput(value)
  }

  return (
    <input
      className={styles.inputString}
      type="string"
      maxLength={maxLength}
      value={value}
      title={title}
      onChange={onChange}
      style={{ width: `${width}px` }}
      onKeyUp={onKeyUp}
      onBlur={onBlur}
    />
  )
}

export default InputString
