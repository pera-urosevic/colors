import { DragDropSort } from '@lib/sort'
import { bgColorHSL } from '@react/helpers/style'
import styles from '@react/components/Palette.module.css'
import { setSelected, swapPaletteColors, useColorsStore } from '@react/store'
import { useRef } from 'react'

const Palette = () => {
  const palette = useColorsStore((state) => state.palette)

  const dds = useRef<DragDropSort>(new DragDropSort())

  const onDragStart: React.DragEventHandler<HTMLDivElement> = (e) => {
    dds.current.dragStart(e as unknown as DragEvent)
  }

  const onDragOver: React.DragEventHandler<HTMLDivElement> = (e) => {
    dds.current.dragOver(e as unknown as DragEvent)
  }

  const onSort = () => {
    const { drag, drop } = dds.current.dragEnd()
    if (!drag || !drop) return
    const colorNameDrag = drag.getAttribute('title')
    const colorNameDrop = drop.getAttribute('title')
    if (!colorNameDrag || !colorNameDrop) return
    swapPaletteColors(colorNameDrag, colorNameDrop)
  }

  return (
    <div className={styles.palette}>
      {palette.map((color) => (
        <div
          key={color.name}
          className={styles.color}
          draggable="true"
          title={color.name}
          style={bgColorHSL(color.hsl)}
          onClick={() => setSelected(color)}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDragEnd={onSort}
          role="button"
        ></div>
      ))}
    </div >
  )
}

export default Palette
