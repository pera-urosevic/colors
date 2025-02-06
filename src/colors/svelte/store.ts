import { randomHSL } from '@lib/color'
import { load, save } from '@lib/storage'
import type { Color } from '@lib/types'
import type { HSL } from 'color-convert/conversions'
import { get, writable } from 'svelte/store'

export let hsl = writable<HSL>(randomHSL())
export let palette = writable<Color[] | undefined>()
export let selected = writable<Color | null>(null)
export let fullScreen = writable<boolean>(false)

// hsl

export const setHSL = (newHSL: HSL) => {
  hsl.set(newHSL)
  selected.set(null)
}

// palette

export const restorePalette = async () => {
  const newPalette = await load()
  palette.set(newPalette)
}

export const setPalette = async (newPalette: Color[]) => {
  palette.set(newPalette)
  await save(newPalette)
}

export const swapPaletteColors = (colorName1: string, colorName2: string) => {
  const paletteOld = get(palette)
  if (!paletteOld) return
  const colorIndex1 = paletteOld.findIndex((c) => c.name === colorName1)
  const color1 = paletteOld[colorIndex1]
  const colorIndex2 = paletteOld.findIndex((c) => c.name === colorName2)
  const color2 = paletteOld[colorIndex2]
  if (!color1 || !color2) return
  const paletteNew = [...paletteOld]
  paletteNew[colorIndex1] = color2
  paletteNew[colorIndex2] = color1
  palette.set(paletteNew)
  save(paletteNew)
}

// selected

export const setSelected = (colorNew: Color) => {
  if (colorNew === get(selected)) {
    selected.set(null)
    hsl.set(randomHSL())
    return
  }
  selected.set(colorNew)
  hsl.set(colorNew.hsl)
}

export const unsetSelected = () => {
  selected.set(null)
  hsl.set(randomHSL())
}

// full screen

export const toggleFullScreen = async () => {
  const fullScreenNew = !get(fullScreen)
  fullScreen.set(fullScreenNew)
  if (fullScreenNew) {
    await document.documentElement.requestFullscreen()
  } else {
    await document.exitFullscreen()
  }
}
