import styles from '@react/components/Actions.module.css'
import type { Color } from '@lib/types'
import { setPalette, unsetSelected, useColorsStore } from '@react/store'

const Actions = () => {
  const palette = useColorsStore((state) => state.palette)
  const hsl = useColorsStore((state) => state.hsl)
  const selected = useColorsStore((state) => state.selected)

  const add = (color: Color) => {
    if (palette.find((c) => c.name === color.name)) {
      alert('Color name already exists')
      return
    }
    const paletteNew = [...palette, color]
    setPalette(paletteNew)
  }

  const remove = (color: Color) => {
    const paletteNew = palette.filter((c) => c !== color)
    setPalette(paletteNew)
  }

  const onSave = async () => {
    const name = prompt('Color Name?')
    if (!name) return
    const colorNew = { name, hsl: hsl }
    add(colorNew)
  }

  const onRemove = async () => {
    const cs = selected
    if (!cs) return
    const confirmed = confirm(`Are you sure you want to remove color "${cs.name}"?`)
    if (!confirmed) return
    remove(cs)
    unsetSelected()
  }

  return (
    <div className={styles.actions}>
      <button onClick={onSave}>Add</button>
      <button onClick={onRemove} disabled={!selected}>Remove</button>
    </div>
  )
}

export default Actions
