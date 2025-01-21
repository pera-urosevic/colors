import { bgColorHSL } from '@react/helpers/style'
import { toggleFullScreen, useColorsStore } from '@react/store'
import { useMemo } from 'react'
import styles from '@react/components/FullScreen.module.css'

const FullScreen = () => {
  const hsl = useColorsStore((state) => state.hsl)
  const fullScreen = useColorsStore((state) => state.fullScreen)

  const className = useMemo(() => {
    const classes = [styles.fullscreen]
    if (fullScreen) {
      classes.push(styles.show)
    } else {
      classes.push(styles.hide)
    }
    return classes.join(' ')
  }, [fullScreen])

  return <button
    style={bgColorHSL(hsl)}
    className={className}
    onClick={toggleFullScreen}
    aria-label="Toggle Fullscreen"
  ></button>
}

export default FullScreen
