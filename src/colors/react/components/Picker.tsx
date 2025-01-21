
import convert from 'color-convert'
import { bgColorHSL } from '@react/helpers/style'
import type { HEX, HSL, RGB } from 'color-convert/conversions'
import InputHSL from '@react/components/inputs/colors/InputHSL'
import InputRGB from '@react/components/inputs/colors/InputRGB'
import InputHEX from '@react/components/inputs/colors/InputHEX'
import { useMemo } from 'react'
import { setHSL, toggleFullScreen, useColorsStore } from '@react/store'
import styles from '@react/components/Picker.module.css'

const Picker = () => {
  const hsl = useColorsStore((state) => state.hsl)

  const rgb = useMemo(() => convert.hsl.rgb(hsl), [hsl])
  const hex = useMemo(() => convert.hsl.hex(hsl), [hsl])

  const onHSL = (newHSL: HSL) => {
    setHSL(newHSL)
  }

  const onRGB = (newRGB: RGB) => {
    const newHSL: HSL = convert.rgb.hsl(newRGB)
    setHSL(newHSL)
  }

  const onHEX = (newHEX: HEX) => {
    const newHSL: HSL = convert.hex.hsl(newHEX)
    setHSL(newHSL)
  }

  return (
    <div className={styles.picker}>
      <button className={styles.preview} style={bgColorHSL(hsl)} onClick={toggleFullScreen}></button>
      <div className={styles.controls}>
        <div className={styles.format}>
          <div className={styles.name}>HSL</div>
          <InputHSL value={hsl} onInput={onHSL} />
        </div>
        <div className={styles.format}>
          <div className={styles.name}>RGB</div>
          <InputRGB value={rgb} onInput={onRGB} />
        </div>
        <div className={styles.format}>
          <div className={styles.name}>HEX</div>
          <InputHEX value={hex} onInput={onHEX} />
        </div>
      </div>
    </div>
  )
}

export default Picker
