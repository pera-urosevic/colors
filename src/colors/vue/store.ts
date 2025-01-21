import { randomHSL } from '@lib/color'
import { load, save } from '@lib/storage'
import type { Color } from '@lib/types'
import type { HSL } from 'color-convert/conversions'
import { ref } from 'vue'

export const hsl = ref<HSL>(randomHSL())
export const palette = ref<Color[]>(load())
export const colorSelected = ref<Color | null>(null)
export const fullScreen = ref<boolean>(false)

// hsl

export const setHSL = (newHSL: HSL) => {
  hsl.value = newHSL
  colorSelected.value = null
}

// palette

export const setPalette = (newPalette: Color[]) => {
  palette.value = newPalette
  save(newPalette)
}

export const swapPaletteColors = (colorName1: string, colorName2: string) => {
  const colorIndex1 = palette.value.findIndex((c) => c.name === colorName1)
  const color1 = palette.value[colorIndex1]
  const colorIndex2 = palette.value.findIndex((c) => c.name === colorName2)
  const color2 = palette.value[colorIndex2]
  if (!color1 || !color2) return
  const newPalette = [...palette.value]
  newPalette[colorIndex1] = color2
  newPalette[colorIndex2] = color1
  palette.value = newPalette
  save(newPalette)
}

// selected

export const setSelected = (colorNew: Color) => {
  if (colorNew === colorSelected.value) {
    colorSelected.value = null
    hsl.value = randomHSL()
    return
  }
  colorSelected.value = colorNew
  hsl.value = colorNew.hsl
}

export const unsetSelected = () => {
  colorSelected.value = null
  hsl.value = randomHSL()
}

// fullscreen

export const toggleFullScreen = async () => {
  fullScreen.value = !fullScreen.value
  if (fullScreen.value) {
    await document.documentElement.requestFullscreen()
  } else {
    await document.exitFullscreen()
  }
}
